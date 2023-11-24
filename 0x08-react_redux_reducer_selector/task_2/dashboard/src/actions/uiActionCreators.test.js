import React from 'react';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN,
  LOGOUT,
} from './uiActionTypes';
import {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login,
  logout,
} from './uiActionCreators';

describe('UI ACTION TESTING', () => {
  it('test the login action creator', () => {
    const result = login('abdulsalamasheem@gmail.com', 'Abasay');
    const expected = {
      type: LOGIN,
      user: { email: 'abdulsalamasheem@gmail.com', password: 'Abasay' },
    };
    expect(result).toEqual(expected);
  });

  it('test the logout function', () => {
    const result = logout();
    const expected = { type: LOGOUT };

    expect(result).toEqual(expected);
  });

  it('test the display Drawer function', () => {
    const result = displayNotificationDrawer();
    const expected = { type: DISPLAY_NOTIFICATION_DRAWER };

    expect(result).toEqual(expected);
  });

  it('test the hide display drawer', () => {
    const result = hideNotificationDrawer();
    const expected = { type: HIDE_NOTIFICATION_DRAWER };

    expect(result).toEqual(expected);
  });
});
