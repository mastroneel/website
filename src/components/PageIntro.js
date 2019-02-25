import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'

import { Container, Row, Column } from './ui/Grid'
import Heading from './ui/Heading'

const Spacing = css`
  padding: 7em 0;
`

const TextBody = styled.div`
  h4 {
    margin: 0;
  }

  p {
    max-width: 70%;
    color: ${ props => rgba(props.theme.color.dark, 0.8) };
  }
`

const ImageBody = styled.div`
  max-width: 70%;
  height: 100%;

  img {
    width: 640px;
    height: 100%;
  }
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
  iamge: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
}

export default PageIntro
