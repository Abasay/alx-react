import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT,
} from './uiActionTypes';

export const login = (email, password) => {
  return {
    type: LOGIN,
    user: { email, password },
  };
};

export const loginSuccess = () => {
  return { type: LOGIN_SUCCESS };
};

export const loginFailure = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const displayNotificationDrawer = () => {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER,
  };
};

export const hideNotificationDrawer = () => {
  return {
    type: HIDE_NOTIFICATION_DRAWER,
  };
};

export const boundLogin = (email, password) => {
  return (dispatch) => {
    dispatch(login(email, password));
  };
};

export const boundLogout = () => {
  return (dispatch) => {
    dispatch(logout());
  };
};

export const boundDisplayNotificationDrawer = () => {
  return (dispatch) => {
    dispatch(displayNotificationDrawer());
  };
};

export const boundHideNotificationDrawer = () => {
  return (dispatch) => dispatch(hideNotificationDrawer());
};

export const loginRequest = (email, password) => async (dispatch) => {
  dispatch(login('mail', 'passwd'));
  try {
    const request = await fetch('http://localhost:3000/login-success.json');
    const result = await request.json();
    console.log(result);
    // result.then((res) => dispatch(loginSuccess()))
    return result;
  } catch (error) {
    // dispatch(loginFailure())
    console.log('error');
    return error;
  }
};

login('email', 'passwd');
