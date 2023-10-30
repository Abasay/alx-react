import React from 'react'
import { render, screen } from '@testing-library/react'
import { Notifications } from './Notifications'
import { shallow } from 'enzyme'

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    render(<Notifications />)
  })

  it('renders three list items', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />)
    expect(wrapper.find('NotificationItem')).toHaveLength(3)
  })

  it('renders the correct html for the first element', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />)
    const firstElem = wrapper.find('NotificationItem').first()
    expect(firstElem.html()).toContain(
      '<li data-notification-type="default">New course available</li>'
    )
  })

  it('renders the text "Here is the list of notifications"', () => {
    render(<Notifications displayDrawer={true} />)

    const text = screen.getByText('Here is the list of notifications')
    expect(text).toBeInTheDocument()
  })

  it('display menuItem when displayDrawer is false', () => {
    render(<Notifications />)
    const txt = screen.getByText('Your notifications')
    expect(txt).toBeInTheDocument()
  })

  it('should not display div.Notifcations when the displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />)
    expect(wrapper.find('.Notifications').exists()).toBe(false)
  })

  it('menuItem is displayed when displayDrawer is ftrue', () => {
    const wrapper = shallow(<Notifications />)
    expect(wrapper.find('.menuItem').exists()).toBe(true)
  })

  it('should display div.Notifcations when the displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />)
    expect(wrapper.find('.Notifications').exists()).toBe(true)
  })
})
