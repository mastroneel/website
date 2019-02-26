import React from 'react'
import { graphql } from 'gatsby'

import { Container, Row, Column } from '../components/ui/Grid'
import SEO from '../components/seo'
import arrow from '../images/arrow.svg'
import PageIntro from '../components/PageIntro'

export default ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  return (
    <>
      <SEO title={frontmatter.title} />
      {console.log(frontmatter.image)}
      <PageIntro
        small={frontmatter.subtitle}
        heading={frontmatter.title}
        paragraph={frontmatter.intro}
        image={{
          src: 'static/team-c1f9ff52629c475b6dc5196b5265034f.svg',
          alt: 'Image',
        }}
      />
      <Container size="md">
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
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
        subtitle
        imageSource
      }
    }
  }
`
