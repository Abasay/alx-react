import React from 'react'
import { render, screen } from '@testing-library/react'
import { shallow } from 'enzyme'
import { CourseListRow } from './CourseListRow'

describe('CourseListRow Component', () => {
  it('renders one cell eith colSpan = 2 when textSecondCell does not exist', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell='Header Text' />
    )
    expect(wrapper.find('th')).toHaveLength(1)
    expect(wrapper.find('th').prop('colSpan')).toEqual(2)
  })

  it('renders two cells when textSecondCell', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell='first cell text'
        textSecondCell='text second text'
      />
    )
    expect(wrapper.find('th')).toHaveLength(2)
  })

  it('renders correctly 2 td elements in tr when isHeader is false', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell='first cell'
        textSecondCell='second cell'
      />
    )
    const tr = wrapper.find('tr')
    expect(tr.find('td')).toHaveLength(2)
  })
})
