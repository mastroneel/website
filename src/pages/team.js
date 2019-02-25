import React from 'react'
import { graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import styled, { keyframes } from 'styled-components'
import { rgba } from 'polished'

import { Container, Row, Column } from '../components/ui/Grid'
import SEO from '../components/seo'
import arrow from '../images/arrow.svg'
import PageIntro from '../components/PageIntro'

import teamIllustration from '../images/team.svg'

const CardRow = styled(Row)`
  margin: 5em 0;
  padding: 5em 0;
  position: relative;

  &:nth-child(even) {
    .gatsby-image-wrapper {
      transform: translate(-2em);
    }

    background-color: ${ props => rgba(props.theme.color.dark, 0.02) };
  }

  h2 {
    color: ${ props => props.theme.color.pink };
    font-weight: 900;
    margin: 0;
    line-height: 1.2;
  }

  h5 {
    color: ${ props => props.theme.color.dark };
    font-weight: 900;
    margin: 0;
  }

  span {
    color: ${ props => props.theme.color.dark };
    font-weight: 700;
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    display: inline-block;
    margin-top: 2em;
    transition: all 0.15s ease;

    ::after {
      content: '⟶';
      transform: translateX(0.5em);
      display: inline-block;
      transition: transform 0.3s ease;
    }
  }

  a {
    text-decoration: none;
    transition: all 0.15s ease;

    :hover {
      span {
        color: ${ props => props.theme.color.pink };

        ::after {
          transform: translateX(1.5em);
        }
      }
    }
  }
`

const Title = styled(Column)`
  padding-top: 3em;
  transform: translateX(15%);
  z-index: 500;
`

export default ({ data }) => {
  const { edges: team } = data.team
  return (
    <>
      <SEO
        title="Our Team"
        description="With decades of experience in the world of startups and private placements"
      />
      <PageIntro
        small="Our Rockstars"
        heading="Our Team"
        paragraph="With decades of experience in the world of startups and private placements."
        image={{
          src: teamIllustration,
          alt: 'Team Illustration',
        }}
      />
      <Container>
        {team.map(member => {
          const { image, name, title } = member.node.frontmatter
          const { slug } = member.node.fields
          return (
            <CardRow
              grid={1 / 2}
              key={member.node.id}
            >
              <Title align="flex-end">
                <Link to={slug}>
                  <h2>{name}</h2>
                  <h5>{title}</h5>
                  <span>View Story</span>
                </Link>
              </Title>
              <Column>{image && <Image fluid={image.childImageSharp.fluid} />}</Column>
            </CardRow>
          )
        })}
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
            name
            title
            image {
              childImageSharp {
                fluid(maxWidth: 740, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
