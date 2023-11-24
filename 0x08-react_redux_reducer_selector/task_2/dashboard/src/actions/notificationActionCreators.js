import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

export const markAsAread = (index) => {
  return { type: MARK_AS_READ, index: index };
};

export const setNotificationFilter = (filter) => {
  return { type: SET_TYPE_FILTER, filter: filter };
};

export const boundMarkAsRead = (index) => {
  return (dispatch) => {
    dispatch(markAsAread(index));
  };
};

export const boundSetNotificationFilter = (filter) => {
  return (dispatch) => {
    dispatch(setNotificationFilter(filter));
  };
};
