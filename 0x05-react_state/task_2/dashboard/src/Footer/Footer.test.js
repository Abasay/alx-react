import React from 'react'
import { render, screen } from '@testing-library/react'
import './Footer'
import { Footer } from './Footer'
import App from '../App/App'
import { getFullYear, getFooterCopy } from '../utils/utils'
import { shallow } from 'enzyme'
import { StyleSheetTestUtils } from 'aphrodite'
describe('Footer Component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection()
  })
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  })
  it('render without crashing', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper).toMatchSnapshot()
  })

  it('verify component renders at least "Copyright"', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper.text()).toContain('Copyright')
  })
})
