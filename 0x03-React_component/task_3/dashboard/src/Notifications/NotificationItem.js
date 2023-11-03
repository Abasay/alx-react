import React from 'react'
import PropTypes, { string } from 'prop-types'

export const NotificationItem = ({
  notificationId,
  type,
  html,
  value,
  markAsRead,
}) => {
  return (
    <li
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
      onClick={() => markAsRead(notificationId)}
    >
      {value}
    </li>
  )
}

NotificationItem.propTypes = {
  notificationId: PropTypes.number,
  html: PropTypes.shape({ __html: string }),
  type: PropTypes.string,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
}

NotificationItem.defaultProps = {
  type: 'default',
}
