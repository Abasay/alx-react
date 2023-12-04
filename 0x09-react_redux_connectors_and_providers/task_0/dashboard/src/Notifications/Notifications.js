import React, { Component } from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { NotificationItem } from './NotificationItem';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

export class Notifications extends React.Component {
  constructor(props) {
    super(props);
  }

  static contextType = AppContext;

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  handleBtn = () => {
    console.log('Close button has been clicked');
  };

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };
  render() {
    let { listNotifications, markNotificationAsRead } = this.context;
    return (
      <section className={css(styles.notificationSection)}>
        <div className='menuItem' onClick={this.props.handleDisplayDrawer}>
          {' '}
          Your notifications
        </div>
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
              onClick={this.props.handleHideDrawer}
            >
              <img src={closeIcon} alt='close icon' width={10} height={12} />
            </button>
            <p>Here is the list of notifications</p>
            {listNotifications?.length == 0 ? (
              <p>No new notification for now</p>
            ) : (
              listNotifications?.map((notification) => {
                return (
                  <ul key={notification.id}>
                    <NotificationItem
                      notificationId={notification.id}
                      type={notification.type}
                      value={notification.value && notification.value}
                      html={notification.html && notification.html}
                      markNotificationAsRead={markNotificationAsRead}
                    />
                  </ul>
                );
              })
            )}
          </div>
        )}
      </section>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.array,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: true,
  handleHideDrawer: false,
};

const styles = StyleSheet.create({
  notificationSection: {
    width: '25em',
    position: 'absolute',
    right: '10px',
  },
});
