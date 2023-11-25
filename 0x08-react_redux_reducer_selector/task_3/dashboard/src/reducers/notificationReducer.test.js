import React from 'react';
import { notificationReducer } from './notificationReducer';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

describe('NOTIFICATION REDUCER TESTING', () => {
  it('returns a list of notifications with filter type when  FETCH_NOTIFICATIONS_SUCCESS is triggerd', () => {
    const expected = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };

    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        {
          id: 1,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };

    const result = notificationReducer([], action);

    expect(result).toEqual(expected);
  });

  it('update the notification list with those that have been read', () => {
    const expected = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: true,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };

    const prevState = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };

    const action = {
      type: MARK_AS_READ,
      index: 2,
    };

    const result = notificationReducer(prevState, action);

    expect(result).toEqual(expected);
  });

  it('should set the filter type when the SET_TYPE_FILTER action is triggered', () => {
    const prevState = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };

    const expected = {
      filter: 'URGENT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };

    const action = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT',
    };

    const result = notificationReducer(prevState, action);

    expect(result).toEqual(expected);
  });
});
