import React from 'react'
import styled from 'styled-components'

const Small = styled.small`
  text-transform: uppercase;
  color: ${ props => props.theme.color.pink };
  letter-spacing: 0.4px;
`

const Header = styled.h1`
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #fff;
  margin-top: 0;
`

const Heading = ({ small, level, children }) => (
  <>
    {small && <Small>{small}</Small>}
    <Header as={level || 'h1'}>{children}</Header>
  </>
)

export default Heading
