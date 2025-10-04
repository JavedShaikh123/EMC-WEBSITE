from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI(title="EMC-US API", description="Executive Management Consulting API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactForm(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    firstName: str
    lastName: str
    email: EmailStr
    phone: str
    company: str
    jobTitle: str
    industry: str
    interest: str
    message: str
    country: Optional[str] = None
    newsletter: bool = False
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    status: str = Field(default="new")

class ContactFormCreate(BaseModel):
    firstName: str
    lastName: str
    email: EmailStr
    phone: str
    company: str
    jobTitle: str
    industry: str
    interest: str
    message: str
    country: Optional[str] = None
    newsletter: bool = False

class Resource(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    type: str  # 'Article', 'Case study', 'Press & media'
    tag: str
    description: str
    image: str
    readTime: str
    author: Optional[str] = None
    publishDate: datetime = Field(default_factory=datetime.utcnow)
    featured: bool = False

class ResourceCreate(BaseModel):
    title: str
    type: str
    tag: str
    description: str
    image: str
    readTime: str
    author: Optional[str] = None
    featured: bool = False

class Solution(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    title: str
    category: str  # 'Strategy', 'Transformation', 'Leadership', 'Operations'
    description: str
    image: str
    features: List[str] = []
    benefits: List[str] = []

class SolutionCreate(BaseModel):
    title: str
    category: str
    description: str
    image: str
    features: List[str] = []
    benefits: List[str] = []

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "EMC-US API is running", "version": "1.0.0"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

# Contact Form Endpoints
@api_router.post("/contact", response_model=ContactForm)
async def create_contact(input: ContactFormCreate):
    try:
        contact_dict = input.dict()
        contact_obj = ContactForm(**contact_dict)
        
        # Insert into MongoDB
        result = await db.contacts.insert_one(contact_obj.dict())
        
        if result.inserted_id:
            logger.info(f"New contact form submitted: {contact_obj.firstName} {contact_obj.lastName} from {contact_obj.company}")
            return contact_obj
        else:
            raise HTTPException(status_code=500, detail="Failed to save contact form")
            
    except Exception as e:
        logger.error(f"Error creating contact: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/contacts", response_model=List[ContactForm])
async def get_contacts(skip: int = 0, limit: int = 100):
    try:
        contacts = await db.contacts.find().sort("timestamp", -1).skip(skip).limit(limit).to_list(limit)
        return [ContactForm(**contact) for contact in contacts]
    except Exception as e:
        logger.error(f"Error fetching contacts: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/contacts/{contact_id}", response_model=ContactForm)
async def get_contact(contact_id: str):
    try:
        contact = await db.contacts.find_one({"id": contact_id})
        if contact:
            return ContactForm(**contact)
        else:
            raise HTTPException(status_code=404, detail="Contact not found")
    except Exception as e:
        logger.error(f"Error fetching contact: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Resources Endpoints
@api_router.post("/resources", response_model=Resource)
async def create_resource(input: ResourceCreate):
    try:
        resource_dict = input.dict()
        resource_obj = Resource(**resource_dict)
        
        result = await db.resources.insert_one(resource_obj.dict())
        
        if result.inserted_id:
            return resource_obj
        else:
            raise HTTPException(status_code=500, detail="Failed to save resource")
            
    except Exception as e:
        logger.error(f"Error creating resource: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/resources", response_model=List[Resource])
async def get_resources(skip: int = 0, limit: int = 50, featured: Optional[bool] = None):
    try:
        query = {}
        if featured is not None:
            query["featured"] = featured
            
        resources = await db.resources.find(query).sort("publishDate", -1).skip(skip).limit(limit).to_list(limit)
        return [Resource(**resource) for resource in resources]
    except Exception as e:
        logger.error(f"Error fetching resources: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/resources/{resource_id}", response_model=Resource)
async def get_resource(resource_id: str):
    try:
        resource = await db.resources.find_one({"id": resource_id})
        if resource:
            return Resource(**resource)
        else:
            raise HTTPException(status_code=404, detail="Resource not found")
    except Exception as e:
        logger.error(f"Error fetching resource: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Solutions Endpoints
@api_router.post("/solutions", response_model=Solution)
async def create_solution(input: SolutionCreate):
    try:
        solution_dict = input.dict()
        solution_obj = Solution(**solution_dict)
        
        result = await db.solutions.insert_one(solution_obj.dict())
        
        if result.inserted_id:
            return solution_obj
        else:
            raise HTTPException(status_code=500, detail="Failed to save solution")
            
    except Exception as e:
        logger.error(f"Error creating solution: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/solutions", response_model=List[Solution])
async def get_solutions(category: Optional[str] = None):
    try:
        query = {}
        if category:
            query["category"] = category
            
        solutions = await db.solutions.find(query).to_list(100)
        return [Solution(**solution) for solution in solutions]
    except Exception as e:
        logger.error(f"Error fetching solutions: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@api_router.get("/solutions/{solution_id}", response_model=Solution)
async def get_solution(solution_id: str):
    try:
        solution = await db.solutions.find_one({"id": solution_id})
        if solution:
            return Solution(**solution)
        else:
            raise HTTPException(status_code=404, detail="Solution not found")
    except Exception as e:
        logger.error(f"Error fetching solution: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
