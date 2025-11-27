import { Link } from 'react-router-dom'
import PageHead from '../components/PageHead'

function NotFound() {
  return (
    <div className="flex flex-col gap-4">
      <PageHead title="Page not found" description="The page you requested could not be found." />
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
        404
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-text">
        Page not found
      </h1>
      <p className="max-w-2xl text-base text-muted">
        The page you’re looking for doesn’t exist. It might have been moved or the URL could be incorrect.
      </p>
      <Link
        to="/"
        className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition hover:translate-y-[-1px] hover:shadow-md"
      >
        Go home
        <span aria-hidden>→</span>
      </Link>
    </div>
  )
}

export default NotFound
