# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:4321
npm run build     # Build production site to ./dist/
npm run preview   # Preview the production build locally
npx prettier --write .  # Format all files
```

There are no tests in this project.

## Architecture

QueryLock is a static marketing site built with **Astro + React + Tailwind CSS v4**. Astro handles routing and static rendering; React is used only for interactive components that need client-side state.

### Component split: Astro vs React

- **Astro components** (`.astro`): all purely static sections — Hero, Footer, Nav static fallback, Offerings, Belief, etc.
- **React components** (`.tsx`): components requiring interactivity — `Nav.tsx` (mobile menu toggle), `GuideSeries.tsx` (category filter), `FAQ.tsx` (accordion), `Newsletter.tsx` (form state). These are mounted with `client:load` in page files.

### Content data

All structured content (guide series, training options, free resources) lives in `src/data/content.ts` as exported TypeScript arrays. This is the single source of truth — update it here to change what appears on the site. The `Series`, `FreeResource`, and `Training` interfaces are defined in the same file.

### Styling system

**Tailwind CSS v4** is configured via the `@theme {}` block in `src/styles/global.css` — not a `tailwind.config.*` file. Design tokens are defined once there and exposed two ways:
- As CSS custom properties: `var(--ql-violet)`, `var(--fg-2)`, `var(--border)`
- As Tailwind utility classes: `bg-ql-violet`, `text-ql-deep-purple`

Components use both forms. Prefer CSS custom properties for inline styles and Tailwind classes for layout/spacing utilities.

**Fonts**: Visby CF (display/headings, `--font-display`) is self-hosted from `public/assets/fonts/`. Montserrat (body, `--font-body`) and JetBrains Mono (`--font-mono`) load from Google Fonts.

**Custom breakpoint**: `--breakpoint-nav: 920px` controls when the nav switches from mobile hamburger to desktop links (`nav:flex`, `nav:hidden`).

### Layout

`src/layouts/Layout.astro` is the single base HTML shell (head, body wrapper). Every page imports it and passes `title` and optional `description` props. The body uses flexbox column so `<main>` fills remaining height between nav and footer.

### Formatting

Prettier with `prettier-plugin-astro` and `prettier-plugin-tailwindcss`. Config in `.prettierrc`: double quotes, 2-space indent, 100-char line width, trailing commas.
