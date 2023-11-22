import React from 'react'
import { shallow } from 'enzyme'
import { BodySectionWithMarginBottom } from './BodySectionWithMarginBottom'
import { StyleSheetTestUtils } from 'aphrodite'

describe('BodySectionWithMarginBottom', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection()
  })
  it('shallow render corectly', () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title='Test' />)
    expect(wrapper.find('BodySection')).toHaveLength(1)
    expect(wrapper.find('BodySection').props().title).toEqual('Test')
  })
})
