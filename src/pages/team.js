import React from 'react'
import { graphql, Link } from 'gatsby'

import { Container } from '../components/ui/Grid'
import SEO from '../components/seo'
import arrow from '../images/arrow.svg'

export default ({ data }) => {
  const { edges: team } = data.team
  return (
    <>
      <SEO
        title="The Answers You Want to Know"
        description="These are some of the most frequent questions asked of us and our responses."
      />
      <section id="one">
        <div className="inner">
          <header className="major">
            <h1>Our Rockstar Team</h1>
            <h2>With decades of experience in the world of startups and private placements.</h2>
            <div className="arrow-icon-wrapper">
              <a
                class="arrow-icon"
                href=""
                data-control-scrollto=".scrollto"
              >
                <img src={arrow} />
              </a>
            </div>
          </header>
          <span className="image main" />
          <div className="team">
            <Container>
              {team.map(member => (
                <Link to={member.node.fields.slug}>{member.node.frontmatter.name}</Link>
              ))}
            </Container>
          </div>
        </div>
      </section>
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
            name
            title
            image
          }
        }
      }
    }
  }
`
