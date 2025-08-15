# Personal Website

A modern, responsive personal website built with HTML, CSS, Tailwind CSS, and JavaScript. This website features a clean design with smooth animations and is fully responsive across all devices.

## 🌟 Features

- **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Interactive Elements** - Hover effects, smooth scrolling, and dynamic content
- **Contact Form** - Functional contact form with validation
- **Portfolio Section** - Showcase your projects with beautiful cards
- **Resume Section** - Display your experience and education
- **Mobile-First Navigation** - Hamburger menu for mobile devices
- **Smooth Animations** - CSS animations and JavaScript interactions
- **Accessibility Features** - Keyboard navigation and screen reader support

## 📁 File Structure

```
Personal-Website/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 Quick Start

1. **Clone or Download** the project files
2. **Open `index.html`** in your web browser
3. **Customize** the content to match your information
4. **Deploy** to your preferred hosting service

## 🎨 Customization Guide

### Personal Information

Update the following sections in `index.html`:

#### Hero Section
```html
<h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
    Hi, I'm <span class="text-blue-600">Your Name</span>
</h1>
<p class="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
    A passionate developer creating amazing digital experiences
</p>
```

#### About Section
- Update your personal description
- Modify contact information (email, phone, location)
- Adjust skill percentages and names

#### Portfolio Section
Replace the portfolio items with your own projects:
```html
<div class="portfolio-item bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
    <div class="h-48 bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
        <i class="fas fa-laptop-code text-white text-4xl"></i>
    </div>
    <div class="p-6">
        <h3 class="text-xl font-semibold text-gray-900 mb-2">Your Project Name</h3>
        <p class="text-gray-600 mb-4">Project description</p>
        <div class="flex flex-wrap gap-2 mb-4">
            <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Technology</span>
        </div>
        <div class="flex space-x-4">
            <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">View Project</a>
            <a href="#" class="text-blue-600 hover:text-blue-800 font-medium">GitHub</a>
        </div>
    </div>
</div>
```

#### Resume Section
- Update work experience
- Modify education details
- Add your certifications

#### Contact Section
- Update contact information
- Add your social media links
- Customize the contact form

### Styling Customization

#### Colors
The website uses a blue color scheme. To change colors, update the Tailwind classes:

- Primary Blue: `blue-600`, `blue-700`
- Background: `gray-50`, `white`
- Text: `gray-900`, `gray-600`

#### Fonts
The website uses the default system fonts. To change fonts, add Google Fonts:

1. Add the font link to the `<head>` section
2. Update the font classes in your HTML

#### Animations
Customize animations in `styles.css`:
- Modify keyframe animations
- Adjust transition durations
- Change animation timing functions

## 📱 Responsive Design

The website is built with a mobile-first approach using Tailwind CSS:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Breakpoints Used
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up

## 🔧 JavaScript Features

### Navigation
- Smooth scrolling to sections
- Active navigation highlighting
- Mobile menu toggle
- Navbar background change on scroll

### Animations
- Intersection Observer for scroll animations
- Portfolio item loading animations
- Skill bar progress animations
- Typing effect in hero section

### Form Handling
- Contact form validation
- Success/error notifications
- Form submission simulation

### Interactive Elements
- Back to top button
- Hover effects on portfolio items
- Ripple effects on buttons
- Parallax scrolling

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📈 Performance Features

- Optimized CSS animations
- Lazy loading for portfolio items
- Efficient JavaScript event handling
- Minimal external dependencies

## 🔒 Security Considerations

- Form validation on both client and server side
- XSS protection through proper input sanitization
- HTTPS recommended for production

## 🚀 Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to Netlify
2. Or connect your GitHub repository
3. Your site will be deployed automatically

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

## 🛠️ Development

### Local Development
1. Clone the repository
2. Open `index.html` in your browser
3. Use a local server for better development experience:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

### Making Changes
1. Edit the HTML content in `index.html`
2. Modify styles in `styles.css`
3. Update functionality in `script.js`
4. Test on different devices and browsers

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the website, please open an issue on GitHub.

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Font Awesome](https://fontawesome.com/) for the icons
- [Google Fonts](https://fonts.google.com/) for typography (if used)

---

**Happy coding! 🚀**
