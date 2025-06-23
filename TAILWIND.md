
# Guide: Install or Upgrade shadcn/ui with Tailwind CSS v4 using Vite

This guide walks you through the **installation** of `shadcn/ui` and **Tailwind CSS v4** in a Vite + React 19 project, as well as the steps to **upgrade an existing project** from Tailwind v3.

---

## ✅ Fresh Installation (Vite + React 19 + Tailwind v4 + shadcn/ui)

### 1. Create a New Vite Project (React + TS)

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
```

### 2. Install Tailwind CSS v4

```bash
npm install -D tailwindcss@latest @tailwindcss/cli@latest @tailwindcss/postcss@latest
npx tailwindcss init -p
```

This creates:

- `tailwind.config.js`
- `postcss.config.js`

### 3. Configure Tailwind

Update your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Replace the contents of `src/index.css`:

```css
@import "tailwindcss";
```

Remove legacy `@tailwind base/components/utilities` directives if present.

### 4. Use Tailwind’s Vite Plugin (Recommended for v4)

Update `vite.config.ts`:

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### 5. Install shadcn/ui

```bash
npx shadcn-ui@latest init
```

The CLI will:

- Set up the component structure
- Ask about your project type (select Vite)
- Let you pick a theme (`new-york` is now the default)
- Add dependencies like `clsx`, `tailwind-merge`, `@radix-ui/react-*`, etc.

---

## 🔁 Upgrade Guide: Tailwind v3 + shadcn/ui → Tailwind v4 + React 19

> Only follow this if you are upgrading an **existing** project.

---

### Step 1. Upgrade Tailwind to v4

Run the official codemod (requires Node.js 20+):

```bash
npx @tailwindcss/upgrade@latest
```

This will:

- Update Tailwind to v4
- Convert legacy `@tailwind` directives to `@import "tailwindcss"`
- Migrate deprecated utilities
- Warn about manual fixes

If you use PostCSS, ensure you're using `@tailwindcss/postcss`.

---

### Step 2. Update Tailwind Config

- Make sure `tailwind.config.js` uses `@import "tailwindcss"`
- Remove `postcss-import` and `autoprefixer` from PostCSS config
- Migrate to Tailwind’s **native CLI or Vite plugin** (as shown above)

---

### Step 3. Update Theme Variables (from `shadcn/ui`)

Replace your CSS variables and theme setup like this:

> **Note**: This new syntax combines variable definition and theme application into a single, more concise block, replacing the need for separate `@layer base` and `@theme` blocks.

```css
/* Before (old v3-compatible setup) */
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
  }
}

@theme {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
}
```

```css
/* After (v4-compatible setup with @theme inline) */
:root {
  --background: hsl(0 0% 100%);
  --foreground: hsl(0 0% 3.9%);
}

.dark {
  --background: hsl(0 0% 3.9%);
  --foreground: hsl(0 0% 98%);
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
}
```

---

### Step 4. Update Component Styles (if needed)

- Convert `w-4 h-4` to `size-4`
- Remove `forwardRef` usage (optional but recommended):
  - Replace with plain function components
  - Add `data-slot` for styling

```tsx
// Before
const AccordionItem = React.forwardRef<...>(...)

AccordionItem.displayName = "AccordionItem"
```

```tsx
// After
function AccordionItem(props: ComponentProps<...>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      {...props}
    />
  )
}
```

---

### Step 5. Update Chart and JS Configs

If you’re using chart colors:

```ts
// Before
color: "hsl(var(--chart-1))"

// After
color: "var(--chart-1)"
```

---

### Step 6. Update shadcn/ui Dependencies

```bash
pnpm up "@radix-ui/*" cmdk lucide-react recharts tailwind-merge clsx --latest
```

If you're using `tailwindcss-animate`, replace it with:

```bash
npm uninstall tailwindcss-animate
npm install -D tw-animate-css
```

Then in your CSS:
```css
@import "tw-animate-css";
```

---

### Step 7. Commit and Backup

Before running any CLI commands that may **overwrite components**, always:

```bash
git add .
git commit -m "Backup before shadcn/ui component updates"
```

---

## 🛠 Additional Notes & Compatibility

- Tailwind v4 **does not support** Sass, Less, Stylus
- Preprocessors are unnecessary — Tailwind supports variables, nesting, imports natively
- Only modern browsers supported (Safari 16.4+, Chrome 111+, Firefox 128+)

---

## ✅ Final Check

| Feature              | Tailwind v4 Support |
|----------------------|---------------------|
| Native `@import`     | ✅ Yes              |
| PostCSS support      | ✅ With `@tailwindcss/postcss` |
| CLI builds           | ✅ Using `@tailwindcss/cli` |
| Vite Plugin          | ✅ Recommended      |
| Sass/Less/Stylus     | ❌ Not supported    |
| Modern JS frameworks | ✅ React 19, Vue 3, Astro |

---

## 📎 Resources

- Tailwind v4 Docs: https://tailwindcss.com/docs/upgrade-guide
- shadcn/ui Docs: https://ui.shadcn.com/docs/tailwind-v4
- Compatibility: https://tailwindcss.com/docs/compatibility

---

## 🧩 CSS-First Configuration in Tailwind CSS v4

Tailwind CSS v4 introduces a CSS-first approach to configuration. Instead of relying on a `tailwind.config.js` file, you can now define your design tokens and customizations directly in CSS using the `@theme` directive.

### 🎨 Define Design Tokens with `@theme`

```css
@import "tailwindcss";

@theme {
  --font-display: "Satoshi", sans-serif;
  --breakpoint-3xl: 1920px;
  --color-avocado-100: oklch(0.99 0 0);
  --color-avocado-200: oklch(0.98 0.04 113.22);
  --color-avocado-300: oklch(0.94 0.11 115.03);
  --color-avocado-400: oklch(0.92 0.19 114.08);
  --color-avocado-500: oklch(0.84 0.18 117.33);
  --color-avocado-600: oklch(0.53 0.12 118.34);
  --ease-fluid: cubic-bezier(0.3, 0, 0, 1);
  --ease-snappy: cubic-bezier(0.2, 0, 0, 1);
}
```

### ⚙️ What You Can Configure with `@theme`

- **Colors** (`--color-*`)
- **Fonts** (`--font-*`)
- **Spacing, sizing** (`--spacing-*`, `--size-*`)
- **Breakpoints** (`--breakpoint-*`)
- **Shadows, radii, borders, etc.**
- **Transitions, easings, animations**
- **Variants and data attributes**

### 📦 Extend or Override Theme Values

```css
@theme {
  --font-script: "Great Vibes", cursive;
  --breakpoint-sm: 30rem;
}
```

To override entire groups:

```css
@theme {
  --color-*: initial;
  --color-midnight: #121063;
}
```

To replace the entire default theme:

```css
@theme {
  --*: initial;
  --spacing: 4px;
  --font-body: Inter, sans-serif;
  --color-lagoon: oklch(...);
}
```

### 🚀 Dynamic Utilities and Variants

Tailwind generates utilities on-demand. You can use arbitrary values without configuring them:

```html
<div class="grid grid-cols-15"></div>
<div data-current class="opacity-75 data-current:opacity-100"></div>
```

### 🔁 Use Static Mode (Optional)

If you want all theme variables emitted regardless of usage:

```css
@theme static {
  --color-primary: hsl(...);
}
```

### 🧩 Keep JS Config (If Needed)

You can still use JS config files:

```css
@config "./tailwind.config.js";
@import "tailwindcss";
```

> Example `tailwind.config.js` for Tailwind v4:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Note: theme is now primarily handled in CSS via @theme
  // This file is for things not easily done in CSS.
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
```

### 📁 Shared Theme Support

Create reusable themes in separate CSS files:

```css
/* theme.css */
@theme {
  --*: initial;
  --font-body: Inter, sans-serif;
  --color-dusk: oklch(...);
}

/* app.css */
@import "tailwindcss";
@import "./theme.css";
```

This is useful for monorepos and design systems.

---

