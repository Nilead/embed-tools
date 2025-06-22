#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get app name from command line arguments
const appName = process.argv[2];

if (!appName) {
  console.error('❌ Please provide an app name:');
  console.log('Usage: node scripts/create-app.js <app-name>');
  console.log('Example: node scripts/create-app.js my-new-app');
  process.exit(1);
}

// Validate app name (kebab-case)
if (!/^[a-z0-9-]+$/.test(appName)) {
  console.error('❌ App name must be in kebab-case (lowercase, hyphens only)');
  console.log('Example: my-new-app, calculator-tool, data-visualizer');
  process.exit(1);
}

const appsDir = path.join(__dirname, '..', 'apps');
const newAppDir = path.join(appsDir, appName);

// Check if app already exists
if (fs.existsSync(newAppDir)) {
  console.error(`❌ App "${appName}" already exists!`);
  process.exit(1);
}

// Create app directory structure
const dirs = [
  newAppDir,
  path.join(newAppDir, 'src'),
];

dirs.forEach(dir => {
  fs.mkdirSync(dir, { recursive: true });
  console.log(`📁 Created directory: ${dir}`);
});

// Template files
const templates = {
  'index.html': `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="${appName.replace(/-/g, ' ')} - Your app description" />
    <meta name="keywords" content="your, keywords, here" />
    <meta name="author" content="Nilead" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://nilead.github.io/embed-tools/${appName}/" />
    <meta property="og:title" content="${appName.replace(/-/g, ' ')}" />
    <meta property="og:description" content="Your app description" />
    <meta property="og:image" content="https://nilead.github.io/embed-tools/${appName}/og-image.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://nilead.github.io/embed-tools/${appName}/" />
    <meta property="twitter:title" content="${appName.replace(/-/g, ' ')}" />
    <meta property="twitter:description" content="Your app description" />
    <meta property="twitter:image" content="https://nilead.github.io/embed-tools/${appName}/og-image.png" />

    <!-- Preload fonts for better performance -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <title>${appName.replace(/-/g, ' ')}</title>
    
    <!-- Embedding styles to prevent conflicts -->
    <style>
      /* Reset styles for embedding */
      .${appName}-embed {
        all: initial;
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        box-sizing: border-box;
      }
      .${appName}-embed * {
        box-sizing: border-box;
      }
    </style>
  </head>
  <body>
    <div id="root" class="${appName}-embed"></div>
    <script type="module" src="./main.jsx"></script>
  </body>
</html>`,

  'main.jsx': `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App.jsx';
import './src/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);`,

  'vite.config.js': `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/embed-tools/${appName}/',
  build: {
    outDir: '../../dist/${appName}',
    rollupOptions: {
      output: {
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId ? chunkInfo.facadeModuleId.split('/').pop() : 'chunk';
          return \`assets/\${facadeModuleId}-[hash].js\`;
        },
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  css: {
    devSourcemap: true,
  },
});`,

  'src/App.jsx': `import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gradient mb-4">
            ${appName.replace(/-/g, ' ')}
          </h1>
          <p className="text-lg text-gray-600">
            Your app description goes here
          </p>
        </header>
        
        <main>
          <div className="card">
            <h2 className="text-2xl font-semibold mb-4">Welcome to ${appName.replace(/-/g, ' ')}!</h2>
            <p className="text-gray-600">
              This is your new embeddable web application. Start building your app by editing the files in the src directory.
            </p>
          </div>
        </main>
        
        <footer className="text-center mt-12 text-gray-500">
          <p>Built with React, Vite, and Tailwind CSS v4.0.0</p>
        </footer>
      </div>
    </div>
  );
};

export default App;`,

  'src/index.css': `@import "tailwindcss";

/* Custom global styles */
@layer base {
  body {
    font-family: 'Inter', sans-serif;
  }
  
  /* CSS custom properties for theming */
  :root {
    --color-primary: 59 130 246;
    --color-primary-light: 96 165 250;
    --color-primary-dark: 37 99 235;
  }
}

@layer components {
  /* Custom component styles */
  .btn-primary {
    @apply bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200;
  }
  
  .btn-secondary {
    @apply bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-lg transition-colors duration-200;
  }
  
  .card {
    @apply bg-white rounded-xl shadow-lg border border-gray-100 p-6;
  }
  
  .input-field {
    @apply w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200;
  }
}

@layer utilities {
  /* Custom utility classes */
  .text-gradient {
    @apply bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent;
  }
  
  .glass-effect {
    @apply backdrop-blur-sm bg-white/80 border border-white/20;
  }
  
  .animate-fade-in {
    @apply animate-fade-in;
  }
  
  .animate-slide-up {
    @apply animate-slide-up;
  }
}`,

  'README.md': `# ${appName.replace(/-/g, ' ')}

This is an embeddable web application built with React, Vite, and Tailwind CSS v4.0.0.

## Development

\`\`\`bash
# Start development server
npm run dev:${appName}

# Build for production
npm run build:${appName}

# Preview build
npm run preview:${appName}
\`\`\`

## Embedding

Your app will be available at:
\`https://nilead.github.io/embed-tools/${appName}/\`

### Iframe Embed
\`\`\`html
<iframe 
  src="https://nilead.github.io/embed-tools/${appName}/"
  width="100%" 
  height="600px" 
  frameborder="0"
  title="${appName.replace(/-/g, ' ')}">
</iframe>
\`\`\`

## Features

- ✅ React 18 with modern hooks
- ✅ Vite for fast development and building
- ✅ Tailwind CSS v4.0.0 for styling
- ✅ Optimized for embedding
- ✅ GitHub Pages deployment ready
- ✅ Responsive design
- ✅ SEO optimized
`
};

// Create template files
Object.entries(templates).forEach(([filename, content]) => {
  const filePath = path.join(newAppDir, filename);
  fs.writeFileSync(filePath, content);
  console.log(`📄 Created file: ${filePath}`);
});

console.log('\n🎉 App created successfully!');
console.log(`\n📁 App location: ${newAppDir}`);
console.log('\n🚀 Next steps:');
console.log(`1. Add build scripts to package.json:`);
console.log(`   "dev:${appName}": "vite apps/${appName}"`);
console.log(`   "build:${appName}": "vite build apps/${appName}"`);
console.log(`   "preview:${appName}": "vite preview apps/${appName}"`);
console.log(`\n2. Start developing:`);
console.log(`   npm run dev:${appName}`);
console.log(`\n3. Update the app description and meta tags in index.html`);
console.log(`\n4. Customize the App.jsx component with your app logic`); 