import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'

import Heading from '../components/ui/Heading'
import { Container, Row, Column } from '../components/ui/Grid'
import Contact from '../components/Contact'

const FooterStyle = styled.footer`
  background-color: ${ props => props.theme.color.dark };
`

const FooterCell = styled.div`
  background-color: ${ props => lighten(0.015, props.theme.color.dark) };
  padding: 4em;
  color: #fff;

  h3 {
    text-transform: initial;
    letter-spacing: 1.5px;
  }
  h5 {
    margin-bottom: 0.5em;
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
`

const Footer = () => (
  <FooterStyle>
    <Container>
      <Row grid={1 / 2}>
        <Column>
          <Contact />
        </Column>
        <Column>
          <Row dir="column">
            <Column>
              <FooterCell>
                <Heading
                  appearance="light"
                  level="h5"
                >
                  Email
                </Heading>
                <a href="#">fund@ctr.capital</a>
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
        </Column>
      </Row>
    </Container>
  </FooterStyle>
)

export default Footer
