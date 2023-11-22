import React from 'react'
import { shallow } from 'enzyme'
import { Header } from './Header'
import { StyleSheetTestUtils } from 'aphrodite'

describe('Header Component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection()
  })
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  })
  it('renders without crashing', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
  })

  it('verify that the components render h1 and img', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.find('img')).toHaveLength(1)
    expect(wrapper.find('h1')).toHaveLength(1)
  })
})
