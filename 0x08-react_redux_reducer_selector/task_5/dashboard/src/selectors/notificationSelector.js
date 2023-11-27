import { Map } from 'immutable';
import { notification } from '../schema/notifications';

export const filterTypeSelected = (state) => {
  return state.get('filter');
};

export const getNotifications = (state) => {
  return state.get('notifications');
};

export const getUnreadNotifications = (state) => {
  const unreads = state.notifications.filter(
    (notification) => notification.get('isRead') === false
  );
  return Map(unreads);
};
