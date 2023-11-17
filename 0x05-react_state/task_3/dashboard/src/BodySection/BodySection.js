import React from 'react'
import PropTypes from 'prop-types'

export const BodySection = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  )
}

BodySection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
}
