import React from 'react';
import { getLatestNotification } from '../utils/utils';

export const user = {
  email: '',
  password: '',
  isLoggedIn: false,
};

export const logOut = () => {
  console.log('logging out');
};

export const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

export const markNotificationAsRead = () => {};

export const AppContext = React.createContext(
  user,
  logOut,
  listNotifications,
  markNotificationAsRead
);
