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

  .arrow-icon-wrapper {
    position: absolute;
    text-align: center;
    bottom: 30px;
    left: 50%;
    padding: 0;
    margin-left: -26px;
    z-index: 90;
  }
`

export default GlobalStyle
