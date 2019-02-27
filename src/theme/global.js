import { css, createGlobalStyle } from 'styled-components'
import { rgba, lighten, linearGradient } from 'polished'
import 'normalize.css'

import theme from './index'

function setHeadingSize () {
  let headings = ''
  const sizes = theme.text.headingSizes

  for (let i = 1; i <= 6; i++) {
    headings += `
      h${ i } {
        font-size: ${ sizes[i - 1] };
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
`

export default GlobalStyle
