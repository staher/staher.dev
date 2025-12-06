import { useEffect, useState } from 'react'

const themes = ['dark', 'light'] as const
type Theme = (typeof themes)[number]

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'
  const stored = localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const initial = getInitialTheme()
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // ignore storage errors
    }
  }, [theme])

  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      className="btn btn-sm btn-outline"
      type="button"
      onClick={() => setTheme(nextTheme)}
      aria-label="Toggle color theme"
    >
      {nextTheme.charAt(0).toUpperCase() + nextTheme.slice(1)} mode
    </button>
  )
}

export default ThemeToggle
