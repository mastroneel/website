import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { timingFunctions } from 'polished'

const TabStyle = styled.div`
  display: inline-block;
  color: ${ props => (props.activeTab === props.label ? props.theme.color.pink : props.theme.color.dark) };
  cursor: pointer;
  margin-right: 1.5em;
  padding: 1em 0;
  font-weight: bold;
  position: relative;
  transition: all 0.15s ${ timingFunctions('easeInCubic') };

  :hover {
    color: ${ props => (props.activeTab === props.label ? null : props.theme.color.dark) };
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    z-index: 1000;
    background-color: ${ props => (props.activeTab === props.label ? props.theme.color.pink : null) };
  }
`

class Tab extends Component {
  handleTabClick = () => {
    const { label, onClick } = this.props
    onClick(label)
  }

  render () {
    const { label, activeTab } = this.props
    return (
      <TabStyle
        label={label}
        onClick={this.handleTabClick}
        activeTab={activeTab}
      >
        {label}
      </TabStyle>
    )
  }
}

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  activeTab: PropTypes.string.isRequired,
}
export default Tab
