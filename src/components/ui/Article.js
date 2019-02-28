import styled from 'styled-components'
import { Underline } from './Heading'

const Article = styled.article`
  max-width: 980px;
  padding: 0 4em;
  margin: 0 auto;
  background-color: #fff;

  h2 {
    ${ Underline }
  }
`

export default Article
