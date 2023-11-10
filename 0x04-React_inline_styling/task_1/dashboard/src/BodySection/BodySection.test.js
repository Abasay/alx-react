import React from 'react'
import { mount, shallow } from 'enzyme'
import { BodySection } from './BodySection'

describe('Body Section', () => {
  it('shallow render the component correctly', () => {
    const wrapper = shallow(
      <BodySection title='test title'>
        <p>test children node</p>
      </BodySection>
    )
    expect(wrapper).toMatchSnapshot()
  })
  it('check children', () => {
    const wrapper = mount(
      <BodySection title='test title'>
        <p>test children node</p>
      </BodySection>
    )
    expect(wrapper.find('h2').text()).toEqual('test title')
    expect(wrapper.find('p').text()).toEqual('test children node')
  })
})
