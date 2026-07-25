# QueryLock — Company Website

The official website for [QueryLock](https://querylock.com), a cybersecurity education company offering practical guides, learning series, and live training for developers and engineering teams.

## Stack

- [Astro](https://astro.build) — static site framework
- [React](https://react.dev) — interactive components (nav, FAQ, newsletter, guide filters)
- [Tailwind CSS v4](https://tailwindcss.com) — utility classes and design token source
- TypeScript

## Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, offerings, guide series, training teaser, FAQ |
| `/learning` | Learning hub — filterable guide series catalog |
| `/training` | Training options — virtual, private, and onsite workshops |
| `/about` | Company story and mission |

## Getting Started

```bash
npm install
npm run dev
```

| Command | Action |
|---|---|
| `npm run dev` | Start local dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview the production build locally |

## Design System

Brand colors and design tokens live in `src/styles/global.css`. All colors are defined once in a Tailwind `@theme {}` block and are available as both CSS custom properties (`var(--ql-violet)`) and Tailwind utility classes (`bg-ql-violet`, `text-ql-deep-purple`, etc.).

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--color-ql-deep-purple` | `#260070` | Primary brand, headings |
| `--color-ql-violet` | `#7B2ADB` | Accents, links, CTAs |
| `--color-ql-magenta` | `#CB44EF` | Highlights, gradients |
| `--color-ql-ink-*` | `50`–`900` scale | Text, borders, backgrounds |

Custom fonts (Visby CF, Montserrat, JetBrains Mono) are loaded via `@font-face` declarations in `global.css`. Visby CF font files are served from `public/assets/fonts/`.

## Project Structure

```
src/
├── components/     # Astro and React components
├── data/           # Content definitions (series, training, resources)
├── layouts/        # Base HTML layout
├── pages/          # Route pages
└── styles/         # Global CSS and design tokens
public/
└── assets/         # Static assets (fonts, images, icons)
```
