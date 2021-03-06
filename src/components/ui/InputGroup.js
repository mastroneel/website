import React from 'react'
import styled from 'styled-components'
import { lighten } from 'polished'
import { devices } from '../../theme'

const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  input,
  textarea {
    background-color: ${ props => props.theme.color.dark };
    color: ${ props => lighten(0.3, props.theme.color.grey) };
    padding: 0.8em 1.2em;
    border-style: solid;
    border-width: 3px;
    border-color: ${ props => props.theme.color.blue };

    :focus {
      border-color: ${ props => props.theme.color.pink };
    }

    @media (${ devices.tablet }) {
      margin-right: 0;
    }
  }

  label {
    font-size: 1.4rem;
    font-weight: 700;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1.4px;
    margin-bottom: 1em;
  }
`

export default ({ children }) => <InputGroup>{children}</InputGroup>
