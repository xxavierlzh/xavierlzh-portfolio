// Resume Page JavaScript Functionality

document.addEventListener('DOMContentLoaded', () => {
    // PDF Download functionality
    const downloadBtn = document.querySelector('.download-pdf-btn');
    const printBtn = document.querySelector('.print-btn');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            // Option 1: Link to actual PDF file (when you create one)
            // window.open('Lee_Zhong_Heng_Xavier_Resume.pdf', '_blank');
            
            // Option 2: Generate PDF using browser print to PDF
            generatePDF();
        });
    }

    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }

    // PDF Generation using browser's print to PDF
    function generatePDF() {
        // Add PDF optimization class
        document.body.classList.add('pdf-optimized');
        
        // Hide elements that shouldn't appear in PDF
        const elementsToHide = document.querySelectorAll('.navbar, .resume-actions, .footer');
        elementsToHide.forEach(element => {
            element.style.display = 'none';
        });

        // Trigger print dialog
        window.print();

        // Restore elements after printing
        setTimeout(() => {
            elementsToHide.forEach(element => {
                element.style.display = '';
            });
            document.body.classList.remove('pdf-optimized');
        }, 1000);
    }

    // Add smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add animation effects
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe resume sections for animation
    const resumeSections = document.querySelectorAll('.resume-section, .experience-item');
    resumeSections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Add hover effects to experience items
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = 'var(--background-light)';
            item.style.borderRadius = '8px';
            item.style.padding = '1.5rem';
            item.style.margin = '0 -1.5rem 2.5rem -1.5rem';
            item.style.transition = 'all 0.3s ease';
        });

        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = '';
            item.style.borderRadius = '';
            item.style.padding = '';
            item.style.margin = '';
        });
    });

    // Add click-to-copy functionality for contact information
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        const emailElement = item.querySelector('span');
        if (emailElement && emailElement.textContent.includes('@')) {
            item.style.cursor = 'pointer';
            item.title = 'Click to copy email';
            
            item.addEventListener('click', () => {
                const email = emailElement.textContent;
                
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(email).then(() => {
                        showNotification('Email copied to clipboard!', 'success');
                    }).catch(() => {
                        showNotification('Failed to copy email', 'error');
                    });
                } else {
                    // Fallback for older browsers
                    const textArea = document.createElement('textarea');
                    textArea.value = email;
                    document.body.appendChild(textArea);
                    textArea.select();
                    try {
                        document.execCommand('copy');
                        showNotification('Email copied to clipboard!', 'success');
                    } catch {
                        showNotification('Failed to copy email', 'error');
                    }
                    document.body.removeChild(textArea);
                }
            });
        }
    });

    // Mobile navigation (reuse from main script)
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    if (navLinks) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (hamburger) hamburger.classList.remove('active');
                if (navMenu) navMenu.classList.remove('active');
            });
        });
    }
});

// Notification function (reuse from main script)
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        z-index: 9999;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    const notificationContent = notification.querySelector('.notification-content');
    notificationContent.style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.5rem;
    `;
    
    const closeButton = notification.querySelector('.notification-close');
    closeButton.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        margin-left: auto;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Trigger animation
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    closeButton.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'fa-check-circle';
        case 'error': return 'fa-exclamation-circle';
        case 'warning': return 'fa-exclamation-triangle';
        default: return 'fa-info-circle';
    }
}

function getNotificationColor(type) {
    switch (type) {
        case 'success': return '#10b981';
        case 'error': return '#ef4444';
        case 'warning': return '#f59e0b';
        default: return '#3b82f6';
    }
} 