import React from 'react'
import { render, shallow } from 'enzyme'
import { NotificationItem } from './NotificationItem'

describe('Notification Item test', () => {
 it('should render without fail', () => {
  const wrapper = shallow(<NotificationItem />)
  expect(wrapper).toMatchSnapshot()
 })
 
 it('should render the test', () => {
  render(<NotificationItem />)
  
 })
})
