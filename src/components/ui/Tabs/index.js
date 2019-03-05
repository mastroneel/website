import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rgba } from 'polished'

import Tab from './Tab'

const TabsStyle = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid ${ props => rgba(props.theme.color.dark, 0.12) };
  margin-top: 2em;
  margin-bottom: 2em;
`

const TabMenu = styled.div`
  padding-top: 2.5em;
  padding-right: 2.5em;
  border-right: 1px solid ${ props => rgba(props.theme.color.dark, 0.12) };
`

const Content = styled.div`
  display: block;
  padding-top: 2.5em;
  padding-left: 2.5em;

  p {
    margin: 0;
  }
`

class Tabs extends Component {
  constructor (props) {
    super(props)

    this.state = {
      activeTab: '',
    }
  }

  onTabClick = tab => {
    this.setState({ activeTab: tab })
  }

  async componentDidMount () {
    await this.setState({
      activeTab: this.props.children[0].props['aria-label'],
    })
  }

  render () {
    const { children } = this.props
    const { activeTab } = this.state
    return (
      <TabsStyle>
        <TabMenu>
          {children.map(child => {
            return (
              <Tab
                activeTab={activeTab}
                key={child.props['aria-label']}
                label={child.props['aria-label']}
                onClick={this.onTabClick}
              />
            )
          })}
        </TabMenu>
        <Content>
          {children.map(child => {
            if (child.props['aria-label'] !== activeTab) return null
            return child.props.children
          })}
        </Content>
      </TabsStyle>
    )
  }
}

export default Tabs
