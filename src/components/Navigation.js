import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { rgba, stripUnit } from 'polished'
import theme, { devices } from '../theme'
import Button from './ui/Buttons'

const Nav = styled.nav`
  display: ${ props => (props.active ? 'flex' : 'none') };

  a {
    text-decoration: none;
    color: ${ props => props.theme.color.dark };
    font-size: 1.4rem;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    font-weight: 700;
    padding: 0.9em;
    position: relative;

    ::after {
      content: '';
      position: absolute;
      bottom: -1.165em;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${ props => props.theme.color.pink };
      transform: scaleX(0);
      transition: all 0.15s ease-in-out;
      transform-origin: left;
    }

    :hover,
    &.active {
      color: ${ props => props.theme.color.pink };

      ::after {
        transform: scaleX(1);
      }
    }
  }

  @media (${ devices.nav }) {
    order: 3;
    position: absolute;
    top: ${ props => props.theme.header.height };
    right: 0;
    left: 0;
    background-color: #fff;
    width: 100%;
    z-index: 1000;
    flex-direction: column;
    box-shadow: 0 8px 30px ${ props => rgba(props.theme.color.dark, 0.12) };

    a {
      padding: 1.5em 2em;
      border-bottom: 1px solid ${ props => rgba(props.theme.color.dark, 0.08) };

      &::after {
        display: none;
      }
    }
  }

  ${ Button } {
    display: none;

    @media (${ devices.tablet }) {
      display: block;
    }
  }
`

const MobileToggle = styled.button`
  background-color: transparent;
  text-decoration: none;
  border: 0;
  outline: 0;
  display: none;
  width: 42px;
  height: 24px;

  span {
    background-color: ${ props => (props.active ? props.theme.color.pink : props.theme.color.dark) };
    width: 100%;
    height: 3px;
    display: block;
    margin-bottom: 6px;
    border-radius: 10px;
    transform-origin: left;
    transition: transform 0.2s ease;

    :last-child {
      margin-bottom: 0;
    }

    :nth-child(1),
    :nth-child(3) {
      width: ${ props => (props.active ? '92%' : '100%') };
    }

    :nth-child(1) {
      transform: ${ props => (props.active ? 'rotate(45deg)' : 'rotate(0)') };
    }

    :nth-child(2) {
      transform: ${ props => (props.active ? 'scaleX(0)' : 'scaleX(1)') };
    }

    :nth-child(3) {
      transform: ${ props => (props.active ? 'rotate(-45deg)' : 'rotate(0)') };
    }
  }

  @media (${ devices.nav }) {
    display: inline-block;
  }
`

class Navigation extends Component {
  state = {
    mobileNavActive: null,
  }

  async componentDidMount () {
    if (window.innerWidth <= stripUnit(theme.breakpoints.nav)) {
      await this.setState({ mobileNavActive: false })
    } else {
      await this.setState({ mobileNavActive: true })
    }
  }

  handleMenu = async () => {
    await this.setState({ mobileNavActive: !this.state.mobileNavActive })
  }

  clearMenu = async () => {
    if (this.state.mobileNavActive === true && window.innerWidth <= stripUnit(theme.breakpoints.nav)) {
      await this.setState({ mobileNavActive: false })
    }
  }

  render () {
    const { mobileNavActive } = this.state
    return (
      <>
        <MobileToggle
          aria-label="Menu"
          onClick={this.handleMenu}
          active={mobileNavActive}
        >
          <span />
          <span />
          <span />
        </MobileToggle>
        <Nav
          active={mobileNavActive}
          onClick={this.clearMenu}
        >
          <Link
            activeClassName="active"
            to="/"
          >
            Home
          </Link>
          <Link
            activeClassName="active"
            to="/philosophy"
          >
            Philosophy
          </Link>
          <Link
            activeClassName="active"
            to="/team"
          >
            Team
          </Link>
          <Link
            activeClassName="active"
            to="/companies"
          >
            Companies
          </Link>
          <Link
            activeClassName="active"
            to="/faq"
          >
            FAQ
          </Link>
          <Link
            activeClassName="active"
            to="/about"
          >
            About
          </Link>
          <Link
            activeClassName="active"
            to="https://medium.com/@ctr.capital"
          >
            Blog
          </Link>
          <Button
            as="a"
            appearance="primary"
            href="mailto:social@ctr.capital"
            alt="Get in touch"
            target="_blank"
          >
            Get in Touch
          </Button>
        </Nav>
      </>
    )
  }
}

export default Navigation
