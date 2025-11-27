import { links } from '../data/nav'
import PageHead from '../components/PageHead'

function Contact() {
  return (
    <div className="flex flex-col gap-6">
      <PageHead
        title="Contact"
        description="Get in touch with Taher via email or social links. Collaboration and conversations welcome."
      />
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">
          Contact
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-text">
          Say hello
        </h1>
        <p className="mt-2 max-w-2xl text-base text-muted">
          Want to collaborate or chat? Reach out via email or find me on the
          platforms below. I’ll add a résumé link here soon.
        </p>
      </div>
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
    </div>
  )
}

export default Contact
