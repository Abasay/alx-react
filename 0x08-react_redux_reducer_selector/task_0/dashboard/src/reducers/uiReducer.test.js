import React from 'react';
import { uiReducer } from './uiActionTypes';
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes';
import { displayNotificationDrawer } from '../actions/uiActionCreators';
import { initialState } from './uiReducer';

describe('UI Reducer tests', () => {
  it('state returned should equal initial state when nothing is passed', () => {
    const expected = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };

    const result = uiReducer();

    expect(result).toEqual(expected);
  });

  it('state returned when SELECT_COURSE is passed should equal initial state', () => {
    const expected = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };

    const result = uiReducer();
    expect(result).toEqual(expected);
  });

  it('state returned when DISPLAY_NOTIFICATION_DRAWER is passed should equal initial state with isNotifcationDrawerVisible', () => {
    const expected = {
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    };

    const result = uiReducer(initialState, DISPLAY_NOTIFICATION_DRAWER);

    expect(result).toEqual(expected);
  });
});
