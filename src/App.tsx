const projects = [
  {
    name: 'Project One',
    summary: 'Short description of what you built and why it mattered.',
    tech: ['TypeScript', 'React', 'Vite'],
    link: '#',
  },
  {
    name: 'Project Two',
    summary: 'Another project highlight with a concise outcome statement.',
    tech: ['Node', 'Express', 'PostgreSQL'],
    link: '#',
  },
]

const links = [
  { label: 'Email', href: 'mailto:hello@staher.dev' },
  { label: 'GitHub', href: 'https://github.com/staher' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com' },
]

function App() {
  return (
    <div className="min-h-screen bg-base text-text">
      <main className="mx-auto flex max-w-4xl flex-col gap-16 px-4 py-16">
        <header className="flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Staher.dev
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl">
            Building thoughtful products with clear, fast, minimal web UIs.
          </h1>
          <p className="max-w-2xl text-lg text-muted">
            I’m Taher, a developer focused on simple, reliable experiences. This
            site will share my work, projects, and ways to get in touch.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition hover:translate-y-[-1px] hover:shadow-md"
              href="mailto:hello@staher.dev"
            >
              Email me
            </a>
            <a
              className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-text transition hover:-translate-y-[1px] hover:bg-white hover:shadow-sm"
              href="#projects"
            >
              View projects
            </a>
          </div>
        </header>

        <section className="grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-card">
            <p className="text-sm font-semibold text-muted">About</p>
            <h2 className="mt-3 text-2xl font-semibold text-text">
              Who I am
            </h2>
            <p className="mt-3 text-base text-muted">
              I like building purposeful, minimal sites. I care about
              performance, accessibility, and keeping interfaces calm.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-card">
            <p className="text-sm font-semibold text-muted">Focus</p>
            <h2 className="mt-3 text-2xl font-semibold text-text">
              What I work with
            </h2>
            <p className="mt-3 text-base text-muted">
              TypeScript, React, Node, and clean build pipelines. I like simple
              stacks that are easy to reason about and maintain.
            </p>
          </div>
        </section>

        <section id="projects" className="flex flex-col gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
              Projects
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-text">
              Recent work
            </h2>
            <p className="mt-2 max-w-2xl text-base text-muted">
              A few highlights. I’ll keep this list updated as I add more case
              studies.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group rounded-2xl border border-border bg-surface p-6 shadow-card transition hover:-translate-y-[2px] hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-xl font-semibold text-text">
                    {project.name}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                    Case
                  </span>
                </div>
                <p className="mt-3 text-base text-muted">{project.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent transition group-hover:translate-x-[2px]"
                  href={project.link}
                >
                  View project
                  <span aria-hidden>→</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-6 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
            Contact
          </p>
          <h2 className="text-3xl font-semibold text-text">Say hello</h2>
          <p className="max-w-2xl text-base text-muted">
            Want to collaborate or chat? Reach out via email or find me on the
            platforms below. I’ll add a résumé link here soon.
          </p>
          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-text transition hover:-translate-y-[1px] hover:bg-white hover:shadow-sm"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
