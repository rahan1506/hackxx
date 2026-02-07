// Career Simulator Logic
function simulateCareer() {
    const skill = document.getElementById('skill').value.trim();
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;

    // Validation
    if (!skill || !education || !experience) {
        showAlert('Please fill in all fields', 'error');
        return;
    }

    // Career data based on combinations
    const careerData = {
        diploma: {
            0: {
                salary: '₹3-5 LPA',
                roles: ['Junior Developer', 'Support Executive', 'QA Tester'],
                growth: '25-30% annual'
            },
            2: {
                salary: '₹5-7 LPA',
                roles: ['Developer', 'Technical Support', 'QA Lead'],
                growth: '20-25% annual'
            },
            4: {
                salary: '₹7-10 LPA',
                roles: ['Senior Developer', 'Tech Lead', 'QA Manager'],
                growth: '15-20% annual'
            }
        },
        ug: {
            0: {
                salary: '₹4-6 LPA',
                roles: ['Software Engineer', 'Associate Developer', 'Analyst'],
                growth: '28-32% annual'
            },
            2: {
                salary: '₹6-9 LPA',
                roles: ['Software Engineer II', 'Senior Analyst', 'Team Lead'],
                growth: '22-28% annual'
            },
            4: {
                salary: '₹9-15 LPA',
                roles: ['Senior Software Engineer', 'Engineering Manager', 'Architect'],
                growth: '18-22% annual'
            }
        },
        pg: {
            0: {
                salary: '₹5-8 LPA',
                roles: ['Senior Developer', 'Consultant', 'Research Engineer'],
                growth: '30-35% annual'
            },
            2: {
                salary: '₹8-12 LPA',
                roles: ['Principal Engineer', 'Tech Lead', 'Architect'],
                growth: '25-30% annual'
            },
            4: {
                salary: '₹12-20 LPA',
                roles: ['Engineering Manager', 'Director', 'VP Engineering'],
                growth: '20-25% annual'
            }
        }
    };

    // Get career prediction
    const prediction = careerData[education][experience];

    // Calculate future scenarios
    const year1Salary = parseInt(prediction.salary.match(/\d+/)[0]);
    const year3Salary = Math.round(year1Salary * 1.6);
    const year5Salary = Math.round(year1Salary * 2.2);

    // Display results
    displayResults(skill, education, experience, prediction, year1Salary, year3Salary, year5Salary);
}

function displayResults(skill, education, experience, prediction, y1, y3, y5) {
    const resultContainer = document.querySelector('.result-container');

    const educationLabel = {
        diploma: 'Diploma',
        ug: 'Undergraduate',
        pg: 'Postgraduate'
    };

    const experienceLabel = {
        0: '0-1 Years',
        2: '2-3 Years',
        4: '4+ Years'
    };

    const html = `
        <div class="result-content">
            <h3 style="color: var(--primary-color); font-size: 1.5rem; margin-bottom: 20px;">
                <i class="fas fa-star" style="color: var(--secondary-color);"></i> Your Career Prediction
            </h3>
            
            <div class="result-item">
                <h4><i class="fas fa-briefcase"></i> Profile</h4>
                <p><strong>Skill:</strong> ${skill}</p>
                <p><strong>Education:</strong> ${educationLabel[education]}</p>
                <p><strong>Experience:</strong> ${experienceLabel[experience]}</p>
            </div>

            <div class="result-item">
                <h4><i class="fas fa-money-bill-wave"></i> Salary Progression</h4>
                <p><strong>Year 1:</strong> ₹${y1} LPA</p>
                <p><strong>Year 3:</strong> ₹${y3} LPA <span style="color: var(--success-color);">(+${Math.round(((y3-y1)/y1)*100)}%)</span></p>
                <p><strong>Year 5:</strong> ₹${y5} LPA <span style="color: var(--success-color);">(+${Math.round(((y5-y1)/y1)*100)}%)</span></p>
            </div>

            <div class="result-item">
                <h4><i class="fas fa-chart-line"></i> Potential Roles</h4>
                <p>${prediction.roles.map(role => `<i class="fas fa-arrow-right"></i> ${role}`).join('<br>')}</p>
            </div>

            <div class="result-item">
                <h4><i class="fas fa-rocket"></i> Annual Growth</h4>
                <p style="color: var(--secondary-color); font-weight: bold;">${prediction.growth}</p>
            </div>

            <div class="result-item" style="margin-top: 20px;">
                <a href="form.html" class="btn btn-primary" style="width: 100%; justify-content: center;">
                    <span>Explore More Paths</span>
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    `;

    resultContainer.innerHTML = html;
    resultContainer.classList.add('active');

    // Smooth scroll to results
    resultContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function showAlert(message, type = 'info') {
    const alertDiv = document.createElement('div');
    alertDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 8px;
        background: ${type === 'error' ? 'var(--error-color)' : 'var(--success-color)'};
        color: ${type === 'error' ? '#fff' : '#000'};
        font-weight: 600;
        z-index: 9999;
        animation: slideInRight 0.3s ease;
    `;
    alertDiv.innerHTML = `<i class="fas fa-${type === 'error' ? 'exclamation-circle' : 'check-circle'}"></i> ${message}`;
    
    document.body.appendChild(alertDiv);

    setTimeout(() => {
        alertDiv.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => alertDiv.remove(), 300);
    }, 3000);
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // Close mobile menu when link is clicked
    if (navLinks) {
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.style.display = 'none';
            });
        });
    }
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.trajectory-card, .impact-card, .team-card, .roadmap-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Add keyframes animation to document
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(20px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(20px);
        }
    }
`;
document.head.appendChild(style);