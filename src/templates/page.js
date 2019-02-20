import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'

export default ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  return (
    <>
      <SEO title={frontmatter.title} />
      {frontmatter.title}
      {frontmatter.intro}
      <div
        id="main"
        className="alt"
      >
        <section id="one">
          <div className="inner">
            <header className="major">
              <small>{frontmatter.date}</small>
            </header>
            <span className="image main" />
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </section>
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        intro
      }
    }
  }
`
