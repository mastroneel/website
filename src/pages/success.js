import React from 'react'
import styled from 'styled-components'
import SEO from '../components/seo'
import { Container, Row, Column } from '../components/ui/Grid'
import success from '../images/success.svg'

const Success = () => (
  <>
    <SEO title="Your message has been received" />
    <Container
      css={`
        padding: 5em 0;
      `}
    >
      <Row dir="column">
        <Column>
          <img
            src={success}
            alt="Success illustration"
            css={`
              max-width: 430px;
              margin: 0 auto;
              position: relative;
              left: 4em;
            `}
          />
        </Column>
        <Column
          align="center"
          justify="center"
        >
          <h2>Thank you for contacting us!</h2>
          <p>We'll get back to you in a reasonable timeframe.</p>
        </Column>
      </Row>
    </Container>
  </>
)

export default Success
