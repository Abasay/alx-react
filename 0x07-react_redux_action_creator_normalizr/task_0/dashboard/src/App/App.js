import React, { Component } from 'react';
import { Notifications } from '../Notifications/Notifications';
import { Header } from '../Header/Header';
import { Login } from '../Login/Login';
import { Footer } from '../Footer/Footer';
import { CourseList } from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import { BodySectionWithMarginBottom } from '../BodySection/BodySectionWithMarginBottom';
import { BodySection } from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
import { user, AppContext, listNotifications } from './AppContext';
import { getAllNotificationsByUser } from '../schema/notifications';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);

    this.state = {
      displayDrawer: false,
      user: user,
      logOut: this.logOut,
      listNotifications: listNotifications,
      markNotificationAsRead: this.markNotificationAsRead,
    };
    this.listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleKeyDown);
  }
  markNotificationAsRead = (id) => {
    const newNotification = this.state.listNotifications.filter(
      (notification) => {
        return notification.id !== id;
      }
    );

    this.setState({ listNotifications: newNotification });
  };

  logIn = (email, password) => {
    this.setState({
      user: {
        email: email,
        password: password,
        isLoggedIn: true,
      },
    });
  };
  logOut = () => {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    });
  };
  handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
      window.alert('Logging you out');
      this.props.logOut();
    }
  };

  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  };

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  };

  render() {
    console.log(getAllNotificationsByUser('5debd764a7c57c7839d722e9'));
    return (
      <AppContext.Provider
        value={{
          user: this.state.user,
          logOut: this.state.logOut,
          listNotifications: this.state.listNotifications,
          markNotificationAsRead: this.state.markNotificationAsRead,
        }}
      >
        <Notifications
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className='App'>
          <Header />
        </div>
        <div className={css(styles.body)}>
          {this.state.user.isLoggedIn ? (
            <BodySectionWithMarginBottom title='Course list'>
              <CourseList listCourses={this.listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title='Log in to continue'>
              <Login logIn={this.logIn} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title='News from the School'>
            <p>Hello, this is the body section containment component</p>
          </BodySection>
        </div>
        <div className={css(styles.footer)}>
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: function () {},
};

const styles = StyleSheet.create({
  body: {
    height: '80vh',
    borderBottom: '4px solid #e12948',
    borderTop: '4px solid #e12948',
  },
  footer: {
    width: '100%',
  },
});
