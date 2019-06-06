import React from 'react'
import { graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'

import { Container, Row, Column } from '../components/ui/Grid'
import SEO from '../components/seo'
import PageIntro from '../components/PageIntro'
import theme, { devices } from '../theme'

import teamIllustration from '../images/team.svg'

const CardRow = styled(Row)`
  margin: 5em 0;
  padding: 5em 0;
  position: relative;

  @media (min-width: ${ theme.breakpoints.md }) {
    &:nth-child(even) {
      .gatsby-image-wrapper {
        transform: translate(-2em);
      }

      background-color: ${ props => rgba(props.theme.color.dark, 0.02) };
    }
  }

  h2 {
    color: ${ props => props.theme.color.pink };
    font-weight: 900;
    margin: 0;
    line-height: 1.2;
    font-size: 4.8rem;
    transition: text-shadow 0.25s ease;
  }

  h4 {
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
    position: relative;

    &::before {
      content: '';
      position: absolute;
      bottom: -3px;
      height: 1px;
      width: 100%;
      background-color: ${ props => props.theme.color.dark };
      transition: transform 0.3s ease;
      transform-origin: left;
      transform: scaleX(1);
    }

    &::after {
      content: '⟶';
      position: absolute;
      right: 0;
      transform: translateX(2em);
      display: inline-block;
      transition: transform 0.3s ease;
    }
  }

  a {
    text-decoration: none;
    transition: all 0.15s ease;

    :hover {
      h2 {
        text-shadow: 0 7px 20px ${ props => rgba(props.theme.color.pink, 0.4) };
      }

      span {
        color: ${ props => props.theme.color.pink };

        &::before {
          background-color: ${ props => props.theme.color.pink };
          transform: scaleX(0);
        }

        &::after {
          transform: translateX(3em);
        }
      }
    }
  }

  @media (${ devices.desktopSm }) {
    overflow: hidden;
  }

  @media (${ devices.tablet }) {
    margin: 0;
    padding: 0;
    margin-top: 2em;
  }
`

const Dots = css`
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    background-image: radial-gradient(${ props => props.theme.color.pink } 25%, transparent 25%);
    background-size: 20px 20px;
    width: 140px;
    height: 140px;
  }

  &::before {
    bottom: -60px;
    left: -60px;
  }

  &::after {
    top: -60px;
    right: -60px;
  }

  @media (${ devices.mobile }) {
    &::before,
    &::after {
      display: none;
    }
  }
`

const Title = styled(Column)`
  padding-top: 3em;
  transform: translateX(2.5em);
  z-index: 500;

  @media (${ devices.tablet }) {
    margin-bottom: 2em;
    transform: translateX(0);
    align-items: flex-start;
  }
`

export default ({ data }) => {
  const { edges: team } = data.team
  return (
    <>
      <SEO
        title="Our Team"
        description="With decades of experience in the world of startups and private placements."
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
              align="center"
              key={member.node.id}
            >
              <Title align="flex-end">
                <Link to={slug}>
                  <h2>{name}</h2>
                  <h4>{title}</h4>
                  <span>View Story</span>
                </Link>
              </Title>
              <Column css={Dots}>{image && <Image fluid={image.childImageSharp.fluid} />}</Column>
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
      sort: { order: ASC, fields: [frontmatter___order] }
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
                fluid(maxWidth: 570, quality: 100) {
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
