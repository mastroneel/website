import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { rgba, lighten } from 'polished'

import { Container, Row, Column } from '../ui/Grid'
import Polygon, { PolygonLight } from './Polygon'
import Heading from '../ui/Heading'
import { TextBody } from '../PageIntro'

const Content = [
  {
    title: 'CTR Values and Principles',
    subtitle: 'Who are we?',
    text: 'CTR Values...',
  },
  {
    title: 'The Problem We Can Resolve',
    subtitle: 'Our Problem',
    text: 'The problem is',
  },
  {
    title: 'Our Belief That CCF Offers A Solution',
    subtitle: 'Conscious Capital Fund',
    text: 'Our vision and mission is',
  },
  {
    title: 'The CCF Vision and Mission',
    subtitle: 'Lorem',
    text: 'Ipsum',
  },
  {
    title: 'How That Vision Affects Our Execution',
    subtitle: 'What we believe in',
    text: 'Something',
  },
  {
    title: 'What We Mean By Proximity',
    subtitle: 'What we mean',
    text: 'Proximity is',
  },
  {
    title: 'Why We Believe In The Triple ROI',
    subtitle: 'What we offer',
    text: 'It is...',
  },
  {
    title: 'Our Commitment To Building A Community',
    subtitle: 'What we offer',
    text: 'It is...',
  },
]

const ContentOuter = styled.div`
  display: ${ props => (props.show ? 'block' : 'none') };
  border: 2px solid ${ props => rgba(props.theme.color.grey, 0.08) };
  padding: 2em;
  position: relative;
`

const Left = css`
  left: -24px;
`

const Right = css`
  right: -24px;
`

const Cycle = styled.button`
  background: ${ props => props.theme.color.pink };
  border: 0;
  color: #fff;
  width: 42px;
  height: 42px;
  border-radius: 30px;
  appearance: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${ props => props.dir === 'left' && Left };
  ${ props => props.dir === 'right' && Right };
  cursor: pointer;
  margin: 0;
  padding: 0;
  box-shadow: 0 3px 15px -2px ${ props => rgba(props.theme.color.dark, 0.3) };

  :hover {
    background-color: ${ props => lighten(0.12, props.theme.color.pink) };
  }
`

const Values = () => {
  const [isVisible, setIsVisible] = useState(0)

  function setVisibility (id) {
    setIsVisible(parseInt(id))
  }

  function cycle (dir) {
    setIsVisible(idx => {
      switch (dir) {
      case 'next':
        if (idx > 5) return idx
        return idx + 1
      case 'back':
        if (idx <= 0) return idx
        return idx - 1
      default:
        return idx
      }
    })
  }

  return (
    <Container size="lg">
      <Row
        grid={1 / 2}
        css={`
          margin: 10em 0;
        `}
      >
        <Column>
          <PolygonLight
            rotation={-45}
            polyScale={1}
            css={`
              margin-bottom: 2.5em;
            `}
          />
          <Polygon
            setPoly={setVisibility}
            activePoly={isVisible}
          />
          <PolygonLight
            rotation={45}
            polyScale={2}
            css={`
              margin-top: 2.5em;
            `}
          />
        </Column>
        <Column justify="center">
          {Content.map((value, idx) => (
            <ContentOuter
              key={idx}
              show={idx === isVisible}
            >
              <Cycle
                dir="left"
                onClick={() => cycle('next')}
              >
                ⯇
              </Cycle>
              <TextBody>
                <Heading
                  small={value.subtitle}
                  level="h3"
                >
                  {value.title}
                </Heading>
                <p>{value.text}</p>
              </TextBody>
              <Cycle
                dir="right"
                onClick={() => cycle('back')}
              >
                ⯈
              </Cycle>
            </ContentOuter>
          ))}
        </Column>
      </Row>
    </Container>
  )
}

export default Values
