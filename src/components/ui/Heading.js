import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Underline = css`
  font-weight: 900;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    background-color: ${ props => props.theme.color.pink };
    width: 30%;
    height: 4px;
  }
`

const Small = styled.small`
  text-transform: uppercase;
  color: ${ props => props.theme.color.pink };
  letter-spacing: 1.5px;
  font-weight: 700;
`

const Header = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 3px;
  color: ${ props => (props.appearance === 'light' ? '#fff' : props.theme.color.dark) };
  margin-top: 0;
`

const Heading = ({ small, level, children, appearance }) => (
  <>
    {small && <Small>{small}</Small>}
    <Header
      as={level || 'h1'}
      appearance={appearance || 'dark'}
    >
      {children}
    </Header>
  </>
)

Heading.propTypes = {
  small: PropTypes.string,
  level: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  children: PropTypes.node.isRequired,
  appearance: PropTypes.oneOf(['light', 'dark']),
}

export { Heading as default, Underline }
