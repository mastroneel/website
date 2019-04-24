import React from 'react'

import SEO from '../components/seo'
import PageIntro from '../components/PageIntro'

import companies from '../images/companies.svg'
import news from '../images/news.svg'
import philosophy from '../images/philosophy.svg'
import about from '../images/about.svg'

export default ({ children, pageContext }) => {
  const { frontmatter } = pageContext
  const introImage = {
    companies: companies,
    news: news,
    philosophy: philosophy,
    about: about,
  }
  return (
    <>
      <SEO title={frontmatter.title} />
      <PageIntro
        small={frontmatter.subtitle}
        heading={frontmatter.title}
        paragraph={frontmatter.intro}
        image={{
          src: introImage[frontmatter.title.toLowerCase()],
          alt: `${ frontmatter.title } illustration`,
        }}
      />
      {children}
    </>
  )
}
