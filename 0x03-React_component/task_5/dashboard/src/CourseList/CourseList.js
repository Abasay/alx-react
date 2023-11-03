import React from 'react'
import { CourseListRow } from './CourseListRow'
import './CourseList.css'
import PropTypes from 'prop-types'

export const CourseList = ({ listCourses }) => {
  return (
    <table>
      <thead>
        <CourseListRow textFirstCell='Available courses' isHeader={true} />

        <CourseListRow
          textFirstCell='Course name'
          isHeader={true}
          textSecondCell='Credit'
        />
      </thead>
      <tbody>
        {listCourses.length == 0 ? (
          <tr>No course available yet</tr>
        ) : (
          listCourses.map((course) => {
            return (
              <CourseListRow
                key={course.id}
                isHeader={false}
                textFirstCell={course.name}
                textSecondCell={course.credit}
              />
            )
          })
        )}
      </tbody>
    </table>
  )
}

CourseList.propTypes = {
  listCourses: PropTypes.array,
}

CourseList.defaultProps = {
  listCourses: [],
}
