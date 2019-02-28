import React from 'react'
import { graphql } from 'gatsby'
import styled, { css } from 'styled-components'
import { linearGradient } from 'polished'

import Seo from '../components/seo'
import { Wrapper, Container, Row, Column } from '../components/ui/Grid'
import PageIntro from '../components/PageIntro'
import Article from '../components/ui/Article'
import { Underline } from '../components/ui/Heading'
import theme from '../theme'

import philosophy from '../images/philosophy.svg'
import rectangle from '../images/rect-ill.svg'

const Box = css`
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

export default ({ data }) => (
  <>
    <Seo title="Our Philosophy" />
    <PageIntro
      small="Our Approach"
      heading="Philosophy"
      paragraph="The way our minds work, what we’re currently thinking about, exploring and our continued revelations."
      image={{
        src: philosophy,
        alt: 'Philosophy illustration',
      }}
    />
    <Container size="md">
      <Row>
        <Column css={MarkdownStyle}>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </Column>
      </Row>
    </Container>
  </>
)

export const philoQuery = graphql`
  {
    markdownRemark(fileAbsolutePath: { regex: "/philosophy_md/" }) {
      html
    }
  }
`
