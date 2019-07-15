import React from 'react'
import PropTypes from 'prop-types'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const LinkOut = ({ to, children, className }) => (
  <OutboundLink
    className={className}
    href={to}
    target="_blank"
    rel="noreferrer noopener"
  >
    {children}
  </OutboundLink>
)

LinkOut.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default LinkOut
