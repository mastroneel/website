import React from 'react'
import styled from 'styled-components'

import Heading from './ui/Heading'
import { Container, Row, Column } from './ui/Grid'
import Button from './ui/Buttons'
import InputGroup from './ui/InputGroup'
import { devices } from '../theme'

const FormArea = styled.div`
  padding-top: 4em;
  padding-bottom: 4em;

  @media (${ devices.tablet }) {
    padding: 0;
    margin: 0 -2em;
  }
`

const Contact = () => (
  <FormArea>
    <Container size="fluid">
      <Row>
        <Column>
          <Heading
            small="Contact Us"
            level="h4"
            appearance="light"
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
            data-netlify="true"
            action="/success/"
            netlify-honeypot="bot-field"
            css={`
              margin-right: 2em;

              @media (${ devices.tablet }) {
                margin-right: 0;
              }
            `}
          >
            <input
              type="hidden"
              name="form-name"
              value="contact"
            />
            <Row
              grid={1 / 2}
              style={{ marginBottom: '2em' }}
            >
              <Column>
                <div
                  css={`
                    display: none;
                  `}
                >
                  <label>
                    <input name="bot-field" />
                  </label>
                </div>
                <InputGroup>
                  <label htmlFor="name">Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    css={`
                      margin-right: 1em;
                    `}
                  />
                </InputGroup>
              </Column>
              <Column>
                <InputGroup>
                  <label htmlFor="email">Email Address</label>
                  <input
                    required
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
                    required
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
