import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { rgba } from 'polished'

import logo from '../images/logo-inline.svg'
import { Container } from './ui/Grid'

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  border-bottom: 1px solid ${ props => rgba(props.theme.colors.dark, 0.12) };
  height: ${ props => props.theme.header.height };

  a {
    display: inline-block;
  }
`

const Logo = styled.div`
  background-image: url(${ logo });
  background-repeat: no-repeat;
  width: 180px;
  height: 40px;
`

const Header = ({ siteTitle }) => (
  <HeaderStyle>
    <Container>
      <Link to="/">
        <Logo />
      </Link>
    </Container>
  </HeaderStyle>
)

Header.propTypes = {
  siteTitle: PropTypes.string
}

export default Header
