import React from 'react'
import { shallow } from 'enzyme'
import { NotificationItem } from './NotificationItem'
import { screen, render } from '@testing-library/react'

describe('Notification Item test', () => {
  it('should render without fail', () => {
    const wrapper = shallow(<NotificationItem />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render the test', () => {
    render(<NotificationItem type='default' value='test' />)
    const txt = screen.getByText('test')
    expect(txt).toBeInTheDocument()
  })
})
