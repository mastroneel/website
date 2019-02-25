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

  .inner {
    margin-bottom: 10em !important;
  }

  .Collapsible {
    border-top: 2px solid ${ props => props.theme.color.dark };
    padding:10px 0;
    margin-top: 24px;
    margin-bottom: 24px;
  }

  .Collapsible:hover{
    color: ${ props => props.theme.color.pink };
    cursor: pointer;
    border-top: 2px solid ${ props => props.theme.color.pink };
  }

  .Collapsible:hover + div {
    border-top: 2px solid ${ props => props.theme.color.pink };
  }

  .is-open {
    font-weight:bolder;
    color: ${ props => props.theme.color.dark };
  }

  .Collapsible__contentOuter {
    color: ${ props => props.theme.color.dark };
  }

  .faq:last-child {
    border-bottom: 2px solid ${ props => props.theme.color.dark };
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
