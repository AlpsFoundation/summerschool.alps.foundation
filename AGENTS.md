# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server (Astro + Vite HMR)
pnpm build        # Build for production (outputs to dist/)
pnpm preview      # Preview production build locally
pnpm generate-types  # Generate Cloudflare Worker types via wrangler
```

## Architecture

Single-page marketing site for the ALPS Summer School 2026 (psychedelic science & therapy event), built with **Astro 6 + Cloudflare adapter** for edge deployment.

**Stack:**
- Astro 6 with `@astrojs/cloudflare` adapter — SSR/static output targeting Cloudflare Workers
- Tailwind CSS v4 via `@tailwindcss/vite` (no `tailwind.config.*` file — config lives in CSS)
- MDX support via `@astrojs/mdx`
- Package manager: **pnpm**

**Page structure:** Single route (`src/pages/index.astro`) that composes all section components in order: `Nav → Hero → Aftermovie → About → Program → Venue → GeneralInfo → People → Apply → Footer`.

**Styling conventions** (defined in `src/styles/global.css`):
- Design tokens set in `@theme {}` block: `--color-bg`, `--color-fg`, `--color-primary` (#9a006d), `--color-accent` (#ff4fb5), etc.
- CSS gradients stored as `--grad-primary` and `--grad-text` CSS custom properties on `:root`
- Reusable utility classes defined in `@layer components`: `.container-x` (max-width layout wrapper), `.btn` / `.btn--ghost`, `.card`, `.gradient-border`, `.eyebrow`, `.gradient-text`, `.page-gradient`
- Custom font: Switzer variable font (preloaded from `/public/fonts/`)
- Sections with `id` attributes get `scroll-margin-top` to clear the sticky nav

**Deployment target:** Cloudflare Workers (via `@astrojs/cloudflare`). The `.wrangler/` directory and `content/` directory are gitignored.
