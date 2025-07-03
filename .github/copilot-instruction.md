# Copilot Instruction for AstroJS v5 + Tailwind v4+

## Key Principles

1. **Concise & Technical**: Provide short, precise answers with AstroJS v5+ examples.
2. **Static-First**: Favor static generation, minimize runtime JS, optimize performance.
3. **CSS-First Styling**: Use Tailwind CSS v4+ with the CSS token API (`@theme` in global.css). Avoid JS-based theming.
4. **Typed Content**: Use Astro’s Content Layer or Sanity CMS paired with TypeScript schemas for safe, compile-time typing.
5. **Modular & Reusable**: Follow Astro’s component conventions, leverage partial hydration only where needed.

---

## AI Hooks

- Use `/** @autoDoc */` above exported JS/TS functions to generate documentation.
- Use `/** @generateTests */` above utility functions to scaffold tests.
- Use `<!-- @autoDocs -->` in `.astro` templates to generate component docs.
- Use `<!-- @suggestProps -->` in `.astro` files where AI should infer and suggest prop types.

---

## Test File Conventions

- Name test files as `*.test.{js,ts}` or `*.spec.{js,ts}`.
- Use Vitest with `describe`/`it` structure and `vi.mock()` for mocking.

---

## Project Structure

```
src/
├── components/           # .astro and framework components
├── components/svg/       # SVGs transformed into components
├── icons/                # (Preferred) SVGs for astro-icon integration
├── layouts/              # Shared layout components
├── pages/                # File-based routes
├── content/              # Astro Content Layer collections (with TS types)
├── sanity/               # (Optional) Sanity Studio + schema definitions
├── styles/               # global.css, component CSS
├── assets/               # Images, fonts, static files
├── lib/                  # Utility functions, data-fetchers
├── types/                # Shared TypeScript types
└── public/               # Static assets
astro.config.mjs
sanity.config.ts          # optional, Sanity configuration
```

- **Note:** Exclude `src/icons/**` from Astro rules for direct component imports; use only for astro-icon integration.

---

## Icons

- Pick a consistent SVG icon set (preferably from a single `@iconify-json/*` collection per project).
- Use [astro-icon](https://www.astroicon.dev/getting-started/) and the `<Icon />` component for all icon needs—avoid inline SVGs.
- Only add additional Iconify collections if the primary collection doesn't have relevant icons.
- Place custom SVGs in `src/icons/` for slug-based referencing with astro-icon.
- Organize icons in subfolders within `src/icons/` for clarity.
- **Accessibility:** Always provide ARIA labels and semantic meaning for icons.

---

## Component Development

- Use `.astro` files by default.
- Import React/Vue/Svelte components only if advanced interactivity is required and put those components under the /components/react/, /components/vue/, /components/svelte/ folders.
- Design components for prop-driven reuse.

---

## Routing & Pages

- File-based routes under `src/pages/`.
- Dynamic routes: `[...slug].astro`.
- Fetch and pass data via `getStaticPaths()` and frontmatter.
- Include `404.astro` for missing pages.
- For paginated content, keep `/blog/` as page one; `/blog/2/`, `/blog/3/`, etc.

---

## Content Management

### Astro Content Layer

- Define collections in `src/content/`, each with a `schema.ts` using TypeScript.
- Example:

  ```ts
  // src/content/schema.ts
  import { z, defineCollection } from "astro:content";

  const blog = defineCollection({
    schema: z.object({
      title: z.string(),
      date: z.string().transform((s) => new Date(s)),
      tags: z.array(z.string()),
    }),
  });

  export const collections = { blog };
  ```

- Access via `import { collections } from 'astro:content'`.
- Use `getCollection()` for type-safe content queries.

### Sanity CMS (Optional)

- Bootstrap Sanity Studio with `npm create sanity@latest`.
- Define schemas in `sanity/schemas/*.ts` with TypeScript.
- Generate TypeScript types (`sanity-codegen`).
- Fetch in Astro using `@sanity/client`:

  ```ts
  import { createClient } from "@sanity/client";

  const client = createClient({
    projectId: "yourId",
    dataset: "production",
    useCdn: false,
    apiVersion: "2023-10-01",
  });

  const query = `*[_type == "post"]{title, body}`;
  const posts = await client.fetch(query);
  ```

---

## Data Management

- Use SQLite + Turso for lightweight DB needs.
- Fetch at build time in `getStaticPaths()` or server utilities.
- Use `Astro.glob()` for local data, combined with external sources as needed.

---

## Styling (Tailwind v4+)

- Install with `@astrojs/tailwind`.
- Primary styling via `global.css` and `@theme`:

  ```css
  @import "tailwindcss";

  @theme {
    --text-base: 1rem;
    --text-base--line-height: 1.75;
    --text-base--font-weight: 400;

    /* Fluid headings */
    --text-h1: clamp(2.5rem, 5vw, 3.052rem);
    --text-h1--line-height: 1.2;
    --text-h1--font-weight: 700;
    --text-h2: clamp(2rem, 4vw, 2.441rem);
    --text-h2--line-height: 1.25;
    --text-h2--font-weight: 600;
    /* Add h3–h6 similarly */
  }
  ```

- **Color tokens:** Use only your project’s predefined color tokens (except `white` and `black` for contrast). Never use generic Tailwind palettes like `bg-blue-500` or `text-pink-300`.
- **Spacing:** Stick to your container policy for horizontal gutters. For vertical gaps between siblings, always use `space-y-<n>` utilities—no individual top/bottom margins or paddings. Choose spacing steps from a single consistent scale (divisible by 3 or 4), not both, with only rare exceptions.
- **Typography:** Always apply your semantic typography utilities from `global.css` (e.g. `.text-h1`, `.text-lead`), never ad-hoc Tailwind text sizes or weights. When you pull in example code, automatically swap any raw `text-lg`/`font-bold` etc. for your branded classes.

---

## Images

- Use Unpic for optimized images in Astro:
  - Endpoint: `https://unpic.pics/img/astro/`
  - Component: `@unpic/astro`
- Prefer Astro’s image integration for basic optimization.

---

## Interactivity

- Use Alpine.js for simple UI behaviors (`client:load` or CDN).
- For complex state, leverage Astro’s partial hydration (`client:idle`, `client:visible`).
- **Astro client directives:** Use `client:load` for essential hydration, `client:idle`/`client:visible` for noncritical components.

---

## Forms

- Use Netlify Forms or custom endpoints.
- **Always include a hidden `form-name` input** and a thank-you redirect.

---

## Performance

- Minimize runtime JS: prioritize static components.
- Image optimization: `@astrojs/image` for basic ones or `@unpic/astro` for optimized advanced use.
- Lazy-load assets.
- Monitor Core Web Vitals.

---

## Data Fetching

- Use `Astro.glob()` for local data.
- Combine with SQLite/Turso or CMS queries.
- Error handling in `getStaticPaths()` and components.

---

## SEO & Meta

- Standardize a `<SEO>` component for meta tags.
- Use canonical URLs, meta descriptions, Open Graph, and Twitter Card tags.

---

## Testing & QA

- Unit tests for utility functions.
- Use Vitest for unit and end-to-end tests, and `vi.mock()` for mocking.
- Visual regression testing for UI components.
- Test `getStaticPaths()` and data fetching logic.

---

## Accessibility

- Use semantic HTML, ARIA roles, and keyboard navigation for all interactive elements.
- Test with screen readers and accessibility tools.
- Provide ARIA labels for icons and form elements.

---

## Conventions

- Use ES modules and native `node:fetch`.
- TypeScript for all data.
- Use consistent trailing-slashes in URLs.
- Use Fontsource for web font optimization.
- Follow Astro’s file-based routing conventions.

---

## Reference

- **Astro v5 Documentation**: https://docs.astro.build
- **Content Layer**: https://docs.astro.build/en/guides/content-collections/
- **Astro Integrations**: https://docs.astro.build/en/guides/integrations/
- **Turso for SQLite**: https://turso.tech/
- **Netlify Documentation**: https://docs.netlify.com
- **Fontsource**: https://fontsource.org/
- **Unpic** https://unpic.pics/img/astro/
- **See also:** `.cursor/cursorrules.astro` and `.cursor/cursorrules.global` for enforced rules and more code examples.
