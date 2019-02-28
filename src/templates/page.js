import React from 'react'
import { graphql } from 'gatsby'

import { Container, Row, Column } from '../components/ui/Grid'
import SEO from '../components/seo'
import PageIntro from '../components/PageIntro'

export default ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  return (
    <>
      <SEO title={frontmatter.title} />
      <PageIntro
        small={frontmatter.subtitle}
        heading={frontmatter.title}
        paragraph={frontmatter.intro}
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
        title
        intro
        subtitle
        imageSource
      }
    }
  }
`
