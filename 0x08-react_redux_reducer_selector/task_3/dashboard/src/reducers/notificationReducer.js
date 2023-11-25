import { any } from 'prop-types';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';

const defaultState = {
  notifications: [],
  filter: null,
};

export const notificationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      state = {
        filter: 'DEFAULT',
        notifications: action.data.map((notification) => {
          return { ...notification, isRead: false };
        }),
      };
      return { ...state };
    case MARK_AS_READ:
      state = {
        filter: 'DEFAULT',
        notifications: state.notifications.map((notification) => {
          if (action.index === notification.id)
            return { ...notification, isRead: true };
          return { ...notification, isRead: false };
        }),
      };
      return { ...state };
    case SET_TYPE_FILTER:
      return { ...state, filter: action.filter };
    default:
      return state;
  }
};
