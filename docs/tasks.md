# Tasks & Backlog

Short tracker for implementation work. Update as tasks complete or priorities change.

## Now / next
- For each task, capture any decision changes in `docs/design.md` (date + rationale).
- Migrate to Astro (static-first) with Tailwind; add React islands only where needed.
- Recreate layout shell and pages (Home, About, Projects, Contact) in Astro.
- Verify build (`npm run build`) and adjust README accordingly.
- Decide on theming approach (Tailwind tokens vs DaisyUI vs Radix) and add dark mode plan.
- Add data sources (projects/contact/résumé link) and wire to UI.
- Create favicon + social preview placeholder; set basic meta defaults.

## Upcoming
- Decide navigation style: single-page anchors vs multi-page routing; implement chosen approach.
- Choose fonts and finalize typography scale.
- Responsive tuning and accessibility pass (focus states, contrast, reduced motion).

## Follow-ups
- Dark mode theme: introduce CSS variables for colors, add toggle, and honor prefers-color-scheme.
- Hosting selection + deploy (GitHub Pages, Netlify, or Vercel), add CI build, and generate sitemap/robots once domain is set.
- Optional content pipeline improvements (Markdown/MDX, CMS later if desired).
