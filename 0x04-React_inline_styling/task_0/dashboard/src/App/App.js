import React, { Component } from 'react'
import { Notifications } from '../Notifications/Notifications'
import { Header } from '../Header/Header'
import { Login } from '../Login/Login'
import { Footer } from '../Footer/Footer'
import { CourseList } from '../CourseList/CourseList'
import PropTypes from 'prop-types'
import { getLatestNotification } from '../utils/utils'
import { BodySectionWithMarginBottom } from '../BodySection/BodySectionWithMarginBottom'
import { BodySection } from '../BodySection/BodySection'
import { StyleSheet, css } from 'aphrodite'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
  ]

  listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ]

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleKeyDown)
  }

  handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'h') {
      window.alert('Logging you out')
      this.props.logOut()
    }
  }

  render() {
    return (
      <React.Fragment>
        <Notifications listNotifications={this.listNotifications} />
        <div className='App'>
          <Header />
        </div>
        <div className={css(styles.body)}>
          {this.props.isLoggedIn ? (
            <BodySectionWithMarginBottom title='Course list'>
              <CourseList listCourses={this.listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title='Log in to continue'>
              <Login />
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
    )
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: function () {},
}

const styles = StyleSheet.create({
  body: {
    height: '80vh',
    borderBottom: '4px solid #e12948',
    borderTop: '4px solid #e12948',
  },
  footer: {
    width: '100%',
  },
})
