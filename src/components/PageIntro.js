import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
import { rgba } from 'polished'

import { Container, Row, Column } from './ui/Grid'
import Heading from './ui/Heading'
import mouse from '../images/mouse.svg'
import { devices } from '../theme'

const Spacing = css`
  padding: 5em 0;
`

const TextBody = styled.div`
  max-width: 75%;

  h3 {
    line-height: 1.2;
    text-transform: initial;
    letter-spacing: 0.5px;
    font-weight: 700;
    margin: 0;
    padding-top: 0.2em;
  }

  p {
    color: ${ props => rgba(props.theme.color.dark, 0.8) };
  }

  @media (${ devices.tablet }) {
    max-width: 100%;
    text-align: center;
  }
`

const ImageBody = styled.div`
  height: 60vh;

  img {
    height: 100%;
  }

  @media (${ devices.tablet }) {
    height: 50vh;
  }

  @media (${ devices.mobile }) {
    height: 250px;
    margin-top: 2em;
  }
`

const ScrollAnim = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  50% {
    opacity: 0;
    transform: translateY(0.3em);
  }

  70% {
    opacity: 0;
    transform: translateY(0);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const Mouse = styled.div`
  background-image: url(${ mouse });
  background-repeat: no-repeat;
  width: 24px;
  height: 32px;
  position: relative;

  @media (${ devices.tablet }) {
    display: none;
  }
`

const Scroll = styled.div`
  content: '';
  background-color: ${ props => props.theme.color.pink };
  width: 4px;
  height: 7px;
  border-radius: 10px;
  position: absolute;
  top: 5px;
  left: 43%;
  animation: ${ ScrollAnim } 2s ease infinite;
`

const PageIntro = ({ small, heading, paragraph, image }) => (
  <Container css={Spacing}>
    <Row
      grid={1 / 2}
      align="center"
    >
      <Column>
        <TextBody>
          <Heading
            small={small}
            level="h3"
          >
            {heading}
          </Heading>
          {paragraph && <p>{paragraph}</p>}
        </TextBody>
        <Mouse>
          <Scroll />
        </Mouse>
      </Column>
      {image && (
        <Column align="center">
          <ImageBody>
            <img
              src={image.src}
              alt={image.alt}
            />
          </ImageBody>
        </Column>
      )}
    </Row>
  </Container>
)

PageIntro.propTypes = {
  small: PropTypes.string,
  heading: PropTypes.string.isRequired,
  paragraph: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
}

export { PageIntro as default, TextBody }
