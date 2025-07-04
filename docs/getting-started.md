# Getting Started

Welcome to the Astro Starter! This guide will help you get up and running with your new project.

## 🚀 Quick Start

1. **Clone or download** this starter template
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. **Open your browser** and navigate to `http://localhost:4321`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Button, etc.)
│   ├── Footer.astro    # Footer component
│   └── FooterExamples.astro
├── layouts/            # Page layouts
│   └── Layout.astro    # Main layout with footer
├── pages/              # Astro pages (file-based routing)
│   ├── index.astro     # Home page
│   └── 404.astro       # 404 error page
├── styles/             # Global styles
│   └── global.css      # Tailwind CSS and design tokens
└── types/              # TypeScript interfaces
    ├── button.ts       # Button component types
    └── footer.ts       # Footer component types
```

## 🎨 Customization

### 1. Update Company Information

Edit `src/layouts/Layout.astro` to customize the footer for your project:

```astro
<Footer
  companyName="Your Company Name"
  location="Your City, State"
  email="hello@yourcompany.com"
  website="https://yourcompany.com"
/>
```

### 2. Customize Colors

Update the color tokens in `src/styles/global.css`:

```css
@theme {
  --color-primary: oklch(0.78 0.1687 65.71); /* Your primary color */
  --color-accent: oklch(0.51 0.196 22.53); /* Your accent color */
  --color-secondary: oklch(0.34 0.1251 330.49); /* Your secondary color */
}
```

### 3. Add Your Content

Replace the content in `src/pages/index.astro` with your own:

```astro
---
import Layout from "@layouts/Layout.astro";
---

<Layout>
  <main class="container mx-auto px-4 py-8">
    <h1 class="text-h1">Welcome to Your Project</h1>
    <p class="text-lead">Your amazing content goes here!</p>
  </main>
</Layout>
```

## 🧩 Using Components

### Footer Component

The footer component is automatically included in the layout. You can also use it standalone:

```astro
---
import Footer from "@components/Footer.astro";
---

<Footer
  companyName="Your Company"
  location="Your Location"
  phone="+1 (555) 123-4567"
  email="hello@yourcompany.com"
/>
```

### Button Component

```astro
---
import Button from "@components/ui/Button.astro";
---

<Button variant="solid" size="md">
  Click me!
</Button>
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run astro ...` - Run Astro CLI commands

## 🎯 Design System

This starter uses a modern design system with:

- **OKLCH Colors** - Perceptually uniform color space
- **Fluid Typography** - Responsive text sizing
- **Semantic Classes** - Meaningful class names
- **Accessibility First** - WCAG compliant components

### Typography Classes

- `text-h1` through `text-h6` - Heading styles
- `text-lead` - Lead paragraph
- `text-base` - Body text
- `text-small` - Small text
- `text-quote` - Quote text

### Color Classes

- `bg-primary` / `text-primary` - Primary color
- `bg-accent` / `text-accent` - Accent color
- `bg-secondary` / `text-secondary` - Secondary color
- `bg-light` / `text-light` - Light variant
- `bg-dark` / `text-dark` - Dark variant

## 🔧 Configuration

### TypeScript

The project uses TypeScript with path aliases configured in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": { "@*": ["src/*"] }
  }
}
```

### Astro Configuration

Edit `astro.config.mjs` to customize Astro settings:

```javascript
import { defineConfig } from "astro/config";

export default defineConfig({
  // Your Astro configuration
});
```

## 📚 Next Steps

1. **Read the component documentation** in `docs/components/`
2. **Customize the design system** to match your brand
3. **Add your content** and pages
4. **Deploy your site** using your preferred hosting platform

## 🆘 Need Help?

- Check the [Astro documentation](https://docs.astro.build/)
- Review the component documentation in `docs/components/`
- Look at the example components in `src/components/`
