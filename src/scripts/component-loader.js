/**
 * Component Loader for HTML Components
 * Handles dynamic loading and insertion of modular components
 */

class ComponentLoader {
    constructor() {
        this.components = {};
        this.config = window.CONFIG || {
            components: {
                navigation: 'src/components/navigation.html',
                hero: 'src/components/hero.html',
                about: 'src/components/about.html',
                portfolio: 'src/components/portfolio.html',
                resume: 'src/components/resume.html',
                contact: 'src/components/contact.html',
                footer: 'src/components/footer.html'
            },
            containers: {
                navigation: '#navigation-container',
                hero: '#hero-container',
                about: '#about-container',
                portfolio: '#portfolio-container',
                resume: '#resume-container',
                contact: '#contact-container',
                footer: '#footer-container'
            }
        };
    }

    /**
     * Load a component from a file
     * @param {string} name - Component name
     * @param {string} filePath - Path to component file
     * @returns {Promise<string>} - Component HTML content
     */
    async loadComponent(name, filePath) {
        try {
            const response = await fetch(filePath);
            if (!response.ok) {
                throw new Error(`Failed to load component: ${response.statusText}`);
            }
            const html = await response.text();
            this.components[name] = html;
            console.log(`Component ${name} loaded successfully`);
            return html;
        } catch (error) {
            console.error(`Error loading component ${name}:`, error);
            // Return fallback content for portfolio
            if (name === 'portfolio') {
                return this.getPortfolioFallback();
            }
            return '';
        }
    }

    /**
     * Get fallback portfolio content
     * @returns {string} - Fallback HTML content
     */
    getPortfolioFallback() {
        return `
        <!-- Portfolio Section -->
        <section id="portfolio" class="py-20 bg-gray-50">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">My Portfolio</h2>
                    <div class="w-24 h-1 bg-blue-600 mx-auto"></div>
                </div>
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <!-- Portfolio Item 1 -->
                    <div class="portfolio-item bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                        <div class="h-48 bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                            <i class="fas fa-robot text-white text-4xl"></i>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">Math.AI</h3>
                            <p class="text-gray-600 mb-4">A scalable math learning web application for 2nd to 8th graders with AI-powered chatbot</p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">AWS</span>
                                <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Next.js</span>
                                <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">OpenAI API</span>
                            </div>
                            <div class="flex space-x-4">
                                <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">View Project</a>
                                <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">GitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        `;
    }

    /**
     * Insert a component into the DOM
     * @param {string} name - Component name
     * @param {string} targetSelector - CSS selector for target container
     */
    insertComponent(name, targetSelector) {
        const target = document.querySelector(targetSelector);
        if (!target) {
            console.error(`Target element not found: ${targetSelector}`);
            return;
        }

        if (this.components[name]) {
            target.innerHTML = this.components[name];
            console.log(`Component ${name} inserted successfully`);
        } else {
            console.error(`Component ${name} not loaded`);
        }
    }

    /**
     * Load and insert a component in one step
     * @param {string} name - Component name
     * @param {string} filePath - Path to component file
     * @param {string} targetSelector - CSS selector for target container
     */
    async loadAndInsert(name, filePath, targetSelector) {
        await this.loadComponent(name, filePath);
        this.insertComponent(name, targetSelector);
    }

    /**
     * Load all components at once
     * @returns {Promise<void>}
     */
    async loadAllComponents() {
        const componentFiles = Object.entries(this.config.components).map(([name, path]) => ({
            name,
            path
        }));

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

    /**
     * Insert all components into their containers
     */
    insertAllComponents() {
        Object.entries(this.config.containers).forEach(([name, selector]) => {
            this.insertComponent(name, selector);
        });
        console.log('All components inserted');
    }
}

// Initialize component loader
const componentLoader = new ComponentLoader();

// Load all components when the page loads
document.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM loaded, starting component loading...');
    await componentLoader.loadAllComponents();
    componentLoader.insertAllComponents();
    console.log('All components inserted');
});
