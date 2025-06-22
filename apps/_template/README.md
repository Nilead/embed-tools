# App Template

This is a template for creating new embeddable web applications using Tailwind CSS v4.0.0.

## Quick Start

1. Copy this template to create a new app:
   ```bash
   cp -r _template your-new-app-name
   ```

2. Update the following files:
   - `public/index.html` - Update title, meta tags, and description
   - `src/App.jsx` - Replace with your app logic
   - `src/index.css` - Customize Tailwind v4.0.0 styles if needed
   - `vite.config.js` - Update app name in base and outDir paths

3. Add the app to the main build configuration:
   - Update root `vite.config.js` to include your app
   - Add build scripts to root `package.json`

## File Structure

```
your-new-app/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   ├── index.css          # Tailwind v4.0.0 styles
│   └── ExampleComponent.jsx # Example component showing v4.0.0 features
├── vite.config.js         # App-specific Vite config
└── README.md              # This file
```

## Development

```bash
# Start development server
npm run dev:your-app-name

# Build for production
npm run build:your-app-name

# Preview build
npm run preview:your-app-name
```

## Configuration Updates

### Vite Config
Update `vite.config.js` with your app name:
```javascript
export default defineConfig({
  // ...
  base: '/embed-tools/your-app-name/', // Update this
  build: {
    outDir: '../../dist/your-app-name', // Update this
    // ...
  },
  // ...
});
```

### HTML Template
Update `index.html` with your app details:
```html
<title>Your App Name</title>
<meta name="description" content="Your App Description" />
<!-- Update all meta tags and URLs -->
```

## Tailwind v4.0.0 Features

This template includes examples of Tailwind v4.0.0's stable features:

### 1. New Import Syntax
```css
@import "tailwindcss";
```

### 2. CSS Custom Properties
```css
:root {
  --color-primary: 59 130 246;
  --color-primary-light: 96 165 250;
  --color-primary-dark: 37 99 235;
}
```

### 3. Component Layer
```css
@layer components {
  .btn-primary {
    @apply bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200;
  }
}
```

### 4. Utility Layer
```css
@layer utilities {
  .text-gradient {
    @apply bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent;
  }
  
  .glass-effect {
    @apply backdrop-blur-sm bg-white/80 border border-white/20;
  }
}
```

### 5. Custom Animations
```css
@layer utilities {
  .animate-fade-in {
    @apply animate-fade-in;
  }
  
  .animate-slide-up {
    @apply animate-slide-up;
  }
}
```

## Embedding

Your app will be available at:
`https://yourusername.github.io/embed-tools/your-app-name/`

### Iframe Embed
```html
<iframe 
  src="https://yourusername.github.io/embed-tools/your-app-name/"
  width="100%" 
  height="600px" 
  frameborder="0"
  title="Your App Name">
</iframe>
```

## Key Improvements in Tailwind v4.0.0

- **Stable Release**: Production-ready stable version
- **Simplified Setup**: No separate PostCSS config needed
- **Better Performance**: Smaller CSS bundles
- **CSS Custom Properties**: Dynamic theming support
- **Enhanced Layers**: Better organization with `@layer`
- **New Utilities**: More spacing, animation, and effect utilities
- **Improved Hover**: Better mobile support with `hoverOnlyWhenSupported`
- **Modern Syntax**: Cleaner `@import` syntax 