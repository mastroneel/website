import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const Nav = styled.nav`
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
`

const Navigation = () => (
  <Nav>
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
      to="/about"
    >
      About
    </Link>
    <Link
      activeClassName="active"
      to="/faq"
    >
      FAQ
    </Link>
    <Link
      activeClassName="active"
      to="/news"
    >
      News
    </Link>
  </Nav>
)

export default Navigation
