<div align="center">

# Erick Fierro — Portfolio

Minimalist personal portfolio built with Next.js, TypeScript, and Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-15-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![pnpm](https://img.shields.io/badge/pnpm-package%20manager-F69220?logo=pnpm&logoColor=white)](https://pnpm.io/)

[Live Site](https://erickfierro.github.io) · [Report an Issue](https://github.com/erickfierro/erickfierro.github.io/issues)

</div>

---

## Overview

A clean, single-page portfolio showcasing experience, projects, and contact info. Statically exported and deployed on GitHub Pages.

## Features

- **Bilingual** — English/Spanish toggle with instant switching (`components/language-context.tsx`)
- **Dark/Light Mode** — Persisted across visits via `localStorage`, no flash-of-wrong-theme
- **Scroll Animations** — Sections fade in as they enter the viewport (`IntersectionObserver`)
- **Responsive** — Mobile-first layout, tested down to small viewports
- **SEO Ready** — Dynamic `robots.ts` and `sitemap.ts`, Open Graph and Twitter metadata
- **Static Export** — Zero server runtime, ships as static HTML/CSS/JS

## Tech Stack

| Layer      | Choice                          |
|------------|----------------------------------|
| Framework  | Next.js 15 (App Router)          |
| Language   | TypeScript                       |
| Styling    | Tailwind CSS v4                  |
| Icons      | lucide-react                     |
| Fonts      | Geist                            |
| Package manager | pnpm                        |

## Getting Started

```bash
# Install dependencies
pnpm install

# Run the dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

```bash
# Production build (static export to /out)
pnpm build

# Lint
pnpm lint
```

## Project Structure

```
app/
  layout.tsx      Root layout, fonts, metadata
  page.tsx        Main page (all sections)
  robots.ts        SEO robots config
  sitemap.ts       SEO sitemap config
  globals.css      Theme tokens & Tailwind layers
components/
  language-context.tsx   i18n provider (EN/ES)
  language-toggle.tsx    Language switcher UI
lib/
  i18n.ts          Translation strings
```

## Deployment

The site is built with `output: "export"` and deployed to GitHub Pages from the static output in `/out`.

## License

Personal project — content and code are not licensed for reuse.
