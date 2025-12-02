# Design Decisions & Tradeoffs

Purpose: record choices, rationale, and tradeoffs for stack, architecture, and hosting. Update this as we implement and learn.

## Stack choices
- Language: TypeScript
  - Why: type safety, better tooling/autocomplete, reduced runtime errors.
  - Tradeoff: slight overhead in setup and types for simple components, but acceptable for maintainability.
- Framework: React (via Vite)
  - Why: familiar ecosystem, component model, and minimal runtime when used for static content.
  - Tradeoff: adds a JS runtime vs pure HTML; mitigated by keeping components small and avoiding heavy client logic.
- Build tool: Vite
  - Why: fast dev server and build, simple static output, minimal config.
  - Tradeoff: fewer built-ins than heavier frameworks; we wire routing/meta ourselves.
- Styling: Tailwind CSS
  - Why: fast iteration with utility tokens, consistent spacing/typography, tiny runtime.
  - Tradeoff: class-heavy markup and reliance on config; mitigated by small reusable components and clear tokens.
- Routing: TBD (single-page anchors vs `react-router-dom`)
  - Options: Anchors keep bundle smallest; router adds clean URLs and better semantics for separate pages.
  - Decision will be made during layout implementation; revisit here once chosen.

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
- React: lets us build UI from reusable components. React code is written in TSX (TypeScript + JSX syntax) and turns into efficient DOM updates in the browser.
- Tailwind CSS: a set of utility classes (e.g., `p-4`, `text-lg`) compiled to minimal CSS. We add classes in components; Tailwind generates only the CSS we use.
- Vite: the build tool. In dev, it serves files quickly with hot reload. For production, it bundles TS/React code, runs Tailwind to produce CSS, and outputs static files in `dist/`.
- Browser: receives the static HTML/CSS/JS from `dist/` and renders the site. No server code needed for MVP.

Data/content flow
- Source: TypeScript/TSX files define copy and data (projects, links) alongside components.
- Build: Vite compiles TypeScript -> JavaScript, processes React components, and runs Tailwind to emit CSS based on used classes.
- Output: static assets (HTML/JS/CSS/fonts/images) in `dist/`.
- Deploy: hosting serves the `dist/` folder over HTTPS; the browser downloads and renders it.

High-level diagram (build to browser)
```
TS/TSX + Tailwind classes + assets
          |
          v
      Vite build
    (TS -> JS, Tailwind -> CSS)
          |
          v
        dist/
   (static HTML/JS/CSS/assets)
          |
          v
  Hosting (CDN)
          |
          v
       Browser
```

## Decision log
- 2024-11-24: Framework → moved to Astro for static-first rendering with optional React islands; tradeoff is learning Astro’s file-based routing/content model but reduced shipped JS for static pages.
- 2024-11-24: Routing → multi-page site structure (now file-based in Astro) for distinct URLs and shared layout shell.
## Update hook
- For every implementation task, note any new findings or changes (e.g., routing choice, hosting decision, styling adjustments) here under the relevant section with date and rationale.
- When a decision changes, add a short entry under the affected bullet (e.g., “2024-11-23: Chose single-page anchors to keep bundle small; tradeoff is fewer distinct URLs.”).
