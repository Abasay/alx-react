import { displayNotificationDrawer } from '../actions/uiActionCreators';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from '../actions/uiActionTypes';
import { initialState } from './uiReducer';

export const uiReducer = (state = initialState, action) => {
  // const { type, payload } = action;
  switch (action) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.withMutations((values) =>
        values.set('isNotificationDrawerVisible', true)
      );
    case HIDE_NOTIFICATION_DRAWER:
      return state.withMutations((values) =>
        values.set('isNotificationDrawerVisible', false)
      );
    case LOGIN_SUCCESS:
      return state.withMutations((values) =>
        values.set('isUserLoggedIn', true)
      );
    case LOGIN_FAILURE:
      return state.withMutations((values) =>
        values.set('isUserLoggedIn', false)
      );
    default:
      return state;
  }
};
