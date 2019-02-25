import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Small = styled.small`
  text-transform: uppercase;
  color: ${ props => props.theme.color.pink };
  letter-spacing: 0.4px;
`

const Header = styled.h1`
  text-transform: uppercase;
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

export default Heading
