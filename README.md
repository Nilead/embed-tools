# Embed Tools - Monorepo for Embeddable Web Applications

A monorepo containing embeddable web applications built with React, Vite, TypeScript, and Tailwind CSS v4.0.0, designed for deployment on GitHub Pages. This project uses pnpm workspaces to manage multiple apps with shared UI components and configurations.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation
```bash
cd embed-tools
pnpm install
```

### Development
```bash
# Start development server for all apps
pnpm dev

# Start specific app
pnpm --filter ai-model-discovery dev
pnpm --filter website-cost-estimator dev
```

### Building
```bash
# Build all apps
pnpm build

# Build specific app
pnpm --filter ai-model-discovery build
pnpm --filter website-cost-estimator build
```

### Preview
```bash
# Preview all apps
pnpm preview

# Preview specific app
pnpm --filter ai-model-discovery preview
```

## 📱 Available Apps

### 1. AI Model Discovery
A comprehensive tool to help users find the perfect AI model for their use case.

**Features:**
- Interactive questionnaire-based model selection
- Detailed model comparisons
- Pricing and performance metrics
- Responsive design with shared UI components

**URL:** `https://nilead.github.io/embed-tools/ai-model-discovery/`

### 2. Website Cost Estimator
A tool to estimate website development costs based on various factors.

**Features:**
- Interactive cost calculation
- Multiple pricing tiers
- Feature-based estimation
- Responsive design with shared UI components

**URL:** `https://nilead.github.io/embed-tools/website-cost-estimator/`

## 🛠️ Project Structure

```
embed-tools/
├── apps/                           # Individual applications
│   ├── ai-model-discovery/         # AI Model Discovery app
│   │   ├── src/
│   │   │   ├── App.tsx            # Main app component
│   │   │   ├── main.tsx           # Entry point
│   │   │   └── index.css          # App-specific styles
│   │   ├── index.html             # HTML template
│   │   ├── package.json           # App-specific dependencies
│   │   ├── tailwind.config.js     # App-specific Tailwind config
│   │   ├── tsconfig.json          # App-specific TypeScript config
│   │   └── vite.config.js         # App-specific Vite config
│   ├── website-cost-estimator/     # Website Cost Estimator app
│   │   └── [similar structure]
│   ├── _template/                  # Template for new apps
│   └── lib/                        # Shared utilities
├── packages/                       # Shared packages
│   ├── components/                 # Shared UI components (shadcn/ui)
│   │   ├── src/
│   │   │   ├── components/        # Reusable UI components
│   │   │   ├── lib/               # Utility functions
│   │   │   └── globals.css        # Global styles
│   │   ├── components.json        # shadcn/ui configuration
│   │   ├── package.json           # Component library dependencies
│   │   ├── tailwind.config.js     # Shared Tailwind theme
│   │   └── tsconfig.json          # Component library TypeScript config
│   └── tsconfig/                  # Shared TypeScript configurations
│       ├── base.json              # Base TypeScript config
│       └── react-app.json         # React app TypeScript config
├── scripts/
│   └── create-app.js              # App generator script
├── pnpm-workspace.yaml            # pnpm workspace configuration
├── package.json                   # Root package.json (monorepo manager)
├── tsconfig.json                  # Root TypeScript config
├── vite.config.js                 # Root Vite configuration
└── README.md                      # This file
```

## 🔧 Configuration

### Monorepo Setup
This project uses **pnpm workspaces** for efficient package management:
- **Root level**: Contains monorepo configuration and shared dependencies
- **Apps**: Independent, runnable applications in `apps/`
- **Packages**: Shared code and configurations in `packages/`

### pnpm Workspace Configuration
```yaml
# pnpm-workspace.yaml
packages:
  - 'apps/*'
  - 'packages/*'
```

### Shared Packages

#### Components Package (`packages/components`)
Contains all shared UI components built with shadcn/ui:
- Reusable React components
- Shared Tailwind theme
- Utility functions
- Global styles

#### TypeScript Config Package (`packages/tsconfig`)
Provides shared TypeScript configurations:
- `base.json`: Common TypeScript settings
- `react-app.json`: React-specific configuration

### App-Specific Configuration
Each app in `apps/` has its own:
- `package.json` with app-specific dependencies
- `vite.config.js` for build configuration
- `tailwind.config.js` that extends the shared theme
- `tsconfig.json` that extends shared configurations

## 🎨 Tailwind CSS v4.0.0 Features

### Shared Theme Configuration
The shared theme is defined in `packages/components/tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      colors: {
        // Your brand colors
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

### App-Specific Tailwind Config
Each app extends the shared theme:
```javascript
const sharedConfig = require('@embed-tools/components/tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [sharedConfig],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/components/src/**/*.{js,ts,jsx,tsx}',
  ],
};
```

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

## 📦 Creating New Apps

### Using the App Generator (Recommended)
```bash
# Create a new app
pnpm create-app my-new-app

# The script will:
# ✅ Create the app directory structure
# ✅ Generate all necessary files with correct naming
# ✅ Set up Vite config with proper paths
# ✅ Create a basic React component with TypeScript
# ✅ Add Tailwind CSS v4.0.0 styles
# ✅ Configure app to use shared packages
# ✅ Generate app-specific README
```

### Manual Creation
1. Create a new directory in `apps/`:
```bash
mkdir apps/your-new-app
```

2. Create `package.json` with workspace dependencies:
```json
{
  "name": "your-new-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@embed-tools/components": "workspace:*",
    "react": "^19.1.0",
    "react-dom": "^19.1.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.6.0",
    "tailwindcss": "^4.1.10",
    "typescript": "^5.8.3",
    "vite": "^6.3.5"
  }
}
```

3. Set up configuration files:
   - `vite.config.js` - Vite configuration
   - `tailwind.config.js` - Extends shared theme
   - `tsconfig.json` - Extends shared TypeScript config
   - `index.html` - HTML template
   - `src/` - App source code

## 🌐 Embedding in Other Websites

### Iframe Embedding
```html
<iframe 
  src="https://nilead.github.io/embed-tools/ai-model-discovery/"
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
  script.src = 'https://nilead.github.io/embed-tools/ai-model-discovery/assets/main.js';
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
   pnpm build
   # Deploy the dist folders from each app
   ```

3. **Access your apps:**
   - AI Model Discovery: `https://nilead.github.io/embed-tools/ai-model-discovery/`
   - Website Cost Estimator: `https://nilead.github.io/embed-tools/website-cost-estimator/`

## 🔍 Performance Optimization

- **Monorepo Benefits:** Shared dependencies reduce bundle sizes
- **Code Splitting:** Automatic chunk splitting for better loading
- **Minification:** Terser for optimal bundle size
- **Tree Shaking:** Unused code elimination
- **Font Optimization:** Preloaded Google Fonts
- **Image Optimization:** Vite's built-in image optimization
- **Tailwind v4.0.0:** Smaller CSS bundles and better performance
- **Shared Components:** Reduced duplication across apps

## 🎨 Customization

### Styling
- Modify `packages/components/tailwind.config.js` for shared theme changes
- Update `packages/components/src/globals.css` for global styles
- Use CSS custom properties for dynamic theming
- Leverage Tailwind v4.0.0's new component and utility layers

### Branding
- Update meta tags in each app's `index.html`
- Replace favicon and social media images
- Customize color scheme in shared Tailwind config
- Use CSS custom properties for dynamic theming

## 📝 Development Guidelines

### Code Style
- Use ESLint for code quality
- Follow React and TypeScript best practices
- Implement responsive design
- Write accessible HTML
- Use shared components from `packages/components`

### Performance
- Lazy load components when possible
- Optimize images and assets
- Use React.memo for expensive components
- Implement proper error boundaries
- Leverage Tailwind v4.0.0's performance improvements
- Share code through packages to reduce duplication

### Monorepo Best Practices
- Keep shared code in `packages/`
- Use workspace dependencies (`workspace:*`)
- Maintain consistent TypeScript configurations
- Share UI components through the components package
- Use the app generator for new apps

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
4. Test thoroughly across all apps
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For issues and questions:
- Create an issue on GitHub
- Check the documentation
- Review the code examples
- See `REFACTOR_GUIDE.md` for detailed monorepo setup

---

**Built with ❤️ using React, Vite, TypeScript, and Tailwind CSS v4.0.0 in a pnpm monorepo** 