import React from 'react'
import { BodySection } from './BodySection'
import './BodySectionWithMarginBottom.css'

export const BodySectionWithMarginBottom = ({ children }) => {
  return (
    <div className='bodySectionWithMarginBottom'>
      <BodySection children={children} />
    </div>
  )
}
