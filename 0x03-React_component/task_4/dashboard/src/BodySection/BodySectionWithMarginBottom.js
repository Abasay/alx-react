import React from 'react'
import { BodySection } from './BodySection'
import './BodySectionWithMarginBottom.css'
import PropTypes from 'prop-types'

export const BodySectionWithMarginBottom = ({ ...children }) => {
  return (
    <div className='bodySectionWithMarginBottom'>
      <BodySection {...children} />
    </div>
  )
}

BodySectionWithMarginBottom.propTypes = {
  ...BodySection.propTypes,
}
