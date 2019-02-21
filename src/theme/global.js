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
  .accordion-head {
    background-color: #FFF !important;
    color: #000 !important;
    border-bottom: 1px solid #000 !important;
  }
  .panel-accordion {
    transition: all 0.3s ease !important;
  }
`

export default GlobalStyle
