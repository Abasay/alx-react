import React from 'react'
import { render, screen } from '@testing-library/react'
import { shallow } from 'enzyme'
import App from './App'
import { Notifications } from '../Notifications/Notifications'

describe('App component', () => {
  it('renders without crashing', () => {
    render(<App />)
  })

  it('should render the Notifications component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('Notifications')).toHaveLength(1)
  })

  it('should render the Header Component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('Header')).toHaveLength(1)
  })

  it('should contain the Login Component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('Login')).toHaveLength(1)
  })

  it('should contain the Footer Component', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('Footer')).toHaveLength(1)
  })

  it('check that CoureList is no included by default', () => {
    const wrapper = shallow(<App />)

    expect(wrapper.find('CourseList')).toHaveLength(0)
  })

  it('check for isLogIn True', () => {
    const wrapper = shallow(<App isLoggedIn={true} />)
    expect(wrapper.find('Login')).toHaveLength(0)
    expect(wrapper.find('CourseList')).toHaveLength(1)
  })
})
