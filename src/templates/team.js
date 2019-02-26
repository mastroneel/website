import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import { Container, Row, Column } from '../components/ui/Grid'
import SEO from '../components/seo'
import arrow from '../images/arrow.svg'

export default ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <SEO title={frontmatter.name} />
      <Container>
        <small>{frontmatter.title}</small>
        <h4>{frontmatter.name}</h4>
        <span className="image main">
          {frontmatter.image && <Image fluid={frontmatter.image.childImageSharp.fluid} />}
        </span>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
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
        image {
          childImageSharp {
            fluid(maxWidth: 740, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        linkedin
        angelco
        github
      }
    }
  }
`
