# Planning

Purpose: document product goals, scope, and approach for this personal site. Keep this updated as decisions change.

## Product goals
- Simple, fast, mostly static personal site to showcase who I am, projects, and contact info.
- Hands-on learning with modern front-end (TypeScript, React, Tailwind) and owning the build/deploy flow.
- Opinionated simplicity: minimal UI similar to jakegut.com; prioritize clarity, performance, and accessibility over features.

## Scope (MVP)
- Pages/sections: Home/hero, About, Projects, Contact (with résumé link).
- Static content; no auth, forms, or dynamic data.
- Assets: favicon, social preview image, résumé PDF.
- SEO basics: meaningful titles/meta per page/section, canonical URL, OG/Twitter defaults.

Out of scope for MVP
- Blog/posts and RSS.
- Analytics.
- Dark mode (planned follow-up).

## Technical stack
- Build: Vite + React + TypeScript (pure static output in `dist/`).
- Styling: Tailwind CSS with a small design token setup.
- Routing: either single-page with anchored sections or `react-router-dom` if multi-page URLs are desired (decide during implementation).
- Tooling: ESLint + Prettier; minimal dependencies otherwise.
- Content: hardcoded JSON/TS objects for projects/links; copy in TS/TSX for now (can move to Markdown/MDX later if needed).

## Non-functional priorities
- Performance: pre-rendered pages, minimal JS, optimized image sizes, no heavy dependencies.
- Accessibility: semantic HTML, focus-visible states, good contrast, respects reduced-motion.
- Responsiveness: works well on mobile and desktop; predictable spacing scale and max-width container.
- SEO: correct meta tags, canonical URL, Open Graph defaults, robots.txt/sitemap once hosting is set.

## Information architecture (initial)
- Top-level navigation: Home, About, Projects, Contact.
- Home: hero with name, tagline, primary CTA (email or résumé), quick link buttons.
- About: short story, highlights (skills/tech), maybe a concise timeline.
- Projects: cards with role, stack, description, outbound link.
- Contact: email, LinkedIn/GitHub, résumé download.

## Delivery phases (proposed)
1) Scaffold: Vite React+TS project, Tailwind config, base layout shell (header/footer), placeholder content.
2) Content + layout: implement sections, wire data objects for projects/links, responsive layout, typography scale.
3) Polish: SEO/meta helper, favicon/OG image, accessibility pass, basic lint/format scripts.
4) Follow-ups: dark mode theme switch, hosting setup + sitemap/robots, optional refactors (routing, content pipeline).

## Open decisions / notes
- Hosting: choose later (GitHub Pages, Netlify, Vercel all work for static output).
- Routing: anchored single-page vs multi-page with react-router; decide based on navigation preference after layout draft.
- Fonts: pick one or two families; avoid default system stack if possible while keeping performance in mind.
- Dark mode: defer; plan to use CSS variables so themes are easy to add.

## Decision log (current)
- Stack: Vite + React + TypeScript.
- Styling: Tailwind CSS.
- Dark mode: out of MVP; treat as first follow-up.
- Blog/analytics: not in MVP.
