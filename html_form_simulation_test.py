#!/usr/bin/env python3
"""
HTML Form Submission Simulation Test
Simulates actual browser form submission to test end-to-end functionality
"""

import requests
import json
import sys
from datetime import datetime

# URLs
BACKEND_URL = "https://emc-talent.preview.emergentagent.com/api"
HTML_URL = "http://localhost:8081"

class HTMLFormSimulator:
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
    
    def test_form_submission_simulation(self):
        """Simulate HTML form submission exactly as browser would do it"""
        # Realistic form data as would be submitted from HTML form
        form_data = {
            "firstName": "Michael",
            "lastName": "Rodriguez",
            "email": "michael.rodriguez@globaltech.com",
            "phone": "+1-555-345-6789",
            "company": "Global Tech Solutions",
            "jobTitle": "Vice President of Operations",
            "industry": "Technology",
            "interest": "Operational Excellence",
            "message": "We are seeking consulting services to optimize our operational processes and improve efficiency across our global offices. Our focus areas include process automation, workflow optimization, and performance measurement systems.",
            "newsletter": "on"  # HTML checkbox sends "on" when checked
        }
        
        # Convert checkbox value to boolean as JavaScript would
        if "newsletter" in form_data:
            form_data["newsletter"] = form_data["newsletter"] == "on"
        
        # Headers that browser would send
        headers = {
            'Content-Type': 'application/json',
            'Origin': HTML_URL,
            'Referer': HTML_URL,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        
        try:
            response = requests.post(f"{BACKEND_URL}/contact", 
                                   json=form_data, 
                                   headers=headers,
                                   timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                required_fields = ["id", "firstName", "lastName", "email", "timestamp", "status"]
                
                if all(field in data for field in required_fields):
                    self.log_result("HTML Form Submission Simulation", "PASS", 
                                  f"Form submission successful - Contact ID: {data.get('id')}", 
                                  {
                                      "id": data.get("id"),
                                      "name": f"{data.get('firstName')} {data.get('lastName')}",
                                      "company": data.get("company"),
                                      "status": data.get("status")
                                  })
                else:
                    missing = [f for f in required_fields if f not in data]
                    self.log_result("HTML Form Submission Simulation", "FAIL", 
                                  f"Response missing required fields: {missing}", data)
            else:
                self.log_result("HTML Form Submission Simulation", "FAIL", 
                              f"HTTP {response.status_code}: {response.text}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("HTML Form Submission Simulation", "FAIL", f"Connection error: {str(e)}")
    
    def test_form_with_special_characters(self):
        """Test form submission with special characters and international data"""
        form_data = {
            "firstName": "José María",
            "lastName": "García-López",
            "email": "jose.garcia@consultoria-internacional.es",
            "phone": "+34-91-123-4567",
            "company": "Consultoría Internacional S.A.",
            "jobTitle": "Director Ejecutivo",
            "industry": "Financial Services",
            "interest": "Strategic Consulting Services",
            "message": "Estamos interesados en servicios de consultoría estratégica para expandir nuestras operaciones en el mercado estadounidense. Necesitamos apoyo en planificación estratégica y desarrollo de liderazgo.",
            "newsletter": True
        }
        
        headers = {
            'Content-Type': 'application/json',
            'Origin': HTML_URL,
            'Referer': HTML_URL
        }
        
        try:
            response = requests.post(f"{BACKEND_URL}/contact", 
                                   json=form_data, 
                                   headers=headers,
                                   timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if data.get("firstName") == "José María" and "García-López" in data.get("lastName", ""):
                    self.log_result("Special Characters Test", "PASS", 
                                  f"Successfully handled international characters - ID: {data.get('id')}")
                else:
                    self.log_result("Special Characters Test", "FAIL", 
                                  "Special characters not properly handled", data)
            else:
                self.log_result("Special Characters Test", "FAIL", 
                              f"HTTP {response.status_code}: {response.text}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("Special Characters Test", "FAIL", f"Connection error: {str(e)}")
    
    def test_form_validation_errors(self):
        """Test form validation with various invalid inputs"""
        test_cases = [
            {
                "name": "Missing Required Fields",
                "data": {
                    "firstName": "Test",
                    "email": "test@example.com"
                    # Missing other required fields
                },
                "expected_status": 422
            },
            {
                "name": "Invalid Email Format",
                "data": {
                    "firstName": "Test",
                    "lastName": "User",
                    "email": "not-an-email",
                    "phone": "+1-555-123-4567",
                    "company": "Test Co",
                    "jobTitle": "Tester",
                    "industry": "Technology",
                    "interest": "Testing",
                    "message": "Test message"
                },
                "expected_status": 422
            }
        ]
        
        for test_case in test_cases:
            try:
                response = requests.post(f"{BACKEND_URL}/contact", 
                                       json=test_case["data"], 
                                       headers={'Content-Type': 'application/json'},
                                       timeout=10)
                
                if response.status_code == test_case["expected_status"]:
                    self.log_result(f"Validation - {test_case['name']}", "PASS", 
                                  f"Correctly rejected invalid data with status {response.status_code}")
                else:
                    self.log_result(f"Validation - {test_case['name']}", "FAIL", 
                                  f"Expected status {test_case['expected_status']}, got {response.status_code}")
                    
            except requests.exceptions.RequestException as e:
                self.log_result(f"Validation - {test_case['name']}", "FAIL", f"Connection error: {str(e)}")
    
    def test_data_persistence(self):
        """Test that submitted data is properly stored and retrievable"""
        # Submit a contact form
        form_data = {
            "firstName": "DataTest",
            "lastName": "Persistence",
            "email": "datatest@persistence.com",
            "phone": "+1-555-TEST-123",
            "company": "Test Persistence Corp",
            "jobTitle": "Data Tester",
            "industry": "Technology",
            "interest": "Data Management",
            "message": "Testing data persistence functionality",
            "newsletter": False
        }
        
        try:
            # Submit form
            submit_response = requests.post(f"{BACKEND_URL}/contact", 
                                          json=form_data, 
                                          timeout=10)
            
            if submit_response.status_code == 200:
                contact_id = submit_response.json().get("id")
                
                # Retrieve contacts to verify data was stored
                get_response = requests.get(f"{BACKEND_URL}/contacts", timeout=10)
                
                if get_response.status_code == 200:
                    contacts = get_response.json()
                    
                    # Find our submitted contact
                    found_contact = None
                    for contact in contacts:
                        if contact.get("id") == contact_id:
                            found_contact = contact
                            break
                    
                    if found_contact:
                        if (found_contact.get("firstName") == "DataTest" and 
                            found_contact.get("email") == "datatest@persistence.com"):
                            self.log_result("Data Persistence", "PASS", 
                                          f"Data properly stored and retrieved - ID: {contact_id}")
                        else:
                            self.log_result("Data Persistence", "FAIL", 
                                          "Data stored but values don't match", found_contact)
                    else:
                        self.log_result("Data Persistence", "FAIL", 
                                      f"Submitted contact not found in database - ID: {contact_id}")
                else:
                    self.log_result("Data Persistence", "FAIL", 
                                  f"Could not retrieve contacts: HTTP {get_response.status_code}")
            else:
                self.log_result("Data Persistence", "FAIL", 
                              f"Form submission failed: HTTP {submit_response.status_code}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("Data Persistence", "FAIL", f"Connection error: {str(e)}")
    
    def run_all_tests(self):
        """Run all HTML form simulation tests"""
        print("🚀 Starting HTML Form Submission Simulation Tests")
        print("=" * 70)
        
        # Test sequence
        self.test_form_submission_simulation()
        self.test_form_with_special_characters()
        self.test_form_validation_errors()
        self.test_data_persistence()
        
        # Summary
        print("\n" + "=" * 70)
        print("📊 HTML FORM SIMULATION TEST SUMMARY")
        print("=" * 70)
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
    simulator = HTMLFormSimulator()
    success = simulator.run_all_tests()
    
    # Exit with appropriate code
    sys.exit(0 if success else 1)