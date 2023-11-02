import React from 'react'
import { render } from '@testing-library/react'
import { shallow } from 'enzyme'
import { CourseList } from './CourseList'

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
]
describe('Course List Component', () => {
  it('renders CourseList Component without crashing', () => {
    shallow(<CourseList />)
  })

  it('renders the 5 diff rows', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />)
    expect(wrapper.find('CourseListRow')).toHaveLength(5)
  })
})

describe('Course List Component when passing props', () => {
  let renderWrapper
  let shallowWrapper
  beforeEach(() => {
    renderWrapper = render(<CourseList listCourses={listCourses} />)
    shallowWrapper = shallow(<CourseList listCourses={listCourses} />)
  })

  it('should render correctly when the element props are passed', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />)

    expect(shallowWrapper.find('CourseListRow')).toHaveLength(5)
  })
})
