# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start local dev server (Vite + Astro)
npm run build     # Build production site to ./dist/
npm run preview   # Preview built site locally
npm run astro     # Run Astro CLI commands
```

Tests use Vitest (`*.test.{js,ts}` or `*.spec.{js,ts}`). No test runner is configured yet — add Vitest when writing tests.

## Architecture

Astro v6 static site starter/design-system template. No runtime JavaScript by default; client-side JS only via Astro's partial hydration directives (`client:load`, `client:idle`, `client:visible`).

**Stack:** Astro v6 · Tailwind CSS v4 (no `tailwind.config.js` — all theming via `@theme` in CSS) · TypeScript strict mode · Vite

**Path alias:** `@*` → `src/*` (e.g., `import Button from "@components/ui/Button.astro"`)

### Key directories

- `src/pages/` — File-based routes. Dynamic routes use `[...slug].astro` + `getStaticPaths()`.
- `src/layouts/` — Page wrappers (`DefaultLayout.astro` is the primary layout).
- `src/components/` — `.astro` components by default. Framework components (React/Vue/Svelte) go in `components/react/`, etc., only when advanced interactivity is required.
- `src/components/ui/` — Design system primitives (e.g., `Button.astro`).
- `src/styles/global.css` — Single source of truth for design tokens and typography utilities.
- `src/types/` — Shared TypeScript interfaces for component props.
- `src/content/` — Astro Content Layer collections (not yet created; add `schema.ts` with Zod + `defineCollection()`).
- `src/icons/` — Custom SVGs for astro-icon slug-based referencing.

## Styling Rules

**Colors:** Use only project color tokens defined in `global.css` (`--color-primary`, `--color-accent`, `--color-secondary`, etc.). Never use generic Tailwind palettes like `bg-blue-500`.

**Typography:** Always use semantic utilities from `global.css` (`.text-h1`–`.text-h6`, `.text-lead`, `.text-p`, `.text-eyebrow`, etc.). Never use ad-hoc `text-lg` / `font-bold`.

**Spacing:** Use `space-y-<n>` for vertical gaps between siblings — no individual top/bottom margins/paddings. Stick to a consistent scale (divisible by 3 or 4, not both).

**Tailwind v4 theming:** All tokens live in the `@theme {}` block inside `src/styles/global.css`. Colors use OKLCH. Typography uses `clamp()` for fluid sizing.

## Component Conventions

- Props are typed via TypeScript interfaces in `src/types/`.
- Design for prop-driven reuse.
- Use `<Fragment>` for multiple root elements in `.astro` files.
- All interactive elements need semantic HTML, ARIA roles, and keyboard navigation.

## Icons

Use [astro-icon](https://www.astroicon.dev/) with the `<Icon />` component — no inline SVGs. Pick one `@iconify-json/*` collection per project as the primary source. Place custom SVGs in `src/icons/` organized in subfolders.

## Content Collections (when adding)

Define collections in `src/content/` with a `schema.ts` using Zod:

```ts
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

Access via `getCollection()` for type-safe queries.

## AI Hooks

- `/** @autoDoc */` — above exported TS/JS functions to generate docs
- `/** @generateTests */` — above utility functions to scaffold tests
- `<!-- @autoDocs -->` — in `.astro` templates to generate component docs
- `<!-- @suggestProps -->` — in `.astro` files to infer and suggest prop types
