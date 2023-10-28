import React from 'react'
import './Notifications.css'
import closeIcon from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils'

export const Notifications = () => {
  const handleBtn = () => {
    console.log('Close button has been clicked')
  }
  return (
    <div className='Notifications' data-id='app-notification'>
      <button
        aria-label='Close'
        style={{
          position: 'absolute',
          right: '5px',
          top: '10px',
          backgroundColor: '#fff',
          border: 'none',
        }}
        onClick={handleBtn}
      >
        <img src={closeIcon} alt='close icon' width={10} height={12} />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li
          dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
          data-priority='urgent'
        />
      </ul>
    </div>
  )
}
