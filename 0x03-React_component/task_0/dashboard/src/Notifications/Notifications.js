import React from 'react'
import './Notifications.css'
import closeIcon from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils'
import { NotificationItem } from './NotificationItem'
import PropTypes from 'prop-types'

export const Notifications = ({ displayDrawer, listNotifications }) => {
  const handleBtn = () => {
    console.log('Close button has been clicked')
  }
  return (
    <section>
      <div className='menuItem'>Your notifications</div>
      {displayDrawer && (
        <div className='Notifications' data-id='app-notification'>
          <button
            aria-label='Close'
            style={{
              position: 'absolute',
              right: '5px',
              top: '20px',
              backgroundColor: '#fff',
              border: 'none',
            }}
            onClick={handleBtn}
          >
            <img src={closeIcon} alt='close icon' width={10} height={12} />
          </button>
          <p>Here is the list of notifications</p>
          {listNotifications.length == 0 ? (
            <p>No new notification for now</p>
          ) : (
            listNotifications.map((notification) => {
              return (
                <ul key={notification.id}>
                  <NotificationItem
                    type={notification.type}
                    value={notification.value && notification.value}
                    html={notification.html && notification.html}
                  />
                </ul>
              )
            })
          )}
          {/* <ul>
            <NotificationItem type='default' value='New course available' />
            <NotificationItem type='urgent' value='New resume available' />
            <NotificationItem
              html={{ __html: getLatestNotification() }}
              type='urgent'
            />
          </ul> */}
        </div>
      )}
    </section>
  )
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.array,
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
}
