// Component Loader for HTML Components
class ComponentLoader {
    constructor() {
        this.components = {};
    }

    // Load a component from a file
    async loadComponent(name, filePath) {
        try {
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`Failed to load component: ${response.statusText}`);
            }
            const html = await response.text();
            this.components[name] = html;
            return html;
        } catch (error) {
            console.error(`Error loading component ${name}:`, error);
            return '';
        }
    }

    // Insert a component into the DOM
    insertComponent(name, targetSelector) {
        const target = document.querySelector(targetSelector);
        if (!target) {
            console.error(`Target element not found: ${targetSelector}`);
            return;
        }

        if (this.components[name]) {
            target.innerHTML = this.components[name];
        } else {
            console.error(`Component ${name} not loaded`);
        }
    }

    // Load and insert a component in one step
    async loadAndInsert(name, filePath, targetSelector) {
        await this.loadComponent(name, filePath);
        this.insertComponent(name, targetSelector);
    }

    // Load all components at once
    async loadAllComponents() {
        const componentFiles = [
            { name: 'navigation', path: 'components/navigation.html' },
            { name: 'hero', path: 'components/hero.html' },
            { name: 'about', path: 'components/about.html' },
            { name: 'portfolio', path: 'components/portfolio.html' },
            { name: 'resume', path: 'components/resume.html' },
            { name: 'contact', path: 'components/contact.html' },
            { name: 'footer', path: 'components/footer.html' }
        ];

        const loadPromises = componentFiles.map(component => 
            this.loadComponent(component.name, component.path)
        );

        try {
            await Promise.all(loadPromises);
            console.log('All components loaded successfully');
        } catch (error) {
            console.error('Error loading components:', error);
        }
    }
}

// Initialize component loader
const componentLoader = new ComponentLoader();

// Load all components when the page loads
document.addEventListener('DOMContentLoaded', async () => {
    await componentLoader.loadAllComponents();
    
    // Insert components into their respective containers
    componentLoader.insertComponent('navigation', '#navigation-container');
    componentLoader.insertComponent('hero', '#hero-container');
    componentLoader.insertComponent('about', '#about-container');
    componentLoader.insertComponent('portfolio', '#portfolio-container');
    componentLoader.insertComponent('resume', '#resume-container');
    componentLoader.insertComponent('contact', '#contact-container');
    componentLoader.insertComponent('footer', '#footer-container');
});
