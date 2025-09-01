/**
 * Configuration file for the Personal Website
 * Centralizes all component paths and settings
 */

const CONFIG = {
    // Component paths
    components: {
        navigation: 'src/components/navigation.html',
        hero: 'src/components/hero.html',
        about: 'src/components/about.html',
        portfolio: 'src/components/portfolio.html',
        resume: 'src/components/resume.html',
        contact: 'src/components/contact.html',
        footer: 'src/components/footer.html'
    },
    
    // Container selectors
    containers: {
        navigation: '#navigation-container',
        hero: '#hero-container',
        about: '#about-container',
        portfolio: '#portfolio-container',
        resume: '#resume-container',
        contact: '#contact-container',
        footer: '#footer-container'
    },
    
    // Animation settings
    animations: {
        typingSpeed: 150,
        typingDelay: 1000,
        textCycleInterval: 4000,
        fadeInDelay: 300
    },
    
    // Contact form settings
    contact: {
        successMessage: 'Thank you for your message! I\'ll get back to you soon.',
        errorMessage: 'There was an error sending your message. Please try again.',
        requiredFields: ['name', 'email', 'subject', 'message']
    },
    
    // Portfolio settings
    portfolio: {
        itemsPerRow: 3,
        animationDelay: 100
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}
