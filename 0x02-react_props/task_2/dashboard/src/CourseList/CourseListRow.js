import React from 'react'
import './CourseList.css'

export const CourseListRow = ({
  isHeader = false,
  textFirstCell = 'required',
  textSecondCell = null,
}) => {
  if (isHeader) {
    return (
      <tr>
        {textSecondCell === null ? (
          <th colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th className='col-1'>{textFirstCell}</th>
            <th className='col-2'>{textSecondCell}</th>
          </>
        )}
      </tr>
    )
  }
  return (
    <tr>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  )
}
