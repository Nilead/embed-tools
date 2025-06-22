# Embed Tools - Embeddable Web Applications

A collection of embeddable web applications built with React, Vite, and Tailwind CSS v4.0.0, designed for deployment on GitHub Pages.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation
```bash
cd embed-tools
npm install
```

### Development
```bash
# Start development server for AI Model Discovery
npm run dev:ai-discovery

# Or start all apps (if you have multiple)
npm run dev
```

### Building
```bash
# Build AI Model Discovery app
npm run build:ai-discovery

# Build all apps
npm run build:all
```

### Deployment
```bash
# Deploy to GitHub Pages
npm run deploy
```

## 📱 Available Apps

### 1. AI Model Discovery
A comprehensive tool to help users find the perfect AI model for their use case.

**Features:**
- Interactive questionnaire-based model selection
- Detailed model comparisons
- Pricing and performance metrics
- Responsive design with Tailwind v4.0.0

**URL:** `https://yourusername.github.io/embed-tools/ai-model-discovery/`

## 🛠️ Project Structure

```
embed-tools/
├── apps/
│   └── ai-model-discovery/          # AI Model Discovery app
│       ├── src/
│       │   ├── App.jsx             # Main app component
│       │   ├── main.jsx            # Entry point
│       │   └── index.css           # Tailwind v4.0.0 styles
│       ├── public/
│       │   └── index.html          # HTML template
│       └── package.json            # App-specific config
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind CSS v4.0.0 config
├── package.json                    # Root package.json
└── README.md                       # This file
```

## 🔧 Configuration

### Vite Configuration
The `vite.config.js` is optimized for:
- Multiple app support
- GitHub Pages deployment
- Embedding optimization
- Code splitting and minification
- Tailwind v4.0.0 integration

### Tailwind CSS v4.0.0
Updated to use the stable Tailwind CSS v4.0.0 with:
- New `@import "tailwindcss"` syntax
- Built-in PostCSS support (no separate config needed)
- CSS custom properties for theming
- Enhanced component and utility layers
- Improved performance and smaller bundle sizes
- New animation utilities
- Better hover support with `hoverOnlyWhenSupported`
- Stable production-ready features

## 🎨 Tailwind v4.0.0 Features

### New Import Syntax
```css
@import "tailwindcss";
```

### CSS Custom Properties
```css
:root {
  --color-primary: 59 130 246;
  --color-primary-light: 96 165 250;
  --color-primary-dark: 37 99 235;
}
```

### Enhanced Component Layer
```css
@layer components {
  .btn-primary {
    @apply bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200;
  }
}
```

### Custom Utilities
```css
@layer utilities {
  .text-gradient {
    @apply bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent;
  }
}
```

## 📦 Adding New Apps

1. Create a new directory in `apps/`:
```bash
mkdir apps/your-new-app
```

2. Copy the basic structure:
```bash
cp -r apps/_template/* apps/your-new-app/
```

3. Update `vite.config.js` to include the new app:
```javascript
rollupOptions: {
  input: {
    'ai-model-discovery': resolve(__dirname, 'apps/ai-model-discovery/index.html'),
    'your-new-app': resolve(__dirname, 'apps/your-new-app/index.html'),
  },
  // ...
}
```

4. Add build scripts to `package.json`:
```json
{
  "scripts": {
    "dev:your-new-app": "vite apps/your-new-app",
    "build:your-new-app": "vite build apps/your-new-app"
  }
}
```

## 🌐 Embedding in Other Websites

### Iframe Embedding
```html
<iframe 
  src="https://yourusername.github.io/embed-tools/ai-model-discovery/"
  width="100%" 
  height="600px" 
  frameborder="0"
  title="AI Model Discovery Tool">
</iframe>
```

### JavaScript Embedding
```html
<div id="ai-model-discovery-container"></div>
<script>
  // Load the app dynamically
  const script = document.createElement('script');
  script.src = 'https://yourusername.github.io/embed-tools/ai-model-discovery/assets/main.js';
  document.head.appendChild(script);
</script>
```

## 🚀 GitHub Pages Deployment

1. **Repository Setup:**
   - Create a GitHub repository named `embed-tools`
   - Enable GitHub Pages in repository settings
   - Set source to "Deploy from a branch" → "gh-pages"

2. **Deploy:**
   ```bash
   npm run deploy
   ```

3. **Access your apps:**
   - AI Model Discovery: `https://yourusername.github.io/embed-tools/ai-model-discovery/`

## 🔍 Performance Optimization

- **Code Splitting:** Automatic chunk splitting for better loading
- **Minification:** Terser for optimal bundle size
- **Tree Shaking:** Unused code elimination
- **Font Optimization:** Preloaded Google Fonts
- **Image Optimization:** Vite's built-in image optimization
- **Tailwind v4.0.0:** Smaller CSS bundles and better performance

## 🎨 Customization

### Styling
- Modify `tailwind.config.js` for theme changes
- Update `src/index.css` for global styles
- Use CSS custom properties for dynamic theming
- Leverage Tailwind v4.0.0's new component and utility layers

### Branding
- Update meta tags in `index.html`
- Replace favicon and social media images
- Customize color scheme in Tailwind config
- Use CSS custom properties for dynamic theming

## 📝 Development Guidelines

### Code Style
- Use ESLint for code quality
- Follow React best practices
- Implement responsive design
- Write accessible HTML

### Performance
- Lazy load components when possible
- Optimize images and assets
- Use React.memo for expensive components
- Implement proper error boundaries
- Leverage Tailwind v4.0.0's performance improvements

### Tailwind v4.0.0 Best Practices
- Use the new `@import "tailwindcss"` syntax
- Organize styles using `@layer` directives
- Use CSS custom properties for theming
- Take advantage of the new animation utilities
- Use `hoverOnlyWhenSupported` for better mobile experience

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For issues and questions:
- Create an issue on GitHub
- Check the documentation
- Review the code examples

---

**Built with ❤️ using React, Vite, and Tailwind CSS v4.0.0** 