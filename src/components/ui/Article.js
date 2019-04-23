import styled from 'styled-components'
import { rgba } from 'polished'
import { Underline } from './Heading'
import { devices } from '../../theme'

const Separator = styled.hr`
  border: 0;
  border-bottom: 1px solid ${ props => rgba(props.theme.color.grey, 0.07)};
  margin: 4em 0;
`

const Article = styled.article`
  h2 {
    ${ Underline }
  }

  @media (${ devices.tablet }) {
    padding: 0.7em 1.5em;
  }
`

export { Article as default, Separator }
