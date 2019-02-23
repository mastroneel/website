import React from 'react'
import styled from 'styled-components'

import Heading from './ui/Heading'
import { Container, Row, Column } from './ui/Grid'
import Button from './ui/Buttons'
import InputGroup from './ui/InputGroup'

const FormArea = styled.div`
  padding-top: 4em;
  padding-bottom: 4em;
`

const Contact = () => (
  <FormArea>
    <Container size="fluid">
      <Row>
        <Column>
          <Heading
            small="Contact Us"
            level="h3"
          >
            Don't be a stranger
          </Heading>
        </Column>
      </Row>
      <Row>
        <Column>
          <form
            name="contact"
            method="POST"
            data-netlify-recaptcha="true"
            data-netlify="true"
            style={{ marginRight: '2em' }}
          >
            <Row
              grid={1 / 2}
              style={{ marginBottom: '2em' }}
            >
              <Column>
                <InputGroup>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    style={{ marginRight: '1em' }}
                  />
                </InputGroup>
              </Column>
              <Column>
                <InputGroup>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your.name@email.com"
                  />
                </InputGroup>
              </Column>
            </Row>
            <Row>
              <Column>
                <InputGroup>
                  <label htmlFor="message">Leave a Message</label>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="We will get back to you as soon as possible"
                  />
                </InputGroup>
                <div data-netlify-recaptcha="true" />
              </Column>
            </Row>
            <Row>
              <Column
                align="flex-start"
                style={{ marginTop: '2em' }}
              >
                <Button
                  appearance="secondary"
                  type="submit"
                >
                  Send
                </Button>
              </Column>
            </Row>
          </form>
        </Column>
      </Row>
    </Container>
  </FormArea>
)

export default Contact
