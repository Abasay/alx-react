import React from 'react'
import './Notifications.css'
import closeIcon from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils'
import { NotificationItem } from './NotificationItem'

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
        <NotificationItem type='default' value='New course available' />
        <NotificationItem type='urgent' value='New resume available' />
        <NotificationItem html={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  )
}
