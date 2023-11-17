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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      logOut: () => {
        console.log('logging out');
      },
    };
    this.listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    this.listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleKeyDown);
  }

  logIn = (email, password) => {
    this.setState({
      email: email,
      password: password,
      isLoggedIn: true,
    });
  };
  logOut = () => {
    this.setState({
      user: {
        email: '',
        password: '',
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
    return (
      <React.Fragment>
        <Notifications
          listNotifications={this.listNotifications}
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
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
              <Login login={this.logIn} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title='News from the School'>
            <p>Hello, this is the body section containment component</p>
          </BodySection>
        </div>
        <div className={css(styles.footer)}>
          <Footer />
        </div>
      </React.Fragment>
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
