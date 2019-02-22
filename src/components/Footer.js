import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'

import Heading from '../components/ui/Heading'
import { Container, Row, Column } from '../components/ui/Grid'
import Contact from '../components/Contact'

const FooterStyle = styled.footer`
  background-color: ${ props => props.theme.color.dark };
  /* padding-top: 4em;
  padding-bottom: 4em; */
  margin-top: 2em;
`

const FooterCell = styled.div`
  background-color: ${ props => lighten(0.015, props.theme.color.dark) };
  padding: 4em;
  color: #fff;

  h3 {
    text-transform: initial;
    letter-spacing: 1.5px;
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
                <Heading level="h3">Email</Heading>
              </FooterCell>
            </Column>
            <Column>
              <FooterCell>
                <Heading level="h3">Phone</Heading>
              </FooterCell>
            </Column>
            <Column>
              <FooterCell>
                <Heading level="h3">Address</Heading>
              </FooterCell>
            </Column>
          </Row>
        </Column>
      </Row>
    </Container>
  </FooterStyle>
)

export default Footer
