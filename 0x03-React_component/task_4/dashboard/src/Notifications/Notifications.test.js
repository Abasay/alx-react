import React from 'react'
import { render, screen } from '@testing-library/react'
import { Notifications } from './Notifications'
import { shallow } from 'enzyme'
import { getLatestNotification } from '../utils/utils'

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
]
describe('Notifications Component when displayDrawer is false', () => {
  let renderWrapper
  let shallowWrapper
  beforeEach(() => {
    renderWrapper = render(<Notifications />)
    shallowWrapper = shallow(<Notifications />)
  })

  it('display menuItem when displayDrawer is false', () => {
    // render(<Notifications />)
    const txt = screen.getByText('Your notifications')
    expect(txt).toBeInTheDocument()
  })

  it('should not display div.Notifcations when the displayDrawer is false', () => {
    const wrapper = shallow(<Notifications />)
    expect(shallowWrapper.find('.Notifications').exists()).toBe(false)
  })

  it('menuItem is displayed when displayDrawer is ftrue', () => {
    expect(shallowWrapper.find('.menuItem').exists()).toBe(true)
  })

  it('should display div.Notifcations when the displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />)
    expect(wrapper.find('.Notifications').exists()).toBe(true)
  })

  it('renders the text renders correctly when passed empty array', () => {
    const wrapper = shallow(
      <Notifications displayDrawer={true} listNotifications={[]} />
    )

    expect(wrapper).toMatchSnapshot()
  })
})

describe('Notication component when displayDrawer is true', () => {
  let renderWrapper
  let shallowWrapper

  beforeEach(() => {
    renderWrapper = render(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    )
    shallowWrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    )
  })

  it('renders three list items', () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    )
    expect(shallowWrapper.find('NotificationItem')).toHaveLength(3)
  })

  it('renders the correct html for the first element', () => {
    const firstElem = shallowWrapper.find('NotificationItem').first()
    expect(firstElem.html()).toContain(
      '<li data-notification-type="default">New course available</li>'
    )
  })

  it('renders the text "Here is the list of notifications"', () => {
    const text = screen.getByText('Here is the list of notifications')
    expect(text).toBeInTheDocument()
  })

  it('renders text "no notification available now"', () => {
    render(<Notifications displayDrawer={true} listNotifications={[]} />)
    const text = screen.getByText('No new notification for now')
    expect(text).toBeInTheDocument()
  })

  it('Mock up the console function', () => {
    const consoleLogSpy = jest
      .spyOn(console, 'log')
      .mockImplementation(() => {})

    const { container } = render(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    )

    const notificationComponent = container.firstChild
    notificationComponent.markAsRead(1)

    expect(consoleLogSpy).toHaveBeenCalledWith('Notification 1 marked as read')

    consoleLogSpy.mockRestore()
  })
})
