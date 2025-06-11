# Lee Zhong Heng Xavier - Portfolio Website

A modern, professional, and responsive portfolio website built with HTML, CSS, and JavaScript.

## 🌟 Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Navigation**: Fixed navigation with smooth scrolling and active link highlighting
- **Contact Form**: Functional contact form with validation and notifications
- **Professional Sections**: Hero, About, Projects, Resume, and Contact sections
- **Animations**: Scroll-triggered animations and hover effects
- **Mobile Menu**: Hamburger menu for mobile navigation
- **SEO Optimized**: Semantic HTML structure for better search engine visibility

## 🚀 Quick Start

1. **Download the files**: Save all files (`index.html`, `styles.css`, `script.js`, `README.md`) in the same folder
2. **Open the website**: Double-click `index.html` or open it in your web browser
3. **Customize**: Edit the content to match your personal information

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md          # Documentation
```

## 🎨 Customization Guide

### Personal Information

Edit the following sections in `index.html`:

#### Hero Section
```html
<h1 class="hero-title">Your Full Name</h1>
<p class="hero-subtitle">Your Professional Title</p>
<p class="hero-description">Your brief description...</p>
```

#### About Section
- Update the about text and technical interests
- Modify the skills grid with your technologies
- Adjust the detail cards to reflect your experience

#### Projects Section
- Replace project cards with your actual projects
- Update project descriptions, technologies, and links
- Add your GitHub repository links

#### Contact Information
- Update LinkedIn URL throughout the site
- Replace email address (currently `xavier.lee@email.com`)
- Add your actual contact details

### Adding a Professional Photo

Replace the profile placeholder:

1. Add your photo to the project folder
2. Replace the `.profile-placeholder` div in `index.html`:

```html
<div class="hero-image">
    <img src="your-photo.jpg" alt="Your Name" class="profile-photo">
</div>
```

3. Add CSS for the profile photo in `styles.css`:

```css
.profile-photo {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--border-color);
    box-shadow: var(--shadow-lg);
}
```

### Color Scheme

Modify the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --accent-color: #your-color;
    /* ... other colors */
}
```

Popular IT portfolio color schemes:
- **Blue Tech**: `#2563eb`, `#1e40af`, `#3b82f6`
- **Green Code**: `#059669`, `#047857`, `#10b981`
- **Purple Innovation**: `#7c3aed`, `#6d28d9`, `#8b5cf6`

### Resume Download

To add a real PDF download:

1. Add your resume PDF file to the project folder
2. Update the download button link in `index.html`:

```html
<a href="your-resume.pdf" download class="btn btn-primary download-btn">
    <i class="fas fa-download"></i>
    Download Full Resume (PDF)
</a>
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 767px and below
- **Small Mobile**: 480px and below

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE 11+ (limited support)

## ⚡ Performance Features

- **Optimized Images**: Recommend using WebP format for images
- **Smooth Animations**: CSS transitions and JavaScript animations
- **Lazy Loading**: Intersection Observer for scroll animations
- **Throttled Scroll Events**: Performance-optimized scroll handling

## 🎯 SEO Best Practices

- Semantic HTML structure
- Meta tags for social sharing
- Alt text for images
- Proper heading hierarchy
- Clean URL structure

## 📊 Analytics Integration

To add Google Analytics:

1. Add to the `<head>` section of `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🚀 Deployment Options

### GitHub Pages
1. Create a GitHub repository
2. Upload your files
3. Enable GitHub Pages in repository settings

### Netlify
1. Drag and drop your project folder to Netlify
2. Your site will be live instantly

### Vercel
1. Connect your GitHub repository
2. Deploy with zero configuration

## 🛠️ Advanced Customizations

### Adding New Sections

To add a new section:

1. Add HTML structure in `index.html`
2. Add navigation link
3. Style in `styles.css`
4. Add scroll animations in `script.js`

### Contact Form Backend

The current form is frontend-only. To make it functional:

1. Use services like Formspree, Netlify Forms, or Emailjs
2. Update the form action in `index.html`
3. Modify the JavaScript form handling

### Dark Mode

To add dark mode:

1. Create dark color variables in CSS
2. Add toggle button in navigation
3. Implement theme switching in JavaScript

## 🐛 Troubleshooting

### Common Issues

1. **Icons not loading**: Check internet connection for Font Awesome CDN
2. **Fonts not displaying**: Verify Google Fonts CDN connection
3. **Animations not working**: Ensure JavaScript is enabled
4. **Mobile menu not functioning**: Check JavaScript console for errors

### Performance Tips

1. Optimize images (use tools like TinyPNG)
2. Minify CSS and JavaScript for production
3. Enable browser caching
4. Use a CDN for static assets

## 📝 Maintenance

- Regularly update project information
- Keep dependencies updated
- Test on different devices and browsers
- Monitor website performance

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them with the community!

## 📞 Support

If you need help customizing this portfolio:

1. Check the documentation above
2. Review the code comments
3. Test changes in a local copy first
4. Use browser developer tools for debugging

---

**Happy coding! 🚀**

*Last updated: 2024* 