import React from 'react'
import { render, screen } from '@testing-library/react'
import { Notifications } from './Notifications'
import { shallow } from 'enzyme'

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    render(<Notifications />)
  })

  it('renders three list items', () => {
    const wrapper = shallow(<Notifications />)
    expect(wrapper.find('NotificationItem')).toHaveLength(3)
  })

  it('renders the correct html for the first element', () => {
    const wrapper = shallow(<Notifications />)
    const firstElem = wrapper.find('NotificationItem').first()
    expect(firstElem.html()).toContain(
      '<li data-notification-type="default">New course available</li>'
    )
  })

  it('renders the text "Here is the list of notifications"', () => {
    render(<Notifications />)

    const text = screen.getByText('Here is the list of notifications')
    expect(text).toBeInTheDocument()
  })
})
