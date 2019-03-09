import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import theme, { devices } from '../../theme'

const Wrapper = styled.div`
  background-color: ${ props => props.bgColor };
  padding: 2em 0;
`

const Container = styled.div`
  width: 100%;
  max-width: ${ props =>
    props.size === 'fluid' ? '100%' : props.theme.breakpoints[props.size] || props.theme.breakpoints.xl };
  margin: 0 auto;

  @media (${ devices.desktop }) {
    padding: 0 2em;
  }

  @media (${ devices.tablet }) {
    padding: 2em;
  }
`

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${ props => props.dir || 'column' };
  align-items: ${ props => (props.align ? props.align : null) };
  justify-content: ${ props => (props.justify ? props.justify : null) };
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${ props => props.dir || 'row' };
  align-items: ${ props => (props.align ? props.align : null) };
  justify-content: ${ props => (props.justify ? props.justify : null) };

  ${ ({ grid }) =>
    grid &&
    css`
      & > ${ Column } {
        flex-basis: ${ (grid * 100).toFixed(2) }%;
        max-width: ${ (grid * 100).toFixed(2) }%;
      }
    ` }

  @media (${ devices.tablet }) {
    ${ Column } {
      flex-basis: 100%;
      max-width: 100%;
    }
  }
`

Container.propTypes = {
  size: PropTypes.oneOf(Object.keys(theme.breakpoints).concat(['fluid'])),
}

Row.propTypes = {
  grid: PropTypes.number,
  dir: PropTypes.oneOf(['column', 'row']),
  align: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),
  justify: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),
}

Column.propTypes = {
  dir: PropTypes.oneOf(['column', 'row']),
  align: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),
  justify: PropTypes.oneOf(['flex-start', 'center', 'flex-end']),
}

Wrapper.propTypes = {
  bgColor: PropTypes.string.isRequired,
}

export { Container, Row, Column, Wrapper }
