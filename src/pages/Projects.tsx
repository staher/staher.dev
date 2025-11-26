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

function Projects() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
          Projects
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-text">
          Recent work
        </h1>
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
              <h3 className="text-xl font-semibold text-text">{project.name}</h3>
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
    </div>
  )
}

export default Projects
