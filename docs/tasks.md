# Tasks & Backlog

Short tracker for implementation work. Update as tasks complete or priorities change.

## Now / next
- For each task, capture any decision changes in `docs/design.md` (date + rationale).
- Initialize project scaffold (Vite React+TS).
- Add Tailwind setup and base design tokens (colors, spacing, typography).
- Build layout shell (header/footer, container) and core sections: Home, About, Projects, Contact.
- Add data sources (projects/contact/résumé link) and wire to UI.
- Add lint/format/typecheck scripts; ensure `npm run build` works.
- Create favicon + social preview placeholder; set basic meta defaults.

## Upcoming
- Decide navigation style: single-page anchors vs multi-page routing; implement chosen approach.
- Choose fonts and finalize typography scale.
- Responsive tuning and accessibility pass (focus states, contrast, reduced motion).

## Follow-ups
- Dark mode theme: introduce CSS variables for colors, add toggle, and honor prefers-color-scheme.
- Hosting selection + deploy (GitHub Pages, Netlify, or Vercel), add CI build, and generate sitemap/robots once domain is set.
- Optional content pipeline improvements (Markdown/MDX, CMS later if desired).
