import { Link, NavLink, Outlet } from 'react-router-dom'
import { links, navItems } from './data/nav'

function App() {
  return (
    <div className="min-h-screen bg-base text-text">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 py-10 sm:px-6 lg:px-8">
        <header className="flex flex-col gap-6 pb-10 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link to="/" className="text-xl font-semibold tracking-tight">
              Staher.dev
            </Link>
            <p className="text-sm text-muted">
              Building thoughtful, minimal web experiences.
            </p>
          </div>
          <nav className="flex flex-wrap gap-3 text-sm font-semibold text-muted">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    'rounded-full border border-border px-3 py-2 transition hover:-translate-y-[1px] hover:bg-white hover:shadow-sm',
                    isActive ? 'text-text bg-white shadow-sm' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </header>

        <main className="flex-1 pb-16">
          <Outlet />
        </main>

        <footer className="border-t border-border pt-6 text-sm text-muted">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Staher.dev</span>
            <div className="flex flex-wrap gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  className="rounded-full border border-border px-3 py-2 transition hover:-translate-y-[1px] hover:bg-white hover:shadow-sm"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
