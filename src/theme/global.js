import { css, createGlobalStyle } from 'styled-components'
import 'normalize.css'

import theme, { devices } from './index'

function setHeadingSize () {
  let headings = ''
  const sizes = theme.text.headingSizes

  for (let i = 1; i <= 6; i++) {
    headings += `
      h${ i } {
        font-size: ${ sizes[i - 1] };
        font-weight: 900;
      }
    `
  }
  return css`
    ${ headings }
  `
}

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${ props => props.theme.text.fontFamily };
    font-size: ${ props => props.theme.text.baseSize };
    margin-top: ${ props => props.theme.header.height };
    line-height: 1.745;

    @media (${ devices.tablet }) {
      margin-top: 0;
    }
  }

  ${ setHeadingSize() }

  img {
    max-width: 100%;
    height: auto;
  }

  .content-styled {
    h2 {
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
    }
  }

  .sticky-outer-wrapper {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.25s ease;

    &.active {
      visibility: visible;
      opacity: 1;
    }
  }
`

export default GlobalStyle
