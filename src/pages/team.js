import React from 'react'
import { graphql, Link } from 'gatsby'

import { Container } from '../components/ui/Grid'
import SEO from '../components/seo'

export default ({ data }) => {
  const { edges: team } = data.team
  return (
    <>
      <SEO
        title="The Answers You Want to Know"
        description="These are some of the most frequent questions asked of us and our responses."
      />
      <Container>
        {team.map(member => (
          <Link to={member.node.fields.slug}>{member.node.frontmatter.title}</Link>
        ))}
      </Container>
    </>
  )
}

export const allTeamQuery = graphql`
  query {
    team: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/team/" } } }
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
