import React from 'react';

export const user = {
  email: '',
  password: '',
  isLoggedIn: false,
};

export const logOut = () => {
  console.log('logging out');
};

export const AppContext = React.createContext(user, logOut);
