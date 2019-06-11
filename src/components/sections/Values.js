import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { rgba, lighten } from 'polished'

import { Container, Row, Column } from '../ui/Grid'
import Polygon, { PolygonLight } from './Polygon'
import Heading from '../ui/Heading'
import { TextBody } from '../PageIntro'
import ChevronLeft from '../../images/chevron-left-fill.svg'
import ChevronRight from '../../images/chevron-right-fill.svg'

const Content = [
  {
    title: '1. CTR Values and Principles',
    subtitle: 'The Foundation',
    text: 'Integrity, Social Responsibility, Ethical Behaviour and Accountability.',
  },
  {
    title: '2. The Problem We Can Resolve',
    subtitle: 'Global Challenges Exist',
    text: 'Lack of Consciousness is only one challenge we face, others include inadequate funding and lack of connection are other pieces.',
  },
  {
    title: '3. Our Belief That CCF Offers A Solution',
    subtitle: 'The CCF Solutions',
    text: 'We are motivated by passion and purpose to see a transformed world and we are looking for the potential to impact a billion lives or more.',
  },
  {
    title: '4. The CCF Vision and Mission',
    subtitle: 'A Guiding Light',
    text: 'Our vision is a community of socially-responsible, impact investors.',
  },
  {
    title: '5. How That Vision Affects Our Execution',
    subtitle: 'Investment is De-risked',
    text: 'It’s not just numbers and percentages to us, it’s about unlocking the hidden value possessed by the founders and businesses we include in our portfolio.',
  },
  {
    title: '6. What We Mean By Proximity',
    subtitle: 'It Pays to Care',
    text: 'We are well-connected with a diverse network of influencers, businesses and investors who are open to opportunities at an earlier stage of development.',
  },
  {
    title: '7. Why We Believe In The Triple ROI',
    subtitle: 'People. Planet. Profit.',
    text: 'Can you create accountability and transparency, the foundational cornerstones to Conscious Capitalism, to increase in the Triple Bottom Line.',
  },
  {
    title: '8. Our Commitment To Building A Community',
    subtitle: 'A Tribe To Thrive With',
    text: 'Our goal is to foster a thriving community of companies and individuals who are looking to create the impact and live fulfilled.',
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
  display: flex;
  justify-content: center;
  align-items: center;
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

  img {
    width: 24px;
    height: 24px;
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
        if (idx > 6) return idx
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
          margin: 0em 0em 10em 0;
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
                onClick={() => cycle('back')}
              >
                <img
                  src={ChevronLeft}
                  alt="Cycle back"
                />
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
                onClick={() => cycle('next')}
              >
                <img
                  src={ChevronRight}
                  alt="Cycle forward"
                />
              </Cycle>
            </ContentOuter>
          ))}
        </Column>
      </Row>
    </Container>
  )
}

export default Values
