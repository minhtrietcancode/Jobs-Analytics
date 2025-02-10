// Fade transitions
function fadeOut(element, callback) {
    element.style.opacity = '0';
    setTimeout(callback, 300);
}

function fadeIn(element) {
    element.style.opacity = '1';
}

// Add transition styles
document.body.style.transition = 'opacity 0.3s ease';
document.body.style.opacity = '1';

// Updated job fields map with content references
const jobFieldsMap = {
    'technology': {
        name: 'Technology',
        subFields: [
            { name: 'Software Development', content: 'software-development' },
            { name: 'Data Science & AI', content: 'data-science-ai' },
            { name: 'Cloud Computing', content: 'cloud-computing' },
            { name: 'Cybersecurity', content: 'cybersecurity' },
            { name: 'Embedded Systems & IoT Developments', content: 'embedded' }
        ]
    },
    'engineering': {
        name: 'Engineering',
        subFields: [
            { name: 'Mechanical Engineering', content: 'mechanical-engineering' },
            { name: 'Electrical Engineering', content: 'electrical-engineering' },
            { name: 'Computer Engineering', content: 'computer-engineering' },
            { name: 'Civil Engineering', content: 'civil-engineering' },
            { name: 'Chemical Engineering', content: 'chemical-engineering' }
        ]
    },
    'economics-and-management': {
        name: 'Economics and Management',
        subFields: [
            { name: 'Economics', content: 'economics' },
            { name: 'Business Administration', content: 'business-administration' },
            { name: 'Finance', content: 'finance' },
            { name: 'Management', content: 'management' },
            { name: 'International Business', content: 'international-business' }
        ]
    },
    'healthcare-and-wellness': {
        name: 'Healthcare and Wellness',
        subFields: [
            { name: 'Medicine', content: 'medicine' },
            { name: 'Nursing', content: 'nursing' },
            { name: 'Pharmacy', content: 'pharmacy' },
            { name: 'Public Health', content: 'public-health' },
            { name: 'Physical Therapy & Rehabilitation', content: 'physical-therapy' }
        ]
    },
    'creative-and-communication': {
        name: 'Creative and Communication',
        subFields: [
            { name: 'Graphic Design', content: 'graphic-design' },
            { name: 'Journalism & Media', content: 'journalism-media' },
            { name: 'Advertising & Marketing Communication', content: 'advertising-marketing' },
            { name: 'Film & Television Production', content: 'film-tv-production' },
            { name: 'Public Relations (PR)', content: 'public-relations' }
        ]
    },
    'education-and-humanities': {
        name: 'Education and Humanities',
        subFields: [
            { name: 'Early Childhood Education', content: 'early-childhood-education' },
            { name: 'Secondary & Higher Education', content: 'secondary-higher-education' },
            { name: 'Linguistics & Translation', content: 'linguistics-translation' },
            { name: 'Philosophy & Ethics', content: 'philosophy-ethics' },
            { name: 'History & Cultural Studies', content: 'history-cultural-studies' }
        ]
    },
    'service-industry': {
        name: 'Service Industry',
        subFields: [
            { name: 'Hospitality & Tourism Management', content: 'hospitality-tourism' },
            { name: 'Culinary Arts & Food Service', content: 'culinary-arts' },
            { name: 'Retail & Sales Management', content: 'retail-sales' },
            { name: 'Event Planning & Management', content: 'event-planning' },
            { name: 'Customer Support & Call Center Services', content: 'customer-support' }
        ]
    },
    'environment-and-agriculture': {
        name: 'Environment and Agriculture',
        subFields: [
            { name: 'Environmental Science & Conservation', content: 'environmental-science' },
            { name: 'Agronomy & Crop Science', content: 'agronomy' },
            { name: 'Animal Science & Veterinary Medicine', content: 'animal-science' },
            { name: 'Forestry & Wildlife Management', content: 'forestry-wildlife' },
            { name: 'Renewable Energy & Sustainable Development', content: 'renewable-energy' }
        ]
    }
};

// Function to populate job sub-fields
function populateJobFields(field) {
    const container = document.getElementById('job-fields-section');
    if (container && jobFieldsMap[field]) {
        const fieldData = jobFieldsMap[field];
        container.innerHTML = `<h2 class="section-header">${fieldData.name}</h2>`;
        
        fieldData.subFields.forEach(subField => {
            const fieldDiv = document.createElement('div');
            fieldDiv.className = 'job-field';
            fieldDiv.setAttribute('data-content', subField.content);
            fieldDiv.innerHTML = `
                <div class="sub-field-text">
                    <p>${subField.name}</p>
                </div>
            `;
            
            fieldDiv.addEventListener('click', function() {
                const contentKey = this.getAttribute('data-content');
                fadeOut(document.body, function() {
                    window.location.href = `content.html?field=${field}&content=${contentKey}`;
                });
            });
            
            container.appendChild(fieldDiv);
        });
    }
}

// Event handlers
document.addEventListener('DOMContentLoaded', function() {
    // Handle job field clicks on main page
    document.querySelectorAll('.job-field').forEach(field => {
        field.addEventListener('click', function() {
            const fieldKey = this.textContent.trim().toLowerCase().replace(/\s+/g, '-');
            fadeOut(document.body, function() {
                window.location.href = `sub field.html?field=${fieldKey}`;
            });
        });
    });

    // Handle back button
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        const urlParams = new URLSearchParams(window.location.search);
        const field = urlParams.get('field');
        const content = urlParams.get('content');

        backButton.addEventListener('click', function() {
            fadeOut(document.body, function() {
                if (content) {
                    window.location.href = `sub field.html?field=${field}`;
                } else {
                    window.location.href = 'index.html';
                }
            });
        });
    }

    // Check current page and populate content
    const urlParams = new URLSearchParams(window.location.search);
    const field = urlParams.get('field');
    const content = urlParams.get('content');
    
    if (field) {
        populateJobFields(field);
    }
});

// Backup check on full page load
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    
    const urlParams = new URLSearchParams(window.location.search);
    const field = urlParams.get('field');
    if (field) {
        populateJobFields(field);
    }
});

// To Link with content-index.js -> link with the contents of each majors
import { contentMappings } from './content/content-index.js';

// function to populate content into eacb sub field such as software developments 
function populateContent(field, content) {
    const contentData = contentMappings[content];
    if (!contentData) {
        document.getElementById('content-container').innerHTML = '<p>Content not found.</p>';
        return;
    }

    let htmlContent = `<h1 class="content-title">${contentData.title}</h1>`;
    
    contentData.sections.forEach(section => {
        htmlContent += `
            <div class="content-section">
                <h2 class="section-heading">${section.heading}</h2>
                ${section.subsections.map(subsection => `
                    <div class="content-subsection">
                        <h3 class="subsection-heading">${subsection.subheading}</h3>
                        ${subsection.content}
                    </div>
                `).join('')}
            </div>
        `;
    });

    document.getElementById('content-container').innerHTML = htmlContent;
}

// Existing event listener remains the same
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const field = urlParams.get('field');
    const content = urlParams.get('content');

    if (field && content) {
        populateContent(field, content);
    }
});

// FOR THE SIDEBAR MENU OF content.html page 
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const sidebarClose = document.querySelector('.sidebar-close');
    const sidebarLinks = document.querySelectorAll('.sidebar nav ul li');

    menuToggle.addEventListener('click', function() {
        sidebar.classList.add('open');
    });

    sidebarClose.addEventListener('click', function() {
        sidebar.classList.remove('open');
    });

    sidebarLinks.forEach(link => {
        link.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            
            // Find the section heading by its text content
            const sectionElements = document.querySelectorAll('.section-heading');
            const targetSection = Array.from(sectionElements).find(el => 
                el.textContent.toLowerCase().trim() === section
            );
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                sidebar.classList.remove('open');
            }
        });
    });
});
