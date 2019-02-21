import { createGlobalStyle } from 'styled-components'
import 'normalize.css'

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
  }
  .inner {
    margin:auto;
  }
  @media (min-width: 768px) {
    .inner {
      width:750px;
    }
  }
  @media (min-width: 992px) {
    .inner {
        width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .inner {
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
`

export default GlobalStyle
