import React from 'react'
import PropTypes, { string } from 'prop-types'

export class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <li
        data-notification-type={this.props.type}
        dangerouslySetInnerHTML={this.props.html}
        onClick={() => markAsRead(this.props.notificationId)}
      >
        {this.props.value}
      </li>
    )
  }
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
