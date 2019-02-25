import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'

import styled from 'styled-components'
import { rgba, lighten } from 'polished'

import { Container, Row, Column } from '../components/ui/Grid'
import SEO from '../components/seo'
import Heading from '../components/ui/Heading'
import Button from '../components/ui/Buttons'

const Welcome = styled.div`
  background-color: ${ props => props.theme.color.blue };
  background: linear-gradient(
    ${ props => rgba(props.theme.color.blue, 0.93) },
    ${ props => rgba(props.theme.color.blue, 0.97) }
  );
  color: #fff;
  margin-top: 8em;
  padding: 4em;
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
`

const Index = ({ data }) => (
  <>
    <SEO
      title="Home"
      keywords={[`gatsby`, `application`, `react`]}
    />
    <Container>
      <Row>
        <Column>
          <Welcome>
            <Heading small="about">Conscious Capital</Heading>
            <p>
              Financial capital that is raised, built, managed, and deployed strategically, for the purpose of raising
              {` `}
              <strong>human consciousness</strong> and expanding the scope of activities that can measurably improve
              {` `}
              <strong>world conditions</strong>. A way to change the world, live fulfilled through the impact you make,
              and earn returns which have been proven to {` `}
              <strong>outperform the status quo</strong>.
            </p>
            <Button
              as={Link}
              to="/philosophy"
              appearance="secondary"
            >
              Our Philosophy
            </Button>
            <Image fluid={data.image.childImageSharp.fluid} />
          </Welcome>
        </Column>
      </Row>
    </Container>
  </>
)

export const ImageQuery = graphql`
  query {
    image: file(relativePath: { eq: "office.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1348) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export default Index
