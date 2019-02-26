import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import theme from '../../theme'

const Container = styled.div`
  width: ${ props =>
    props.size === 'fluid' ? '100%' : props.theme.breakpoints[props.size] || props.theme.breakpoints.xl };
  margin: 0 auto;
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
`

const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${ props => props.dir || 'column' };
  align-items: ${ props => (props.align ? props.align : null) };
  justify-content: ${ props => (props.justify ? props.justify : null) };
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

export { Container, Row, Column }
