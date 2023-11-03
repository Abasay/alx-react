import React, { Component } from 'react'
import './Notifications.css'
import closeIcon from '../assets/close-icon.png'
import { getLatestNotification } from '../utils/utils'
import { NotificationItem } from './NotificationItem'
import PropTypes from 'prop-types'

export class Notifications extends Component {
  constructor(props) {
    super(props)
  }

  handleBtn = () => {
    console.log('Close button has been clicked')
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`)
  }
  render() {
    return (
      <section>
        <div className='menuItem'>Your notifications</div>
        {this.props.displayDrawer && (
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
              onClick={this.handleBtn}
            >
              <img src={closeIcon} alt='close icon' width={10} height={12} />
            </button>
            <p>Here is the list of notifications</p>
            {this.props.listNotifications.length == 0 ? (
              <p>No new notification for now</p>
            ) : (
              this.props.listNotifications.map((notification) => {
                return (
                  <ul key={notification.id}>
                    <NotificationItem
                      notificationId={notification.id}
                      type={notification.type}
                      value={notification.value && notification.value}
                      html={notification.html && notification.html}
                      markAsRead={this.markAsRead}
                    />
                  </ul>
                )
              })
            )}
          </div>
        )}
      </section>
    )
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.array,
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
}
