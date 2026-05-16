# Astro Starter Kit: KovalDev

A modern, accessible, and customizable Astro starter template with a comprehensive design system and reusable components.

```sh
npm create astro@latest projectname -- --template koval-dev/astro-starter
```

## ✨ Features

- 🎨 **Modern Design System** - OKLCH colors, fluid typography, semantic classes
- 🧩 **Reusable Components** - Footer, Button, and more with TypeScript support
- ♿ **Accessibility First** - WCAG compliant components with proper ARIA labels
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🔧 **TypeScript Ready** - Full type safety with path aliases
- 📚 **Comprehensive Docs** - Detailed documentation for all components

## 🚀 Quick Start

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to `http://localhost:4321`

## 📁 Project Structure

```text
/
├── docs/                   # Documentation
│   ├── README.md          # Documentation index
│   ├── getting-started.md # Getting started guide
│   └── components/        # Component documentation
├── public/                # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── ui/           # Base UI components
│   │   └── Footer.astro  # Footer component
│   ├── layouts/          # Page layouts
│   ├── pages/            # Astro pages (file-based routing)
│   ├── styles/           # Global styles and design tokens
│   └── types/            # TypeScript interfaces
└── package.json
```

## 🧩 Components

- **[Footer Component](./docs/components/footer.md)** - Customizable footer with company information
- **Button Component** - Versatile button with multiple variants
- **More coming soon...**

## 📚 Documentation

- **[Getting Started](./docs/getting-started.md)** - Complete setup and customization guide
- **[Component Documentation](./docs/components/)** - Detailed component usage and examples
- **[Design System](./docs/getting-started.md#design-system)** - Colors, typography, and spacing

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 🎨 Design System

This starter includes a modern design system with:

- **OKLCH Colors** - Perceptually uniform color space
- **Fluid Typography** - Responsive text sizing with semantic classes
- **Consistent Spacing** - Systematic spacing scale
- **Accessibility** - High contrast and keyboard navigation

## 👀 Want to learn more?

- Check [our documentation](./docs/) for detailed guides
- Review [Astro documentation](https://docs.astro.build)
- Join our [Discord server](https://astro.build/chat)
