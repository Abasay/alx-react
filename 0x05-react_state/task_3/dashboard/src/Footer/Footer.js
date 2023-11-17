import React, { useContext } from 'react';
import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils';
import { AppContext } from '../App/AppContext';

export const Footer = () => {
  const { user } = useContext(AppContext);
  return (
    <div className='App-footer' data-testid='app-footer'>
      {user.isLoggedIn && (
        <p>
          <a href=''>Contact us</a>
        </p>
      )}
      <p>
        <em>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </em>
      </p>
    </div>
  );
};
