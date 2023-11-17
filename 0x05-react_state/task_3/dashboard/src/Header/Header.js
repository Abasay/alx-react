import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';

export class Header extends React.Component {
  static contextType = AppContext;

  render() {
    let { user, logOut } = this.context;

    return (
      <div className={css(styles.header)}>
        <img src={logo} alt='holberton logo' width={250} height={250} />
        <h1 className={css(styles.h1)}>School dashboard</h1>
        <section className={css(styles.logoutSection)}>
          {user.isLoggedIn && (
            <p>
              Welcome {user.email}{' '}
              <a id='logoutSection' onClick={logOut}>
                <em>logout</em>
              </a>
            </p>
          )}
        </section>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    height: '250px',
    alignItems: 'center',
  },
  h1: {
    color: '#e12948',
  },
  logoutSection: {
    marginRight: '-20px',
  },
});
