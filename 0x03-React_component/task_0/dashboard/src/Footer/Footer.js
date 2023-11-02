import React from 'react'
import './Footer.css'
import { getFooterCopy, getFullYear } from '../utils/utils'

export const Footer = () => {
  return (
    <div className='App-footer' data-testid='app-footer'>
      <p>
        <em>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </em>
      </p>
    </div>
  )
}
