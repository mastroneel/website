import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rgba } from 'polished'

const Body = styled.span`
  position: relative;

  strong {
    background-color: ${ props => rgba(props.theme.color.pink, 0.2) };
    position: relative;
    top: -10px;
    font-size: 1.4rem;
    cursor: pointer;

    &::before {
      content: '[';
    }

    &::after {
      content: ']';
    }
  }
`

const Content = styled.span`
  width: 240px;
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translate(-50%, -100%);
  padding: 0.6em 1em;
  background-color: ${ props => props.theme.color.dark };
  color: #fff;
  font-size: 1.4rem;
  box-shadow: 0 4px 10px ${ props => rgba(props.theme.color.dark, 0.12) };
  border-radius: 8px;
  overflow-wrap: break-word;
  visibility: ${ props => (props.active ? 'visible' : 'hidden') };
  opacity: ${ props => (props.active ? '1' : '0') };
  transition: opacity 0.25s ease;

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -24px;
    transform: translateY(-50%);
    border: 8px solid ${ props => props.theme.color.dark };
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-left-color: transparent;
  }

  a {
    text-decoration: none;
    display: inline;

    ::after {
      display: none;
    }

    :hover {
      text-decoration: underline;
    }
  }
`

const Super = ({ href, content, children }) => {
  const [isActive, setIsActive] = useState(false)
  return (
    <Body>
      <strong onClick={() => setIsActive(!isActive)}>{children}</strong>
      <Content active={isActive}>
        {href ? <a href={content}>{content}</a> : <span dangerouslySetInnerHTML={{ __html: content }} />}
      </Content>
    </Body>
  )
}

Super.propTypes = {
  content: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default Super
