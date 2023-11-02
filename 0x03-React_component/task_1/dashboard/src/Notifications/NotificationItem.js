import React from 'react'
import PropTypes, { string } from 'prop-types'

export const NotificationItem = ({ type, html, value }) => {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}>
      {value}
    </li>
  )
}

NotificationItem.propTypes = {
  html: PropTypes.shape({ __html: string }),
  type: PropTypes.string,
  value: PropTypes.string,
}

NotificationItem.defaultProps = {
  type: 'default',
}
