import React from 'react'
import styled, { css } from 'styled-components'
import { lighten, linearGradient } from 'polished'

import Heading, { Underline } from '../components/ui/Heading'
import { Container, Row, Column } from '../components/ui/Grid'
import Contact from '../components/Contact'
import theme, { devices } from '../theme'

import FooterIll from '../images/footer_ill.svg'

const FooterStyle = styled.footer`
  background-color: ${ props => props.theme.color.dark };
`

const bgShape = css`
  background-image: url(${ FooterIll });
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: contain;
`

const topBorder = css`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    ${ linearGradient({
    colorStops: [theme.color.blue, theme.color.pink],
    toDirection: '90deg',
    fallback: props => props.theme.color.pink,
  }) }
  }
`

const FooterCell = styled.div`
  background-color: ${ props => lighten(0.015, props.theme.color.dark) };
  padding: 4em;
  color: #fff;
  height: 100%;

  h5 {
    margin-bottom: 1.5em;
    ${ Underline }
    display: block;
  }

  a {
    color: #fff;
    border-bottom: 1px dotted;
    text-decoration: none;
    transition: color 0.2s ease-in-out, border-bottom-color 0.2s ease-in-out;
  }

  a:hover {
    border-bottom-color: transparent;
    color: ${ props => props.theme.color.pink };
  }

  @media (${ devices.tablet }) {
    padding: 2em;
  }
`

const Footer = () => (
  <FooterStyle>
    <Container>
      <Row
        grid={1 / 2}
        css={bgShape}
      >
        <Column>
          <Contact />
        </Column>
      </Row>
      <Row
        grid={1 / 3}
        css={topBorder}
      >
        <Column>
          <FooterCell>
            <Heading
              appearance="light"
              level="h5"
            >
              Email
            </Heading>
            <a href="mailto:social@ctr.capital">social@ctr.capital</a>
          </FooterCell>
        </Column>
        <Column>
          <FooterCell>
            <Heading
              appearance="light"
              level="h5"
            >
              Phone
            </Heading>
            <span>+1 778 785 6800 (Canada)</span>
            <br />
            <span>+1 909 345 6800 (United States)</span>
          </FooterCell>
        </Column>
        <Column>
          <FooterCell>
            <Heading
              appearance="light"
              level="h5"
            >
              Address
            </Heading>
            <span>
              612 View Street 6th Floor
              <br />
              Victoria, BC V8W 1J5
              <br />
              Canada
            </span>
          </FooterCell>
        </Column>
      </Row>
    </Container>
  </FooterStyle>
)

export default Footer
