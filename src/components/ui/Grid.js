import PropTypes from 'prop-types'
import styled from 'styled-components'

import theme from '../../theme'

const Container = styled.div`
  width: ${ props => props.size || props.theme.breakpoints.xl };
  height: 100%;
  margin: 0 auto;
`

const Row = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`

const Column = styled.div`
  display: flex;
  flex-direction: ${ props => props.dir || 'column' };
`

Container.propTypes = {
  size: PropTypes.oneOf(Object.keys(theme.breakpoints))
}

Column.propTypes = {
  dir: PropTypes.oneOf(['column', 'row'])
}

export { Container, Row, Column }
