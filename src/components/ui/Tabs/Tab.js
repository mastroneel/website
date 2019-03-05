import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { lighten, rgba } from 'polished'

const TabStyle = styled.div`
  color: ${ props =>
    props.activeTab === props.styledLabel ? props.theme.color.pink : rgba(props.theme.color.dark, 0.7) };
  cursor: pointer;
  background-color: ${ props => (props.activeTab === props.styledLabel ? lighten(0.35, props.theme.color.pink) : null) };
  padding: 0.35em 0.8em;
  margin-bottom: 1em;
  font-weight: bold;
  position: relative;
  transition: all 0.15s ease;

  :hover {
    color: ${ props => (props.activeTab === props.styledLabel ? null : props.theme.color.dark) };
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    right: -4px;
    width: 8px;
    height: 8px;
    background-color: ${ props => props.theme.color.pink };
    border-radius: 40px;
    transform: translateY(-50%);
    opacity: ${ props => (props.activeTab === props.styledLabel ? '1' : '0') };
    transition: opacity 0.2s ease;
    box-shadow: 0 0 0 5px ${ props => rgba(props.theme.color.pink, 0.12) };
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
        aria-label={label.toLowerCase()}
        styledLabel={label}
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
