import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead'

const highlights = [
  {
    title: 'About',
    copy: 'Building purposeful, minimal sites that stay fast and accessible.',
    to: '/about',
  },
  {
    title: 'Projects',
    copy: 'Selected work with short outcomes. More case studies coming soon.',
    to: '/projects',
  },
]

function Home() {
  return (
    <div className="flex flex-col gap-12">
      <PageHead
        title="Home"
        description="Taher’s personal site: building thoughtful, fast, minimal web experiences with TypeScript and React."
      />
      <section className="flex flex-col gap-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
          Staher.dev
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-text sm:text-5xl">
          Building thoughtful products with clear, fast, minimal web UIs.
        </h1>
        <p className="max-w-3xl text-lg text-muted">
          I’m Taher, a developer focused on simple, reliable experiences. This
          site shares my work, background, and ways to reach me.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition hover:translate-y-[-1px] hover:shadow-md"
            href="mailto:hello@staher.dev"
          >
            Email me
          </a>
          <Link
            className="rounded-full border border-border px-4 py-2 text-sm font-semibold text-text transition hover:-translate-y-[1px] hover:bg-white hover:shadow-sm"
            to="/projects"
          >
            View projects
          </Link>
        </div>
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        {highlights.map((item) => (
          <Link
            key={item.title}
            to={item.to}
            className="group rounded-2xl border border-border bg-surface p-6 shadow-card transition hover:-translate-y-[2px] hover:shadow-lg"
          >
            <p className="text-sm font-semibold text-muted">{item.title}</p>
            <h2 className="mt-3 text-2xl font-semibold text-text">{item.title}</h2>
            <p className="mt-3 text-base text-muted">{item.copy}</p>
            <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent transition group-hover:translate-x-[2px]">
              Go to {item.title}
              <span aria-hidden>→</span>
            </span>
          </Link>
        ))}
      </section>
    </div>
  )
}

export default Home
