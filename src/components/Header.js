import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { rgba } from 'polished'

import logo from '../images/ctr_cap.svg'
import { Container, Row, Column } from './ui/Grid'
import Navigation from './Navigation'
import Button from './ui/Buttons'

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  border-bottom: 1px solid ${ props => rgba(props.theme.color.dark, 0.12) };
  height: ${ props => props.theme.header.height };
  background: ${ props => props.theme.header.background };
  z-index: 1000;

  a {
    display: inline-block;
  }

  ${ Column } {
    &:nth-child(1) {
      flex: 1 1 0;
    }
    &:nth-child(2) {
      flex: 3 1 0;
    }
    &:nth-child(3) {
      flex: 1 1 0;
    }
  }
`

const Logo = styled.div`
  background-image: url(${ logo });
  background-repeat: no-repeat;
  width: 180px;
  height: 36px;
`

const Header = () => (
  <HeaderStyle>
    <Container>
      <Row align="center">
        <Column>
          <Link to="/">
            <Logo />
          </Link>
        </Column>
        <Column align="center">
          <Navigation />
        </Column>
        <Column align="flex-end">
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
