import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Tab from './Tab'

const TabsStyle = styled.div`
  width: 100%;
`

const TabMenu = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
  }
`

const Content = styled.div`
  display: block;
  margin-top: 3em;
`

class Tabs extends Component {
  constructor (props) {
    super(props)

    this.state = {
      activeTab: null,
    }
  }

  onTabClick = tab => {
    this.setState({ activeTab: tab })
  }

  async componentDidMount () {
    await this.setState({
      activeTab: this.props.children.props.label,
    })
  }

  render () {
    const { children } = this.props
    const { activeTab } = this.state

    return (
      <TabsStyle>
        <TabMenu>
          {children.map(child => {
            console.log(child)
            const { label } = child.props

            return <Tab
              activeTab={activeTab}
              key={label}
              label={label}
              onClick={this.onTabClick}
            />
          })}
        </TabMenu>
        <Content>
          {children.map(child => {
            if (child.props.label !== activeTab) return null
            return child.props.children
          })}
        </Content>
      </TabsStyle>
    )
  }
}

// Tabs.propTypes = {
//   children: PropTypes.arrayOf(
//     PropTypes.shape({
//       props: PropTypes.shape({
//         label: PropTypes.string.isRequired,
//       }),
//     }).isRequired
//   ).isRequired,
// }

export default Tabs
