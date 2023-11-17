import React from 'react';

export const user = {
  email: '',
  password: '',
  isLoggedIn: false,
};

const logOut = () => {
  console.log('logging out');
};

const AppContext = React.createContext(user, logOut);
