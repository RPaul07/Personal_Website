# Quick Reference Guide

## 🚀 Getting Started

### **File Locations**
- **Main Entry**: `index.html` (root)
- **Components**: `src/components/`
- **Scripts**: `src/scripts/`
- **Styles**: `src/styles/styles.css`
- **Config**: `src/scripts/config.js`

### **Quick Commands**
```bash
# Start local server
python3 -m http.server 8000

# View website
open http://localhost:8000
```

## 📁 File Structure Quick Reference

```
src/
├── components/          # HTML components
│   ├── navigation.html  # Header & nav
│   ├── hero.html       # Landing section
│   ├── about.html      # About & skills
│   ├── portfolio.html  # Project showcase
│   ├── resume.html     # Experience & education
│   ├── contact.html    # Contact form
│   └── footer.html     # Site footer
├── scripts/            # JavaScript files
│   ├── config.js       # Settings & paths
│   ├── component-loader.js # Component system
│   └── main.js         # Main logic
├── styles/             # CSS files
│   └── styles.css      # All styles
└── utils/              # Utilities
    └── animations.js   # Animation functions
```

## 🔧 Common Tasks

### **Update Personal Information**
1. **Name**: Edit `src/components/navigation.html` and `src/components/hero.html`
2. **About**: Edit `src/components/about.html`
3. **Portfolio**: Edit `src/components/portfolio.html`
4. **Resume**: Edit `src/components/resume.html`
5. **Contact**: Edit `src/components/contact.html`

### **Add New Portfolio Item**
1. Open `src/components/portfolio.html`
2. Copy existing portfolio item structure
3. Update content, technologies, and links
4. Save and refresh

### **Change Colors/Styling**
1. Open `src/styles/styles.css`
2. Find the relevant CSS section
3. Update colors, fonts, or spacing
4. Save and refresh

### **Add New Animation**
1. Open `src/utils/animations.js`
2. Add new function with JSDoc comments
3. Call function in `src/scripts/main.js`
4. Add any CSS in `src/styles/styles.css`

## 🎨 CSS Classes Quick Reference

### **Layout Classes**
- `.container` - Main content wrapper
- `.grid` - CSS Grid layout
- `.flex` - Flexbox layout
- `.hidden` - Hide element
- `.block` - Display block

### **Animation Classes**
- `.animate-fade-in` - Fade in animation
- `.animate-slide-in-left` - Slide from left
- `.animate-bounce-subtle` - Subtle bounce
- `.portfolio-item` - Portfolio card styling
- `.btn-primary` - Primary button style

### **Responsive Classes**
- `sm:` - Small screens (640px+)
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)
- `xl:` - Extra large screens (1280px+)

## 🔍 Component IDs Quick Reference

### **Container IDs**
- `#navigation-container`
- `#hero-container`
- `#about-container`
- `#portfolio-container`
- `#resume-container`
- `#contact-container`
- `#footer-container`

### **Section IDs**
- `#home` - Hero section
- `#about` - About section
- `#portfolio` - Portfolio section
- `#resume` - Resume section
- `#contact` - Contact section

## ⚙️ Configuration Quick Reference

### **Component Paths** (`src/scripts/config.js`)
```javascript
components: {
    navigation: 'src/components/navigation.html',
    hero: 'src/components/hero.html',
    about: 'src/components/about.html',
    portfolio: 'src/components/portfolio.html',
    resume: 'src/components/resume.html',
    contact: 'src/components/contact.html',
    footer: 'src/components/footer.html'
}
```

### **Animation Settings**
```javascript
animations: {
    typingSpeed: 150,        // Typing animation speed
    typingDelay: 1000,       // Delay before typing starts
    textCycleInterval: 4000, // Text cycling interval
    fadeInDelay: 300         // Fade in delay
}
```

## 🐛 Troubleshooting

### **Component Not Loading**
1. Check browser console for errors
2. Verify file paths in `config.js`
3. Ensure local server is running
4. Check CORS issues (use local server)

### **Animations Not Working**
1. Check if `main.js` is loaded
2. Verify element selectors
3. Check browser console for errors
4. Ensure CSS animations are defined

### **Styling Issues**
1. Check CSS file path in `index.html`
2. Verify Tailwind CSS is loaded
3. Check for CSS conflicts
4. Inspect element in browser dev tools

## 📱 Responsive Breakpoints

### **Mobile First Approach**
- **Base**: Mobile styles (default)
- **sm**: 640px and up
- **md**: 768px and up
- **lg**: 1024px and up
- **xl**: 1280px and up

### **Common Patterns**
```html
<!-- Responsive grid -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

<!-- Responsive text -->
<h1 class="text-2xl md:text-4xl lg:text-6xl">

<!-- Responsive spacing -->
<div class="p-4 md:p-8 lg:p-12">
```

## 🎯 Performance Tips

### **Optimization**
- Use CSS transforms for animations
- Minimize DOM queries
- Cache component content
- Use efficient selectors

### **Loading Strategy**
- Components load asynchronously
- Fallback content for failed loads
- Lazy loading for non-critical content
- Optimized asset delivery

## 🔄 Version Control

### **Git Workflow**
```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to repository
git push origin main
```

### **Best Practices**
- Commit frequently with clear messages
- Use feature branches for major changes
- Test before pushing
- Keep commits focused and atomic

## 📞 Support

### **Documentation**
- `docs/PROJECT_STRUCTURE.md` - Detailed structure
- `README.md` - Project overview
- Inline comments in code files

### **Common Issues**
- Check browser console for errors
- Verify all file paths are correct
- Ensure local server is running
- Test on different browsers
