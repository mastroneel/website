import styled, { css } from 'styled-components'
import { rgba, linearGradient } from 'polished'

import { Underline } from './Heading'
import theme, { devices } from '../../theme'
import rectangle from '../../images/rect-ill.svg'

const Separator = styled.hr`
  border: 0;
  border-bottom: 1px solid ${ props => rgba(props.theme.color.grey, 0.07) };
  margin: 4em 0;
`

const Article = styled.article`
  background-color: ${ props => props.bgColor || '#fff' };

  h2 {
    ${ Underline }
  }

  h2,
  h3,
  h4 {
    line-height: 1.4;
    position: relative;

    a.anchor-link {
      position: absolute;
      left: -28px;
      opacity: 0;
      transition: opacity 0.25s ease;
    }

    :hover {
      a.anchor-link {
        opacity: 1;
      }
    }
  }

  p,
  li {
    a {
      color: ${ props => props.theme.color.pink };
      text-decoration: none;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background-color: ${ props => props.theme.color.pink };
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.25s ease;
      }

      :hover {
        &::after {
          transform: scaleX(1);
        }
      }
    }
  }

  @media (${ devices.tablet }) {
    padding: 0.7em 1.5em;
  }

  blockquote {
    font-size: 2.8rem;
    position: relative;

    ::before {
      content: '';
      border-left: 4px solid pink;
      position: absolute;
      top: 0;
      left: -1.5em;
      border-left: 4px solid ${ props => props.theme.color.pink };
      height: 100%;
    }
  }
`

const Box = styled(Article)`
  background-color: #fff;
  position: relative;
  padding: 2em;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    ${ linearGradient({
    colorStops: [theme.color.blue, theme.color.pink],
    toDirection: '0deg',
    fallback: props => props.theme.color.pink,
  }) }
  }

  & > *:first-child {
    margin-top: 0;
    margin-bottom: 0;
  }
`

const UnderlineWhite = css`
  ${ Underline }
  color: #fff;
`

const ColumnSpacing = css`
  padding: 0 2.5em;

  &:first-child {
    border-right: 1px solid ${ theme.color.pink };

    @media (${ devices.tablet }) {
      border-right: 0;
    }
  }
`

const DarkBgIllustration = css`
  background-image: url(${ rectangle });
  background-repeat: no-repeat;
  background-size: 60%;
  background-position: bottom right;
  padding-bottom: 20%;
`

const MarkdownStyle = css`
  h3 {
    ${ Underline }
  }
`

export { Article as default, Separator, Box, UnderlineWhite, ColumnSpacing, DarkBgIllustration, MarkdownStyle }
