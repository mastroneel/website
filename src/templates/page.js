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
        <section id="one">
          <div className="inner">
            <header className="major">
              <h1>{frontmatter.title}</h1>
              <h2>{frontmatter.intro}</h2>
              <small>{frontmatter.date}</small>
              <div className="arrow-icon-wrapper">
                <a class="arrow-icon" href="" data-control-scrollto=".scrollto">
                  <img src={arrow}/>
                </a>
              </div>
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
