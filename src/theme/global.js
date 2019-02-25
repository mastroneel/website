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
  .inner, .major {
    margin:auto;
  }
  @media (min-width: 768px) {
    .inner, .major {
      width:750px;
    }
  }
  @media (min-width: 992px) {
    .inner, .major {
        width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .inner, .major {
        width: 1170px;
    }
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
  .major {
    min-height:100vh;
    vertical-align: middle;
    display: inline-block;
    padding-top: 20vh; /*spacing*/
  }
  .individual {
    margin-top: 16rem;
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
  footer a {
    color: #FFF;
    border-bottom: 1px dotted;
    text-decoration: none;
    transition: color .2s ease-in-out,border-bottom-color .2s ease-in-out;
  }
  footer a:hover {
    border-bottom-color: transparent;
    color: ${ props => props.theme.color.pink };
  }
  .team a:nth-of-type(3n), .team div a:nth-of-type(1), .team div a:nth-of-type(4n) {
    top: 8em;
  }
  .team a {
    background-color: ${ props => props.theme.color.blue };
    background: linear-gradient(
        ${ props => rgba(props.theme.color.blue, 0.93) },
        ${ props => rgba(props.theme.color.blue, 0.97) }
      );
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: #fff;
    margin-top: 8em;
    padding: 4em;
    position: relative;
    box-shadow: 0 0 0 5px #fff;
    width: 33%;
    display:inline-block;
    min-height: 20em;

    strong {
      font-weight: 700;
      color: ${ props => props.theme.color.pink };
    }

    ::after {
      content: '';
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      right: 0;
      border: 10px solid ${ props => rgba(props.theme.color.pink, 0.1) };
      transform: translate(1.8em, -1.8em);
      z-index: -1;
    }

    p {
      color: ${ props => lighten(0.6, props.theme.color.blue) };
      max-width: 60%;
      font-size: 2rem;
    }
  }
`

export default GlobalStyle
