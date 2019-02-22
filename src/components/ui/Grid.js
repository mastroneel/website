import PropTypes from 'prop-types'
import styled from 'styled-components'

import theme from '../../theme'

const Container = styled.div`
  width: ${ props => props.size || props.theme.breakpoints.xl };
  height: 100%;
  margin: 0 auto;
`

const Row = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  align-items: ${ props => (props.align ? props.align : null) };
  justify-content: ${ props => (props.justify ? props.justify : null) };
`

const Column = styled.div`
  display: flex;
  flex-direction: ${ props => props.dir || 'column' };
  align-items: ${ props => (props.align ? props.align : null) };
  justify-content: ${ props => (props.justify ? props.justify : null) };
`

Container.propTypes = {
  size: PropTypes.oneOf(Object.keys(theme.breakpoints)),
}

Row.propTypes = {
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
