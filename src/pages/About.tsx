function About() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
          About
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-text">
          Who I am
        </h1>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-border bg-surface p-6 shadow-card">
          <h2 className="text-lg font-semibold text-text">Background</h2>
          <p className="mt-3 text-base text-muted">
            I enjoy building calm, purposeful experiences. I care about
            performance, accessibility, and keeping interfaces predictable.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-surface p-6 shadow-card">
          <h2 className="text-lg font-semibold text-text">Focus areas</h2>
          <p className="mt-3 text-base text-muted">
            TypeScript, React, Node, and lean build pipelines. I like simple
            stacks that are easy to reason about and maintain.
          </p>
        </div>
      </div>
      <div className="rounded-2xl border border-border bg-surface p-6 shadow-card">
        <h2 className="text-lg font-semibold text-text">Skills</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2">
          {['TypeScript & React', 'Node & APIs', 'CSS & Tailwind', 'Accessibility & performance'].map((skill) => (
            <li key={skill} className="text-base text-muted">
              • {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default About
