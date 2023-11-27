import { any } from 'prop-types';
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
} from '../actions/notificationActionTypes';
import { Map } from 'immutable';
import { notificationsNormalizer } from '../schema/courses';

const defaultState = Map({
  notifications: [],
  filter: null,
});

export const notificationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);
      const newData = normalizedData.entities.notifications.map(
        (notification) => {
          return {
            notification,
            isRead: false,
          };
        }
      );
      state.mergeIn(['notifications'], normalizedData.entities.notifications);
      return state.mergeIn(['filter'], 'DEFAULT');
    case MARK_AS_READ:
      return state.setIn(['notifications', action.index, 'isRead'], true);
    case SET_TYPE_FILTER:
      return state.setIn(['filter'], action.filter);
    default:
      return state;
  }
};
