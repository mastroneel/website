import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { rgba } from 'polished'

import logo from '../images/logo-inline.svg'
import { Container, Row, Column } from './ui/Grid'
import Navigation from './Navigation'
import Button from './ui/Buttons'

const HeaderStyle = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  border-bottom: 1px solid ${ props => rgba(props.theme.color.dark, 0.12) };
  height: ${ props => props.theme.header.height };
  background: ${ props => props.theme.header.background };
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

const Header = () => (
  <HeaderStyle>
    <Container>
      <Row
        align="center"
        justify="space-between"
      >
        <Column>
          <Link to="/">
            <Logo />
          </Link>
        </Column>
        <Column>
          <Navigation />
        </Column>
        <Column>
          <Button
            as="a"
            appearance="primary"
            href="mailto:fund@ctr.capital"
            alt="Get in touch"
            target="_blank"
          >
            Get in Touch
          </Button>
        </Column>
      </Row>
    </Container>
  </HeaderStyle>
)

export default Header
