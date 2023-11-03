import React from 'react'
import { shallow } from 'enzyme'
import { BodySectionWithMarginBottom } from './BodySectionWithMarginBottom'

describe('BodySectionWithMarginBottom', () => {
  it('shallow render corectly', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title='Test' />)
    expect(wrapper.find('BodySection')).toHaveLength(1)
    expect(wrapper.find('BodySection').props().title).toEqual('Test')
  })
})
