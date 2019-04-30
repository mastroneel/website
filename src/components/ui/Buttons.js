import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { lighten } from 'polished'

const Primary = css`
  background-color: ${ props => lighten(0.375, props.theme.color.pink) };
  color: ${ props => props.theme.color.pink };

  :hover {
    background-color: ${ props => props.theme.color.blue };
  }

  &::after {
    border-color: ${ props => props.theme.color.pink };
  }
`

const Secondary = css`
  background-color: ${ props => lighten(0.6, props.theme.color.blue) };
  color: ${ props => props.theme.color.blue };

  :hover {
    background-color: ${ props => props.theme.color.pink };
    color: #fff;
  }

  &::after {
    border-color: ${ props => props.theme.color.yellow };
  }
`

const Button = styled.button`
  border: 0;
  display: inline-block;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 1em 1.6em;
  position: relative;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  ${ ({ appearance }) => appearance === 'primary' && Primary };
  ${ ({ appearance }) => appearance === 'secondary' && Secondary };

  ::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    border-width: 4px;
    border-style: solid;
    z-index: -1;
    transform: translate(0, 0);
    opacity: 0;
    transition: all 0.15s ease-in-out;
  }

  :hover {
    ::after {
      opacity: 1;
      transform: translate(0.7em, -0.65em);
    }
  }
`

const ButtonGroup = styled.div`
  ${ Button } {
    margin-right: 1em;
  }
`

Button.propTypes = {
  appearance: PropTypes.oneOf(['primary', 'secondary']).isRequired,
}

export { Button as default, ButtonGroup }
