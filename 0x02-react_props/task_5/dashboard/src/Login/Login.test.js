import React from 'react'
import { Login } from './Login'
import { shallow } from 'enzyme'

describe('Login Component', () => {
  it('should shallow render the login component', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should verify comeponent rnders 2 input tags and 2 labels', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.find('input')).toHaveLength(2)
    expect(wrapper.find('label')).toHaveLength(2)
  })
})
