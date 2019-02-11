import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/SEO'
import BannerLanding from '../components/BannerLanding'

export default ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <BannerLanding
        name={frontmatter.title}
        intro={frontmatter.intro}
      />
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
    </Layout>
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
