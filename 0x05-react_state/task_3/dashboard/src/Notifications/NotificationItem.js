import React from 'react';
import PropTypes, { string } from 'prop-types';
import { AppContext, markNotificationAsRead } from '../App/AppContext';

export class NotificationItem extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  static contextType = AppContext;
  render() {
    let { markNotificationAsRead } = this.context;
    return (
      <li
        data-notification-type={this.props.type}
        dangerouslySetInnerHTML={this.props.html}
        onClick={() => markNotificationAsRead(this.props.notificationId)}
      >
        {this.props.value}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  notificationId: PropTypes.number,
  html: PropTypes.shape({ __html: string }),
  type: PropTypes.string,
  value: PropTypes.string,
  markNotificationAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
};
