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

    // Fallback portfolio content
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
                            <i class="fas fa-laptop-code text-white text-4xl"></i>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">E-Commerce Website</h3>
                            <p class="text-gray-600 mb-4">A modern e-commerce platform built with React and Node.js</p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">React</span>
                                <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Node.js</span>
                                <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">MongoDB</span>
                            </div>
                            <div class="flex space-x-4">
                                <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">View Project</a>
                                <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">GitHub</a>
                            </div>
                        </div>
                    </div>

                    <!-- Portfolio Item 2 -->
                    <div class="portfolio-item bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                        <div class="h-48 bg-gradient-to-br from-green-400 to-teal-600 flex items-center justify-center">
                            <i class="fas fa-mobile-alt text-white text-4xl"></i>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">Mobile App</h3>
                            <p class="text-gray-600 mb-4">A cross-platform mobile application for task management</p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">React Native</span>
                                <span class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Firebase</span>
                                <span class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Redux</span>
                            </div>
                            <div class="flex space-x-4">
                                <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">View Project</a>
                                <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">GitHub</a>
                            </div>
                        </div>
                    </div>

                    <!-- Portfolio Item 3 -->
                    <div class="portfolio-item bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                        <div class="h-48 bg-gradient-to-br from-purple-400 to-pink-600 flex items-center justify-center">
                            <i class="fas fa-chart-line text-white text-4xl"></i>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
                            <p class="text-gray-600 mb-4">A comprehensive analytics dashboard with real-time data</p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span class="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Vue.js</span>
                                <span class="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">D3.js</span>
                                <span class="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Express</span>
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

    // Insert a component into the DOM
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
    console.log('DOM loaded, starting component loading...');
    await componentLoader.loadAllComponents();
    
    // Insert components into their respective containers
    componentLoader.insertComponent('navigation', '#navigation-container');
    componentLoader.insertComponent('hero', '#hero-container');
    componentLoader.insertComponent('about', '#about-container');
    componentLoader.insertComponent('portfolio', '#portfolio-container');
    componentLoader.insertComponent('resume', '#resume-container');
    componentLoader.insertComponent('contact', '#contact-container');
    componentLoader.insertComponent('footer', '#footer-container');
    
    console.log('All components inserted');
});
