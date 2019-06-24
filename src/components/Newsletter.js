import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { rgba } from 'polished'
import addToMailchimp from 'gatsby-plugin-mailchimp'

import InputGroup from './ui/InputGroup'
import Button from './ui/Buttons'
import { devices } from '../theme'

const Msg = keyframes`
  100% {
    opacity: 1;
    transform: scaleY(1);
  }
`

const Form = styled.form`
  background-color: ${ props => (props.bgColor ? rgba('green', 0.05) : rgba(props.theme.color.pink, 0.05)) };
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
    right: 61px;
    top: calc(50% - 3px);

    @media (${ devices.tablet }) {
      right: 43px;
    }
  }
`

const Error = styled.div`
  color: ${ props => props.theme.color.pink };
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scaleY(0.9);
  transform-origin: bottom;
  animation: ${ Msg } 0.25s ease-out forwards;

  h4 {
    margin: 0;
    color: black;
  }

  span {
    margin-bottom: 1.2em;
  }

  button {
    position: relative;
    top: 0;
    right: 0;
  }
`

const Success = styled.div`
  animation: ${ Msg } 0.25s ease-out forwards;

  h4 {
    margin: 0;
  }

  span {
    color: green;
  }
`

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [res, setRes] = useState()

  useEffect(() => {
    if (res && res.result === 'error') {
      setEmail('')
    }
  }, [res])

  const handleSubmition = async e => {
    e.preventDefault()
    if (email.includes('@')) {
      const result = await addToMailchimp(email)
      await setRes(() => result)
    }
  }

  return (
    <Form
      bgColor={res && res.result === 'success'}
      onSubmit={e => handleSubmition(e)}
    >
      {res === undefined && (
        <InputGroup>
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Your Email"
            css={`
              margin-right: 1em;
            `}
          />
          <Button appearance="secondary">Sign Up</Button>
        </InputGroup>
      )}
      {res && res.result === 'error' && (
        <Error>
          <h4>Sorry about that :(</h4>
          <span>{res.msg}</span>
          <Button
            appearance="secondary"
            onClick={() => setRes()}
          >
            Try Again
          </Button>
        </Error>
      )}
      {res && res.result === 'success' && (
        <Success>
          <h4>Success</h4>
          <span>{res.msg}</span>
        </Success>
      )}
    </Form>
  )
}
export default Newsletter
