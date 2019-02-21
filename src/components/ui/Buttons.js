import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rgba, lighten } from 'polished'

const Button = styled.button`
  border: 0;
  display: inline-block;
  background-color: ${ props =>
    props.primary ? lighten(0.375, props.theme.color.pink) : rgba(props.theme.color.dark, 0.1) };
  color: ${ props => (props.primary ? props.theme.color.pink : props.theme.color.dark) };
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 1em 1.6em;
  position: relative;
  transition: all 0.15s ease-in-out;

  ::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    border: 4px solid ${ props => props.theme.color.pink };
    z-index: -1;
    transform: translate(0, 0);
    opacity: 0;
    transition: all 0.15s ease-in-out;
  }

  :hover {
    background-color: ${ props => props.theme.color.blue };

    ::after {
      opacity: 1;
      transform: translate(0.7em, -0.65em);
    }
  }
`

Button.propTypes = {
  primary: PropTypes.bool,
}

export default Button
