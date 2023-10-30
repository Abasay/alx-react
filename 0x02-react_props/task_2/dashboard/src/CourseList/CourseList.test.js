import React from 'react'
import { render } from '@testing-library/react'
import { shallow } from 'enzyme'
import { CourseList } from './CourseList'

describe('Course List Component', () => {
  it('renders CourseList Component without crashing', () => {
    shallow(<CourseList />)
  })

  it('renders the 5 diff rows', () => {
    const wrapper = shallow(<CourseList />)
    expect(wrapper.find('CourseListRow')).toHaveLength(5)
  })
})
