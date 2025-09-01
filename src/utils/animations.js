/**
 * Animation Utilities
 * Centralized animation functions for the website
 */

class AnimationUtils {
    /**
     * Initialize typing effect for hero section
     * @param {string} selector - CSS selector for the typing element
     * @param {string} text - Text to type out
     * @param {number} speed - Typing speed in milliseconds
     * @param {number} delay - Initial delay before typing starts
     */
    static initTypingEffect(selector, text, speed = 150, delay = 1000) {
        const typingElement = document.querySelector(selector);
        if (!typingElement) return;

        typingElement.textContent = '';
        typingElement.style.width = '0';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            } else {
                typingElement.style.borderRight = '3px solid #2563eb';
            }
        };
        
        setTimeout(typeWriter, delay);
    }

    /**
     * Initialize text cycling animation
     * @param {string} selector - CSS selector for the cycling element
     * @param {Array} phrases - Array of phrases to cycle through
     * @param {number} interval - Time between cycles in milliseconds
     */
    static initTextCycling(selector, phrases, interval = 4000) {
        const element = document.querySelector(selector);
        if (!element) return;

        let currentIndex = 0;
        setInterval(() => {
            element.style.opacity = '0';
            setTimeout(() => {
                element.textContent = phrases[currentIndex];
                element.style.opacity = '1';
                currentIndex = (currentIndex + 1) % phrases.length;
            }, 300);
        }, interval);
    }

    /**
     * Initialize floating shapes interaction
     * @param {string} selector - CSS selector for floating shapes
     */
    static initFloatingShapes(selector) {
        const shapes = document.querySelectorAll(selector);
        shapes.forEach(shape => {
            shape.addEventListener('mouseenter', () => {
                shape.style.transform = 'scale(1.2) rotate(180deg)';
                shape.style.transition = 'transform 0.3s ease';
            });
            
            shape.addEventListener('mouseleave', () => {
                shape.style.transform = '';
                shape.style.transition = '';
            });
        });
    }

    /**
     * Initialize parallax effect for elements
     * @param {string} selector - CSS selector for parallax elements
     * @param {number} speed - Parallax speed multiplier
     */
    static initParallaxEffect(selector, speed = 0.5) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const elements = document.querySelectorAll(selector);
            
            elements.forEach((element, index) => {
                const elementSpeed = speed + (index * 0.1);
                const yPos = -(scrolled * elementSpeed);
                element.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
            });
        });
    }

    /**
     * Initialize scroll indicator functionality
     * @param {string} selector - CSS selector for scroll indicator
     * @param {string} targetSelector - CSS selector for target section
     */
    static initScrollIndicator(selector, targetSelector = '#about') {
        const scrollIndicator = document.querySelector(selector);
        if (!scrollIndicator) return;

        scrollIndicator.addEventListener('click', () => {
            const targetSection = document.querySelector(targetSelector);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    /**
     * Add ripple effect to buttons
     * @param {string} selector - CSS selector for buttons
     */
    static initRippleEffect(selector) {
        const buttons = document.querySelectorAll(selector);
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AnimationUtils;
} else {
    window.AnimationUtils = AnimationUtils;
}
