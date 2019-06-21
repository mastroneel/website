import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'

import styled from 'styled-components'
import { rgba, lighten, darken } from 'polished'

import { Container, Row, Column } from '../components/ui/Grid'
import SEO from '../components/seo'
import Heading, { Underline } from '../components/ui/Heading'
import Button from '../components/ui/Buttons'
import theme, { devices } from '../theme'
import InputGroup from '../components/ui/InputGroup'

const Main = styled.div`
  text-align: center;
  max-width: 720px;
  margin: 2em auto;

  h1 {
    font-size: 7.2rem;
    line-height: 1.2;
  }

  p {
    font-size: 2.2rem;
  }

  strong {
    color: ${ props => props.theme.color.pink };
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 7px;
      background-color: ${ props => props.theme.color.pink };
    }
  }

  form {
    background-color: ${ props => rgba(props.theme.color.pink, 0.05) };
    padding: 2em;
    margin-top: 2em;
    position: relative;

    input {
      background-color: white;
      border-color: ${ props => props.theme.color.pink };
      color: ${ props => props.theme.color.blue };
    }

    label {
      color: ${ props => props.theme.color.blue };
      text-align: left;
    }

    button {
      position: absolute;
      right: 8.2%;
      top: calc(50% - 2px);
    }
  }
`

const Welcome = styled.div`
  background-color: ${ props => props.theme.color.blue };
  background: linear-gradient(
    ${ props => rgba(props.theme.color.blue, 0.93) },
    ${ props => rgba(props.theme.color.blue, 0.97) }
  );
  color: #fff;
  padding: 4em;
  margin-top: 5em;
  position: relative;
  box-shadow: 0 0 0 5px #fff;

  .gatsby-image-wrapper {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  h1 {
    font-size: 4.2rem;
  }

  strong {
    font-weight: 700;
    color: ${ props => props.theme.color.pink };
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    right: 0;
    border: 10px solid ${ props => rgba(props.theme.color.pink, 0.1) };
    transform: translate(1.8em, -1.8em);
    z-index: -1;
  }

  p {
    color: ${ props => lighten(0.6, props.theme.color.blue) };
    max-width: 60%;
    font-size: 2rem;
  }

  @media (${ devices.desktop }) {
    p {
      max-width: 100%;
    }
  }

  @media (${ devices.tablet }) {
    padding: 2em;

    h1 {
      font-size: 3.2rem;
    }

    p {
      font-size: 1.7rem;
    }

    ::after {
      display: none;
    }
  }
`

const LinkBlock = styled.div`
  display: inline-block;
  padding: 1.5em 2em;
  background-color: ${ props => props.bgColor };
  color: ${ props => props.theme.color.dark };
  text-decoration: none;
  font-weight: 700;
  transition: all 0.2s ease;
  box-shadow: 0 0 0 transparent;
  z-index: 1000;

  :hover {
    transform: translateY(-15%) scale(1.1);
    box-shadow: 0 4px 20px ${ props => rgba(darken(0.3, props.bgColor), 0.5) };

    h4::after {
      width: 100%;
      right: 0;
    }
  }

  h4 {
    ${ Underline }
    margin: 0;

    &::after {
      background-color: #fff;
      transition: width 0.2s ease;
    }
  }

  p {
    margin: 0;
    padding: 0.8em 0;
  }

  @media (${ devices.tablet }) {
    width: 100%;
  }
`

const Inner = styled.div`
  padding: 0.5em;

  @media (${ devices.desktopSm }) {
    margin: 0;
  }
`

function filterImage (imgArr, imgName) {
  if (Array.isArray(imgArr) && typeof imgName === 'string') {
    return imgArr
      .filter(image => image.node.name === imgName)
      .map((image, idx) => <Image
        key={idx}
        fluid={image.node.childImageSharp.fluid}
      />)
  } else {
    if (!Array.isArray(imgArr)) {
      console.error(`Expected graphql data array for ${ imgArr }, but received ${ typeof imgArr }`)
    }
    if (typeof imgName !== 'string') {
      console.error(`Expected string for ${ imgName } but received ${ typeof imgName }`)
    }
  }
}

const Index = ({ data }) => {
  const { edges: images } = data.images
  const { hero } = data

  return (
    <>
      <SEO
        title="Home"
        keywords={[
          `CTR`,
          `CTR Capital`,
          `CTR Venture Capital`,
          `Conscious Thought Revolution Venture Capital`,
          `Conscious Thought Revolution Capital`,
          `ctr.capital`,
          `Conscious Capital`,
          `Venture Capital raising human consciousness`,
          `social impact investing`,
          `impact investment fund`,
          `VC improving the world`,
          `How to invest in impact fund`,
        ]}
      />
      <Container
        css={`
          margin-top: ${ props => props.theme.spacing.xl };
          margin-bottom: ${ props => props.theme.spacing.lg };
        `}
      >
        <Row>
          <Column>
            <Main>
              <h1>
                We deploy capital to change the <strong>world</strong>
              </h1>
              <p>Want to know more, subscribe and we'll stay in touch</p>
              <form>
                <InputGroup>
                  <label htmlFor="email">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    css={`
                      margin-right: 1em;
                    `}
                  />
                  <Button appearance="secondary">Sign Up</Button>
                </InputGroup>
              </form>
            </Main>
          </Column>
        </Row>
        <Row>
          <Column>
            <Welcome>
              <Heading
                appearance="light"
                small="about"
              >
                Conscious Capital
              </Heading>
              <p>
                Financial capital that is raised, built, managed, and deployed strategically, for the purpose of raising
                {` `}
                <strong>human consciousness</strong> and expanding the scope of activities that can measurably improve
                {` `}
                <strong>world conditions</strong>. A way to change the world, live fulfilled through the impact you
                make, and earn returns which have been proven to {` `}
                <strong>outperform the status quo</strong>.
              </p>
              <Button
                as={Link}
                to="/philosophy"
                appearance="secondary"
              >
                Our Philosophy
              </Button>
              <Image fluid={hero.childImageSharp.fluid} />
            </Welcome>
          </Column>
        </Row>
      </Container>
      <Container
        css={`
          margin-bottom: ${ props => props.theme.spacing.lg };
        `}
      >
        <Row grid={1 / 2}>
          <Column>
            <Inner
              css={`
                margin-top: 3em;
                margin-left: 4em;
              `}
            >
              {filterImage(images, 'scenery')}
            </Inner>
            <Inner>
              <LinkBlock
                as={Link}
                bgColor={theme.color.yellow}
                to="/team"
              >
                <h4>Our Team</h4>
                <p>With decades of experience in the world of startups and private placements</p>
              </LinkBlock>
            </Inner>
            <Inner
              css={`
                margin-left: 9em;
              `}
            >
              {filterImage(images, 'office-boss')}
            </Inner>
            <Inner>
              <LinkBlock
                as={Link}
                bgColor={theme.color.dark}
                to="/about"
                css={`
                  color: #fff;
                  h4 {
                    &::after {
                      background-color: ${ props => props.theme.color.pink };
                    }
                  }
                `}
              >
                <h4>About CTR</h4>
                <p>Where we came from, how it started, where we're going and what we're doing</p>
              </LinkBlock>
            </Inner>
            <Inner
              css={`
                margin-left: 12em;
              `}
            >
              <LinkBlock
                as={Link}
                bgColor={theme.color.pink}
                to="/faq"
              >
                <h4>FAQ</h4>
                <p>These are some of the most frequent questions asked of us and our responses</p>
              </LinkBlock>
            </Inner>
          </Column>
          <Column>
            <Inner
              css={`
                margin-right: 4em;
              `}
            >
              <LinkBlock
                as={Link}
                bgColor={theme.color.pink}
                to="/philosophy"
              >
                <h4>Philosophy</h4>
                <p>
                  The way our minds work, what we’re currently thinking about, exploring and our continued revelations
                </p>
              </LinkBlock>
            </Inner>
            <Inner>{filterImage(images, 'office-people')}</Inner>
            <Inner>
              <LinkBlock
                as={Link}
                bgColor="#f2f2f2"
                to="/companies"
                css={`
                  h4 {
                    &::after {
                      background-color: ${ props => props.theme.color.pink };
                    }
                  }
                `}
              >
                <h4>Companies</h4>
                <p>The way we chose to invest</p>
              </LinkBlock>
            </Inner>
            <Inner
              css={`
                margin-right: 6em;
              `}
            >
              {filterImage(images, 'office-kitchen')}
            </Inner>
          </Column>
        </Row>
      </Container>
    </>
  )
}

export const ImageQuery = graphql`
  query {
    hero: file(relativePath: { eq: "office.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1348) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    images: allFile(filter: { relativeDirectory: { eq: "home" } }, sort: { order: DESC, fields: [changeTime] }) {
      edges {
        node {
          childImageSharp {
            fluid(maxWidth: 640) {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
  }
`
export default Index
