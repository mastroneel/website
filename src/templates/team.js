import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import arrow from '../images/arrow.svg'

export default ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <SEO title={frontmatter.title} />
      <div
        id="main"
        className="alt"
      >
        {console.log(data)}
        <section id="one">
          <div className="inner">
            <header className="individual">
              <h1>{frontmatter.name}</h1>
              <h2>{frontmatter.title}</h2>
              <small>{frontmatter.image}</small>
            </header>
            <span className="image main" />
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </section>
      </div>
    </>
  )
}

export const teamQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        name
        title
        image
      }
    }
  }
`
