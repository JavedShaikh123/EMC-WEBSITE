#!/usr/bin/env python3
"""
HTML Navigation and JavaScript Functionality Test
Tests the HTML version navigation, dropdowns, and SPA routing
"""

import requests
import sys
from datetime import datetime

# URLs
HTML_URL = "http://localhost:8081"

class HTMLNavigationTester:
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
    
    def test_html_page_title(self):
        """Test if HTML page has correct title"""
        try:
            response = requests.get(HTML_URL, timeout=10)
            
            if response.status_code == 200:
                html_content = response.text
                
                if "EMC-US - Executive Management Consulting" in html_content:
                    self.log_result("HTML Page Title", "PASS", 
                                  "Correct page title found in HTML")
                else:
                    # Check what title is actually present
                    import re
                    title_match = re.search(r'<title>(.*?)</title>', html_content)
                    actual_title = title_match.group(1) if title_match else "No title found"
                    self.log_result("HTML Page Title", "FAIL", 
                                  f"Wrong page title. Expected 'EMC-US - Executive Management Consulting', got '{actual_title}'")
            else:
                self.log_result("HTML Page Title", "FAIL", 
                              f"Could not access HTML: HTTP {response.status_code}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("HTML Page Title", "FAIL", f"Connection error: {str(e)}")
    
    def test_javascript_loading(self):
        """Test if JavaScript file loads correctly"""
        try:
            js_response = requests.get(f"{HTML_URL}/js/app.js", timeout=10)
            
            if js_response.status_code == 200:
                js_content = js_response.text
                
                # Check for key JavaScript functions
                required_functions = [
                    'function navigateTo',
                    'function showDropdown',
                    'function hideDropdown',
                    'function handleFormSubmit',
                    'function showSolutionCategory'
                ]
                
                missing_functions = []
                for func in required_functions:
                    if func not in js_content:
                        missing_functions.append(func)
                
                if not missing_functions:
                    self.log_result("JavaScript Loading", "PASS", 
                                  "All required JavaScript functions are present")
                else:
                    self.log_result("JavaScript Loading", "FAIL", 
                                  f"Missing JavaScript functions: {missing_functions}")
            else:
                self.log_result("JavaScript Loading", "FAIL", 
                              f"Could not load JavaScript: HTTP {js_response.status_code}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("JavaScript Loading", "FAIL", f"Connection error: {str(e)}")
    
    def test_navigation_elements(self):
        """Test if navigation elements are present in HTML"""
        try:
            response = requests.get(HTML_URL, timeout=10)
            
            if response.status_code == 200:
                html_content = response.text
                
                # Check for navigation elements
                nav_elements = [
                    'onmouseenter="showDropdown(\'solutions\')"',
                    'onmouseenter="showDropdown(\'industries\')"',
                    'onmouseenter="showDropdown(\'resources\')"',
                    'onmouseenter="showDropdown(\'about\')"',
                    'onclick="navigateTo(',
                    'id="solutions-dropdown"',
                    'id="industries-dropdown"',
                    'id="resources-dropdown"',
                    'id="about-dropdown"'
                ]
                
                missing_elements = []
                for element in nav_elements:
                    if element not in html_content:
                        missing_elements.append(element)
                
                if not missing_elements:
                    self.log_result("Navigation Elements", "PASS", 
                                  "All navigation elements present in HTML")
                else:
                    self.log_result("Navigation Elements", "FAIL", 
                                  f"Missing navigation elements: {missing_elements}")
            else:
                self.log_result("Navigation Elements", "FAIL", 
                              f"Could not access HTML: HTTP {response.status_code}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("Navigation Elements", "FAIL", f"Connection error: {str(e)}")
    
    def test_spa_routing_elements(self):
        """Test if SPA routing elements are present"""
        try:
            response = requests.get(HTML_URL, timeout=10)
            
            if response.status_code == 200:
                html_content = response.text
                
                # Check for SPA routing elements
                spa_elements = [
                    'id="main-content"',
                    'id="home-page"',
                    'class="page-section',
                    'window.location.hash'
                ]
                
                missing_elements = []
                for element in spa_elements:
                    if element not in html_content:
                        missing_elements.append(element)
                
                if not missing_elements:
                    self.log_result("SPA Routing Elements", "PASS", 
                                  "SPA routing elements present in HTML")
                else:
                    self.log_result("SPA Routing Elements", "FAIL", 
                                  f"Missing SPA routing elements: {missing_elements}")
            else:
                self.log_result("SPA Routing Elements", "FAIL", 
                              f"Could not access HTML: HTTP {response.status_code}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("SPA Routing Elements", "FAIL", f"Connection error: {str(e)}")
    
    def test_contact_modal_elements(self):
        """Test if contact modal elements are present"""
        try:
            response = requests.get(HTML_URL, timeout=10)
            
            if response.status_code == 200:
                html_content = response.text
                
                # Check for contact modal elements
                modal_elements = [
                    'id="contact-modal"',
                    'onclick="openContactModal()"',
                    'onclick="closeContactModal()"',
                    'Mohammed Javed Shaikh',
                    'javed@emc-us.com',
                    'javed@emcindia.in',
                    '+1 856 762 0564',
                    '+91 9223308247'
                ]
                
                missing_elements = []
                for element in modal_elements:
                    if element not in html_content:
                        missing_elements.append(element)
                
                if not missing_elements:
                    self.log_result("Contact Modal Elements", "PASS", 
                                  "Contact modal elements present with correct contact information")
                else:
                    self.log_result("Contact Modal Elements", "FAIL", 
                                  f"Missing contact modal elements: {missing_elements}")
            else:
                self.log_result("Contact Modal Elements", "FAIL", 
                              f"Could not access HTML: HTTP {response.status_code}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("Contact Modal Elements", "FAIL", f"Connection error: {str(e)}")
    
    def test_solution_category_tabs(self):
        """Test if solution category tab elements are present"""
        try:
            response = requests.get(HTML_URL, timeout=10)
            
            if response.status_code == 200:
                html_content = response.text
                
                # Check for solution category elements
                solution_elements = [
                    'onclick="showSolutionCategory(\'strategy\')"',
                    'onclick="showSolutionCategory(\'transformation\')"',
                    'onclick="showSolutionCategory(\'leadership\')"',
                    'onclick="showSolutionCategory(\'operations\')"',
                    'id="strategy-solutions"',
                    'id="transformation-solutions"',
                    'id="leadership-solutions"',
                    'id="operations-solutions"'
                ]
                
                missing_elements = []
                for element in solution_elements:
                    if element not in html_content:
                        missing_elements.append(element)
                
                if not missing_elements:
                    self.log_result("Solution Category Tabs", "PASS", 
                                  "Solution category tab elements present")
                else:
                    self.log_result("Solution Category Tabs", "FAIL", 
                                  f"Missing solution category elements: {missing_elements}")
            else:
                self.log_result("Solution Category Tabs", "FAIL", 
                              f"Could not access HTML: HTTP {response.status_code}")
                
        except requests.exceptions.RequestException as e:
            self.log_result("Solution Category Tabs", "FAIL", f"Connection error: {str(e)}")
    
    def run_all_tests(self):
        """Run all HTML navigation tests"""
        print("🚀 Starting HTML Navigation and JavaScript Tests")
        print("=" * 70)
        
        # Test sequence
        self.test_html_page_title()
        self.test_javascript_loading()
        self.test_navigation_elements()
        self.test_spa_routing_elements()
        self.test_contact_modal_elements()
        self.test_solution_category_tabs()
        
        # Summary
        print("\n" + "=" * 70)
        print("📊 HTML NAVIGATION TEST SUMMARY")
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
    tester = HTMLNavigationTester()
    success = tester.run_all_tests()
    
    # Exit with appropriate code
    sys.exit(0 if success else 1)