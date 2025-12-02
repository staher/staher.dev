# Design Decisions & Tradeoffs

Purpose: record choices, rationale, and tradeoffs for stack, architecture, and hosting. Update this as we implement and learn.

## Stack choices
- Language: TypeScript  
  - Why: type safety, better tooling/autocomplete, reduced runtime errors.  
  - Tradeoff: slight overhead in setup and types for simple components, acceptable for maintainability.
- Framework: Astro (static-first)  
  - Why: ships minimal JS for mostly static pages; simple file-based routing and great MD/MDX story; can mix React islands only where needed.  
  - Tradeoff: learn Astro’s routing/content model; less “all-React” mental model.
- Islands: React (via `@astrojs/react`)  
  - Why: familiar component model for interactive parts without turning the whole site into a SPA.  
  - Tradeoff: adds React runtime only where hydrated; keep islands scoped.
- Build tool: Astro (uses Vite under the hood)  
  - Why: fast dev/build, static output by default; Vite plugins available if needed.  
  - Tradeoff: some configuration differences vs raw Vite.
- Styling: Tailwind CSS (v4)  
  - Why: fast iteration with utility tokens, consistent spacing/typography, tiny runtime.  
  - Tradeoff: class-heavy markup; mitigated by shared patterns and tokens. Evaluating DaisyUI/Radix for theming convenience.
- Routing: Astro file-based pages + 404  
  - Why: distinct URLs per page, zero extra routing code.  
  - Tradeoff: none for static pages; React Router not needed.

## Non-functional approach
- Performance: pre-rendered static build, minimal JS, optimized assets; avoid large deps.
- Accessibility: semantic HTML, focus-visible states, sufficient contrast, respect reduced motion.
- SEO: meaningful titles/meta, canonical URL, OG/Twitter defaults; sitemap/robots after hosting/domain chosen.

## Hosting options (pending)
- Candidates: GitHub Pages (free, needs CI to publish `dist`), Netlify (easy static deploys, previews, free tier), Vercel (previews, good DX, free tier).
- Selection deferred until after MVP layout; decision will consider custom domain, pricing, and preview needs. Update this section once chosen.

## Dark mode (planned follow-up)
- Plan: define color tokens as CSS variables; add `.theme-dark` + prefers-color-scheme hook and toggle post-MVP.

## How the pieces fit (for newcomers)
- TypeScript: adds types on top of JavaScript so editors and builds catch mistakes before shipping. It compiles to plain JS that browsers run.
- Astro: renders `.astro` pages to static HTML by default. You can embed Markdown/MDX or framework components. It outputs static files in `dist/`.
- React islands: used only where interactivity is needed; Astro hydrates those components on the client, keeping the rest static.
- Tailwind CSS: utility classes compiled to minimal CSS via the Tailwind (v4) plugin in Astro/Vite.
- Browser: receives the static HTML/CSS (and any island JS) from `dist/` and renders the site. No server code needed for MVP.

Data/content flow
- Source: `.astro` pages, TS data files (projects/links), optional React components for interactive bits.
- Build: Astro compiles pages, runs Tailwind to emit CSS, and bundles any hydrated islands. Output is static assets in `dist/`.
- Deploy: hosting serves the `dist/` folder over HTTPS; the browser downloads and renders it.

High-level diagram (build to browser)
```
Astro pages + TS data + Tailwind classes (+ optional React islands)
                     |
                     v
                 Astro build
      (render to HTML, Tailwind -> CSS, bundle islands)
                     |
                     v
                   dist/
         (static HTML/CSS/assets, small JS for islands)
                     |
                     v
               Hosting (CDN)
                     |
                     v
                  Browser
```

## Decision log
- 2024-11-24: Framework → moved from Vite+React to Astro (static-first, optional React islands) to ship less JS and simplify routing; tradeoff is learning Astro’s model.
- 2024-11-24: Routing → file-based multi-page (Astro) for distinct URLs and shared layout shell; tradeoff vs anchors is negligible, improves URL semantics.
- 2024-11-24: Styling → Tailwind v4 via Astro’s plugin; evaluating DaisyUI/Radix for theming convenience vs keeping custom tokens.
## Update hook
- For every implementation task, note any new findings or changes (e.g., routing choice, hosting decision, styling adjustments) here under the relevant section with date and rationale.
- When a decision changes, add a short entry under the affected bullet (e.g., “2024-11-23: Chose single-page anchors to keep bundle small; tradeoff is fewer distinct URLs.”).
