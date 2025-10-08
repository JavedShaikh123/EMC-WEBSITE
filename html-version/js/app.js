// Initialize Lucide icons when DOM loads
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    
    // Initialize router
    initRouter();
    
    // Handle form submission
    initContactForm();
    
    // Set initial page based on URL
    const path = window.location.hash.slice(1) || 'home';
    navigateTo(path);
});

// Router functionality
function initRouter() {
    window.addEventListener('hashchange', handleRouteChange);
}

function handleRouteChange() {
    const path = window.location.hash.slice(1) || 'home';
    showPage(path);
}

function navigateTo(path) {
    window.location.hash = path;
    showPage(path);
    closeMobileMenu();
}

function showPage(path) {
    // Hide all page sections
    const allSections = document.querySelectorAll('.page-section');
    allSections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show the requested page
    if (path === 'home') {
        document.getElementById('home-page').classList.add('active', 'fade-in');
    } else {
        // Check if specific page exists
        let pageId = path.replace(/\//g, '-');
        let pageElement = document.getElementById(pageId);
        
        if (pageElement) {
            pageElement.classList.add('active', 'fade-in');
        } else {
            // Create a generic page for routes that don't have specific content yet
            createGenericPage(path);
        }
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function createGenericPage(path) {
    let pageId = path.replace(/\//g, '-');
    let existingPage = document.getElementById(pageId);
    
    if (!existingPage) {
        const pageTitle = formatPageTitle(path);
        const pageContent = `
            <div id="${pageId}" class="page-section active fade-in">
                <div class="min-h-screen bg-white py-20 pt-32">
                    <div class="container mx-auto px-4">
                        <h1 class="text-5xl font-bold text-center mb-8">${pageTitle}</h1>
                        <p class="text-xl text-gray-700 text-center max-w-4xl mx-auto">
                            Content for ${pageTitle} coming soon.
                        </p>
                        <div class="text-center mt-8">
                            <button onclick="navigateTo('home')" class="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300">
                                Back to Home
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        document.getElementById('main-content').insertAdjacentHTML('beforeend', pageContent);
    } else {
        existingPage.classList.add('active', 'fade-in');
    }
}

function formatPageTitle(path) {
    return path
        .split('/')
        .map(word => word.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '))
        .join(' - ');
}

// Navigation dropdown functionality
function showDropdown(dropdownName) {
    const dropdown = document.getElementById(dropdownName + '-dropdown');
    if (dropdown) {
        dropdown.classList.add('show');
    }
}

function hideDropdown(dropdownName) {
    const dropdown = document.getElementById(dropdownName + '-dropdown');
    if (dropdown) {
        dropdown.classList.remove('show');
    }
}

// Mobile menu functionality
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuBtn = document.getElementById('mobile-menu-btn');
    
    if (mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.remove('hidden');
        menuBtn.innerHTML = '<i data-lucide="x" class="h-6 w-6"></i>';
    } else {
        mobileMenu.classList.add('hidden');
        menuBtn.innerHTML = '<i data-lucide="menu" class="h-6 w-6"></i>';
    }
    
    // Re-initialize icons
    lucide.createIcons();
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuBtn = document.getElementById('mobile-menu-btn');
    
    mobileMenu.classList.add('hidden');
    menuBtn.innerHTML = '<i data-lucide="menu" class="h-6 w-6"></i>';
    
    // Re-initialize icons
    lucide.createIcons();
}

function toggleMobileDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    const button = dropdown.previousElementSibling;
    const icon = button.querySelector('[data-lucide]');
    
    if (dropdown.classList.contains('hidden')) {
        dropdown.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
    } else {
        dropdown.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
    }
}

// Contact Modal functionality
function openContactModal() {
    document.getElementById('contact-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeContactModal() {
    document.getElementById('contact-modal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Smooth scrolling functionality
function scrollToSection(sectionId) {
    // If we're not on home page, navigate to home first
    if (window.location.hash !== '' && window.location.hash !== '#home') {
        navigateTo('home');
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 300);
    } else {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

// Toast functionality
function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toast-container');
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    
    toastContainer.appendChild(toast);
    
    // Trigger animation
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toastContainer.removeChild(toast);
        }, 300);
    }, 3000);
}

// Contact form functionality
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Convert FormData to JSON
    const data = {};
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    try {
        // Get backend URL from environment or use default
        const backendUrl = getBackendUrl();
        
        const response = await fetch(`${backendUrl}/api/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        if (response.ok) {
            const result = await response.json();
            showToast('Message sent successfully! We will get back to you soon.', 'success');
            form.reset();
        } else {
            const error = await response.json();
            showToast(error.detail || 'Failed to send message. Please try again.', 'error');
        }
    } catch (error) {
        console.error('Error submitting form:', error);
        showToast('Network error. Please check your connection and try again.', 'error');
    } finally {
        // Restore button state
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

// Get backend URL - check if we're in development or production
function getBackendUrl() {
    // In development, you might want to use localhost
    // In production, this should point to your actual backend
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        return 'http://localhost:8001';
    } else {
        // Replace this with your actual production backend URL
        return 'https://emc-talent.preview.emergentagent.com';
    }
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('contact-modal');
    if (e.target === modal) {
        closeContactModal();
    }
});

// Handle escape key for modal
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeContactModal();
    }
});