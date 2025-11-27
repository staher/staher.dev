import { useEffect } from 'react'

type PageHeadProps = {
  title: string
  description?: string
}

const SITE_NAME = 'Staher.dev'

function PageHead({ title, description }: PageHeadProps) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`
    document.title = fullTitle

    if (description) {
      let meta = document.querySelector('meta[name="description"]')
      if (!meta) {
        meta = document.createElement('meta')
        meta.setAttribute('name', 'description')
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', description)
    }
  }, [title, description])

  return null
}

export default PageHead
