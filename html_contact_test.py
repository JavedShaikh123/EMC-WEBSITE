#!/usr/bin/env python3
"""
HTML Contact Form API Integration Test
Tests the HTML version contact form submission to backend API
"""

import requests
import json
import sys
from datetime import datetime
import time

# Backend URL from HTML version JavaScript
BACKEND_URL = "https://emc-talent.preview.emergentagent.com/api"
HTML_URL = "http://localhost:8081"

class HTMLContactTester:
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
    
    def test_html_version_accessibility(self):
        """Test if HTML version is accessible at localhost:8081"""
        try:
            response = requests.get(HTML_URL, timeout=10)
            
            if response.status_code == 200:
                if "EMC-US - Executive Management Consulting" in response.text:
                    self.log_result("HTML Version Accessibility", "PASS", 
                                  f"HTML version accessible at {HTML_URL}")
                else:
                    self.log_result("HTML Version Accessibility", "FAIL", 
                                  "HTML version accessible but wrong content")
            else:
                self.log_result("HTML Version Accessibility", "FAIL", 
                              f"HTTP {response.status_code}: {response.text[:200]}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("HTML Version Accessibility", "FAIL", f"Connection error: {str(e)}")
    
    def test_backend_api_direct(self):
        """Test backend API directly with contact form data"""
        contact_data = {
            "firstName": "Sarah",
            "lastName": "Johnson",
            "email": "sarah.johnson@techcorp.com",
            "phone": "+1-555-234-5678",
            "company": "TechCorp Solutions",
            "jobTitle": "Chief Technology Officer",
            "industry": "Technology",
            "interest": "Digital Transformation",
            "message": "We are looking for comprehensive digital transformation consulting services to modernize our legacy systems and improve operational efficiency across our organization.",
            "country": "United States",
            "newsletter": True
        }
        
        try:
            response = requests.post(f"{BACKEND_URL}/contact", 
                                   json=contact_data, 
                                   timeout=10)
            
            if response.status_code == 200:
                data = response.json()
                if "id" in data and data["firstName"] == "Sarah":
                    self.log_result("Backend API Direct Test", "PASS", 
                                  f"Backend API working - Contact created with ID: {data.get('id')}", 
                                  {"id": data.get("id"), "status": data.get("status")})
                else:
                    self.log_result("Backend API Direct Test", "FAIL", 
                                  "Backend API response missing required fields", data)
            else:
                self.log_result("Backend API Direct Test", "FAIL", 
                              f"HTTP {response.status_code}: {response.text}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("Backend API Direct Test", "FAIL", f"Connection error: {str(e)}")
    
    def test_html_form_structure(self):
        """Test if HTML form has all required fields"""
        try:
            response = requests.get(HTML_URL, timeout=10)
            
            if response.status_code == 200:
                html_content = response.text
                
                # Check for required form fields
                required_fields = [
                    'id="firstName"',
                    'id="lastName"', 
                    'id="email"',
                    'id="phone"',
                    'id="company"',
                    'id="jobTitle"',
                    'id="industry"',
                    'id="interest"',
                    'id="message"',
                    'id="contact-form"'
                ]
                
                missing_fields = []
                for field in required_fields:
                    if field not in html_content:
                        missing_fields.append(field)
                
                if not missing_fields:
                    self.log_result("HTML Form Structure", "PASS", 
                                  "All required form fields present in HTML")
                else:
                    self.log_result("HTML Form Structure", "FAIL", 
                                  f"Missing form fields: {missing_fields}")
            else:
                self.log_result("HTML Form Structure", "FAIL", 
                              f"Could not access HTML: HTTP {response.status_code}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("HTML Form Structure", "FAIL", f"Connection error: {str(e)}")
    
    def test_javascript_functions(self):
        """Test if required JavaScript functions are present"""
        try:
            js_response = requests.get(f"{HTML_URL}/js/app.js", timeout=10)
            
            if js_response.status_code == 200:
                js_content = js_response.text
                
                # Check for required JavaScript functions
                required_functions = [
                    'handleFormSubmit',
                    'initContactForm',
                    'getBackendUrl',
                    'showToast',
                    'navigateTo',
                    'showDropdown',
                    'hideDropdown'
                ]
                
                missing_functions = []
                for func in required_functions:
                    if func not in js_content:
                        missing_functions.append(func)
                
                if not missing_functions:
                    # Check if backend URL is correct
                    if "https://emc-talent.preview.emergentagent.com" in js_content:
                        self.log_result("JavaScript Functions", "PASS", 
                                      "All required JavaScript functions present with correct backend URL")
                    else:
                        self.log_result("JavaScript Functions", "FAIL", 
                                      "JavaScript functions present but backend URL may be incorrect")
                else:
                    self.log_result("JavaScript Functions", "FAIL", 
                                  f"Missing JavaScript functions: {missing_functions}")
            else:
                self.log_result("JavaScript Functions", "FAIL", 
                              f"Could not access JavaScript: HTTP {js_response.status_code}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("JavaScript Functions", "FAIL", f"Connection error: {str(e)}")
    
    def test_cors_configuration(self):
        """Test CORS configuration for HTML version"""
        try:
            # Test preflight request
            headers = {
                'Origin': 'http://localhost:8081',
                'Access-Control-Request-Method': 'POST',
                'Access-Control-Request-Headers': 'Content-Type'
            }
            
            response = requests.options(f"{BACKEND_URL}/contact", 
                                      headers=headers, 
                                      timeout=10)
            
            if response.status_code in [200, 204]:
                cors_headers = response.headers
                if 'Access-Control-Allow-Origin' in cors_headers:
                    self.log_result("CORS Configuration", "PASS", 
                                  f"CORS configured - Allow-Origin: {cors_headers.get('Access-Control-Allow-Origin')}")
                else:
                    self.log_result("CORS Configuration", "FAIL", 
                                  "CORS headers missing in preflight response")
            else:
                self.log_result("CORS Configuration", "FAIL", 
                              f"Preflight request failed: HTTP {response.status_code}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("CORS Configuration", "FAIL", f"Connection error: {str(e)}")
    
    def test_form_validation(self):
        """Test form validation with invalid data"""
        invalid_data = {
            "firstName": "Test",
            "lastName": "User",
            "email": "invalid-email",  # Invalid email
            "phone": "+1-555-999-0000",
            "company": "Test Company",
            "jobTitle": "Manager",
            "industry": "Technology",
            "interest": "Testing",
            "message": "Test message"
        }
        
        try:
            response = requests.post(f"{BACKEND_URL}/contact", 
                                   json=invalid_data, 
                                   timeout=10)
            
            if response.status_code == 422:  # Validation error expected
                self.log_result("Form Validation", "PASS", 
                              "Backend validation working - rejected invalid email")
            elif response.status_code == 200:
                self.log_result("Form Validation", "FAIL", 
                              "Backend validation not working - accepted invalid email")
            else:
                self.log_result("Form Validation", "FAIL", 
                              f"Unexpected response: HTTP {response.status_code}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("Form Validation", "FAIL", f"Connection error: {str(e)}")
    
    def run_all_tests(self):
        """Run all HTML contact form tests"""
        print("🚀 Starting HTML Contact Form API Integration Tests")
        print("=" * 70)
        
        # Test sequence
        self.test_html_version_accessibility()
        self.test_backend_api_direct()
        self.test_html_form_structure()
        self.test_javascript_functions()
        self.test_cors_configuration()
        self.test_form_validation()
        
        # Summary
        print("\n" + "=" * 70)
        print("📊 HTML CONTACT FORM TEST SUMMARY")
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
    tester = HTMLContactTester()
    success = tester.run_all_tests()
    
    # Exit with appropriate code
    sys.exit(0 if success else 1)