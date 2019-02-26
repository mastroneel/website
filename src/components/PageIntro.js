import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'
import { rgba } from 'polished'

import { Container, Row, Column } from './ui/Grid'
import Heading from './ui/Heading'
import mouse from '../images/mouse.svg'

const Spacing = css`
  padding: 7em 0;
`

const TextBody = styled.div`
  max-width: 75%;

  h4 {
    margin: 0;
    padding-top: 0.2em;
    line-height: 1.2;
    text-transform: initial;
    letter-spacing: 0.5px;
  }

  p {
    color: ${ props => rgba(props.theme.color.dark, 0.8) };
  }
`

const ImageBody = styled.div`
  height: 100%;

  img {
    width: 640px;
    height: 100%;
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
    <Row grid={1 / 2}>
      <Column>
        <TextBody>
          <Heading
            small={small}
            level="h4"
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

export default PageIntro
