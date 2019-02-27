import React from 'react'
import { graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import { rgba, lighten } from 'polished'

import { Container, Row, Column } from '../components/ui/Grid'
import SEO from '../components/seo'

import angel from '../images/social/angellist.svg'
import github from '../images/social/github.svg'
import linkedin from '../images/social/linkedin.svg'
import prev from '../images/chevron-left.svg'
import next from '../images/chevron-right.svg'

const avatarSize = {
  x: '140px',
  y: '144px',
}

const socialIcon = {
  angelco: angel,
  linkedin: linkedin,
  github: github,
}

const BlownUp = styled.div`
  width: 100%;
  height: 420px;
  overflow: hidden;

  .gatsby-image-wrapper {
    filter: blur(50px);

    & > div {
      padding-bottom: 40%;
    }
  }

  img {
  }
`

const Article = styled.article`
  max-width: 980px;
  padding: 0 4em;
  margin: 0 auto;
  background-color: #fff;
  transform: translateY(-8em);

  h2 {
    font-weight: 900;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -4px;
      background-color: ${ props => props.theme.color.pink };
      width: 30%;
      height: 4px;
    }
  }
`

const Avatar = styled.div`
  position: absolute;
  top: -70px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0 8.5px ${ props => rgba(props.theme.color.dark, 0.12) };
  border-radius: 200px;
  width: ${ avatarSize.x };
  height: ${ avatarSize.y };

  img {
    border-radius: 200px;
  }
`

const Ring = styled.div`
  position: absolute;
  top: -70px;
  left: 50%;
  transform: translate(-50%, -8em);
  width: ${ avatarSize.x };
  height: ${ avatarSize.y };
  border-radius: 200px;
  box-shadow: 0 0 0 8.5px ${ props => props.theme.color.pink };
`

const Profile = styled.div`
  text-align: center;
  transform: translateY(4em);
  padding: 1.2em 0;
  margin-bottom: 3em;

  h1 {
    margin: 0;
    font-size: 2.4rem;
    font-weight: 900;
    color: ${ props => props.theme.color.pink };
  }

  span {
    font-weight: 900;
  }
`

const Social = styled.div`
  margin: 1.2em 0;
`

const SocialLink = styled.a`
  text-decoration: none;
  text-transform: capitalize;
  position: relative;
  color: ${ props => props.theme.color.dark };
  margin: 0 0.7em;
  opacity: 0.7;
  transition: opacity 0.2s ease;

  &::before {
    content: '';
    display: inline-block;
    background-image: url(${ props => socialIcon[props.icon] });
    background-repeat: no-repeat;
    width: 20px;
    height: 20px;
    margin-right: 4px;
    position: relative;
    top: 3px;
  }

  :hover {
    opacity: 1;
  }
`

const Pagination = styled(Row)`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;

  ${ Column } {
    padding: 1.2em;

    a {
      display: inline-block;
      position: relative;
      padding: 1.2em;
      text-decoration: none;
      transition: background-color 0.25s ease;

      :hover {
        background-color: ${ props => lighten(0.375, props.theme.color.pink) };

        &::after {
          opacity: 0.5;
        }

        span {
          opacity: 1;
          transform: translateX(0);
        }
      }

      span {
        opacity: 0;
        display: inline-block;
        font-weight: 700;
        color: ${ props => props.theme.color.pink };
        transition: opacity, transform 0.2s ease;
      }

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        background-size: 42px 42px;
        width: 42px;
        height: 42px;
        background-repeat: no-repeat;
        transform: translateY(-50%);
        opacity: 0.12;
        transition: opacity 0.25s ease;
      }
    }
  }
`

const Next = styled(Column)`
  a {
    &::after {
      right: 0;
      background-image: url(${ next });
    }
  }

  span {
    transform: translateX(0.5em);
    margin-right: 1.2em;
  }
`

const Prev = styled(Column)`
  a {
    &::after {
      left: 0;
      background-image: url(${ prev });
    }
  }

  span {
    transform: translateX(-0.5em);
    margin-left: 1.2em;
  }
`

export default ({ data, pageContext }) => {
  const { markdownRemark } = data
  const {
    frontmatter: { name, image, social, avatar, title },
    html,
  } = markdownRemark

  const { next, prev } = pageContext
  return (
    <>
      <SEO title={name} />
      <BlownUp>{image && <Image fluid={image.childImageSharp.fluid} />}</BlownUp>
      <Container
        size="lg"
        style={{ position: 'relative' }}
      >
        <Ring />
        <Article>
          <Avatar>{avatar && <Image fixed={avatar.childImageSharp.fixed} />}</Avatar>
          <Pagination grid={1 / 2}>
            <Prev align="flex-start">
              {prev && (
                <Link to={prev.fields.slug}>
                  <span>{prev.frontmatter.name}</span>
                </Link>
              )}
            </Prev>
            <Next align="flex-end">
              {next && (
                <Link to={next.fields.slug}>
                  <span>{next.frontmatter.name}</span>
                </Link>
              )}
            </Next>
          </Pagination>
          <Profile>
            <h1>{name}</h1>
            <span>{title}</span>
            <Social>
              {social &&
                social.map(site =>
                  Object.keys(site)
                    .filter(link => site[link] !== null && site[link].length > 0)
                    .map((link, idx) => (
                      <SocialLink
                        key={idx}
                        href={site[link]}
                        target="_blank"
                        rel="nofollow noopener"
                        icon={link}
                      >
                        {link}
                      </SocialLink>
                    ))
                )}
            </Social>
          </Profile>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Article>
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
            fluid(maxWidth: 740, quality: 50) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        avatar {
          childImageSharp {
            fixed(width: 140, height: 144, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        social {
          linkedin
          angelco
          github
        }
      }
    }
  }
`
