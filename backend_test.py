#!/usr/bin/env python3
"""
Backend API Testing for EMC-US Executive Management Consulting Website
Tests all backend endpoints thoroughly including validation and error handling
"""

import requests
import json
import sys
from datetime import datetime
import uuid

# Backend URL from frontend .env
BACKEND_URL = "https://emc-talent.preview.emergentagent.com/api"

class BackendTester:
    def __init__(self):
        self.results = []
        self.failed_tests = []
        self.passed_tests = []
        
    def log_result(self, test_name, status, message, response_data=None):
        """Log test result"""
        result = {
            'test': test_name,
            'status': status,
            'message': message,
            'timestamp': datetime.now().isoformat(),
            'response_data': response_data
        }
        self.results.append(result)
        
        if status == 'PASS':
            self.passed_tests.append(test_name)
            print(f"✅ {test_name}: {message}")
        else:
            self.failed_tests.append(test_name)
            print(f"❌ {test_name}: {message}")
            if response_data:
                print(f"   Response: {response_data}")
    
    def test_health_check(self):
        """Test GET /api/ - Health check endpoint"""
        try:
            response = requests.get(f"{BACKEND_URL}/", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if "message" in data and "EMC-US API is running" in data["message"]:
                    self.log_result("Health Check", "PASS", 
                                  f"API is running - Status: {response.status_code}", data)
                else:
                    self.log_result("Health Check", "FAIL", 
                                  f"Unexpected response format", data)
            else:
                self.log_result("Health Check", "FAIL", 
                              f"HTTP {response.status_code}: {response.text}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("Health Check", "FAIL", f"Connection error: {str(e)}")
    
    def test_contact_form_valid(self):
        """Test POST /api/contact with valid data"""
        valid_contact_data = {
            "firstName": "John",
            "lastName": "Smith",
            "email": "john.smith@acmecorp.com",
            "phone": "+1-555-123-4567",
            "company": "ACME Corporation",
            "jobTitle": "Chief Executive Officer",
            "industry": "Technology",
            "interest": "Digital Transformation",
            "message": "We are interested in exploring digital transformation opportunities for our organization. Please contact us to discuss potential consulting services.",
            "country": "United States",
            "newsletter": True
        }
        
        try:
            response = requests.post(f"{BACKEND_URL}/contact", 
                                   json=valid_contact_data, 
                                   timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                required_fields = ["id", "firstName", "lastName", "email", "timestamp"]
                
                if all(field in data for field in required_fields):
                    self.log_result("Contact Form Valid", "PASS", 
                                  f"Contact created successfully with ID: {data.get('id')}", 
                                  {"id": data.get("id"), "status": data.get("status")})
                else:
                    missing = [f for f in required_fields if f not in data]
                    self.log_result("Contact Form Valid", "FAIL", 
                                  f"Missing required fields in response: {missing}", data)
            else:
                self.log_result("Contact Form Valid", "FAIL", 
                              f"HTTP {response.status_code}: {response.text}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("Contact Form Valid", "FAIL", f"Connection error: {str(e)}")
    
    def test_contact_form_invalid_email(self):
        """Test POST /api/contact with invalid email format"""
        invalid_email_data = {
            "firstName": "Jane",
            "lastName": "Doe",
            "email": "invalid-email-format",  # Invalid email
            "phone": "+1-555-987-6543",
            "company": "Test Company",
            "jobTitle": "Manager",
            "industry": "Finance",
            "interest": "Strategy Consulting",
            "message": "Test message with invalid email"
        }
        
        try:
            response = requests.post(f"{BACKEND_URL}/contact", 
                                   json=invalid_email_data, 
                                   timeout=10)
            
            if response.status_code == 422:  # Validation error expected
                self.log_result("Contact Form Invalid Email", "PASS", 
                              "Email validation working - rejected invalid email format")
            elif response.status_code == 200:
                self.log_result("Contact Form Invalid Email", "FAIL", 
                              "Email validation not working - accepted invalid email")
            else:
                self.log_result("Contact Form Invalid Email", "FAIL", 
                              f"Unexpected status code {response.status_code}: {response.text}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("Contact Form Invalid Email", "FAIL", f"Connection error: {str(e)}")
    
    def test_contact_form_missing_fields(self):
        """Test POST /api/contact with missing required fields"""
        incomplete_data = {
            "firstName": "Test",
            "email": "test@example.com"
            # Missing required fields: lastName, phone, company, jobTitle, industry, interest, message
        }
        
        try:
            response = requests.post(f"{BACKEND_URL}/contact", 
                                   json=incomplete_data, 
                                   timeout=10)
            
            if response.status_code == 422:  # Validation error expected
                self.log_result("Contact Form Missing Fields", "PASS", 
                              "Required field validation working - rejected incomplete data")
            elif response.status_code == 200:
                self.log_result("Contact Form Missing Fields", "FAIL", 
                              "Required field validation not working - accepted incomplete data")
            else:
                self.log_result("Contact Form Missing Fields", "FAIL", 
                              f"Unexpected status code {response.status_code}: {response.text}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("Contact Form Missing Fields", "FAIL", f"Connection error: {str(e)}")
    
    def test_get_contacts(self):
        """Test GET /api/contacts - Retrieve contacts"""
        try:
            response = requests.get(f"{BACKEND_URL}/contacts", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_result("Get Contacts", "PASS", 
                                  f"Retrieved {len(data)} contacts successfully", 
                                  {"count": len(data)})
                else:
                    self.log_result("Get Contacts", "FAIL", 
                                  "Response is not a list format", data)
            else:
                self.log_result("Get Contacts", "FAIL", 
                              f"HTTP {response.status_code}: {response.text}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("Get Contacts", "FAIL", f"Connection error: {str(e)}")
    
    def test_get_resources(self):
        """Test GET /api/resources - Get resources"""
        try:
            response = requests.get(f"{BACKEND_URL}/resources", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_result("Get Resources", "PASS", 
                                  f"Retrieved {len(data)} resources successfully", 
                                  {"count": len(data)})
                else:
                    self.log_result("Get Resources", "FAIL", 
                                  "Response is not a list format", data)
            else:
                self.log_result("Get Resources", "FAIL", 
                              f"HTTP {response.status_code}: {response.text}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("Get Resources", "FAIL", f"Connection error: {str(e)}")
    
    def test_get_solutions(self):
        """Test GET /api/solutions - Get solutions"""
        try:
            response = requests.get(f"{BACKEND_URL}/solutions", timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_result("Get Solutions", "PASS", 
                                  f"Retrieved {len(data)} solutions successfully", 
                                  {"count": len(data)})
                else:
                    self.log_result("Get Solutions", "FAIL", 
                                  "Response is not a list format", data)
            else:
                self.log_result("Get Solutions", "FAIL", 
                              f"HTTP {response.status_code}: {response.text}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("Get Solutions", "FAIL", f"Connection error: {str(e)}")
    
    def test_contact_form_edge_cases(self):
        """Test contact form with edge cases"""
        edge_case_data = {
            "firstName": "María José",  # Special characters
            "lastName": "O'Connor-Smith",  # Apostrophe and hyphen
            "email": "maria.jose@global-consulting.co.uk",
            "phone": "+44-20-7946-0958",  # International format
            "company": "Global Consulting & Associates Ltd.",
            "jobTitle": "Senior Vice President of Strategic Operations",
            "industry": "Professional Services",
            "interest": "Organizational Transformation & Change Management",
            "message": "We're looking for comprehensive consulting services to support our digital transformation initiative across multiple international offices. Our focus areas include: 1) Process optimization, 2) Technology integration, 3) Change management, and 4) Performance measurement systems.",
            "country": "United Kingdom",
            "newsletter": False
        }
        
        try:
            response = requests.post(f"{BACKEND_URL}/contact", 
                                   json=edge_case_data, 
                                   timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if "id" in data and data["firstName"] == "María José":
                    self.log_result("Contact Form Edge Cases", "PASS", 
                                  "Successfully handled special characters and long text", 
                                  {"id": data.get("id")})
                else:
                    self.log_result("Contact Form Edge Cases", "FAIL", 
                                  "Data not properly stored or returned", data)
            else:
                self.log_result("Contact Form Edge Cases", "FAIL", 
                              f"HTTP {response.status_code}: {response.text}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("Contact Form Edge Cases", "FAIL", f"Connection error: {str(e)}")
    
    def run_all_tests(self):
        """Run all backend tests"""
        print("🚀 Starting EMC-US Backend API Tests")
        print("=" * 60)
        
        # Test sequence
        self.test_health_check()
        self.test_contact_form_valid()
        self.test_contact_form_invalid_email()
        self.test_contact_form_missing_fields()
        self.test_contact_form_edge_cases()
        self.test_get_contacts()
        self.test_get_resources()
        self.test_get_solutions()
        
        # Summary
        print("\n" + "=" * 60)
        print("📊 TEST SUMMARY")
        print("=" * 60)
        print(f"✅ Passed: {len(self.passed_tests)}")
        print(f"❌ Failed: {len(self.failed_tests)}")
        print(f"📈 Total: {len(self.results)}")
        
        if self.failed_tests:
            print(f"\n🔍 Failed Tests:")
            for test in self.failed_tests:
                print(f"   - {test}")
        
        if self.passed_tests:
            print(f"\n✨ Passed Tests:")
            for test in self.passed_tests:
                print(f"   - {test}")
        
        return len(self.failed_tests) == 0

if __name__ == "__main__":
    tester = BackendTester()
    success = tester.run_all_tests()
    
    # Exit with appropriate code
    sys.exit(0 if success else 1)