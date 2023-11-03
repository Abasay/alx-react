import React from 'react'
import './CourseList.css'
import PropTypes from 'prop-types'

export const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
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

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.string || PropTypes.number,
}

CourseListRow.defaultProps = {
  isHeader: false,
  textFirstCell: 'required',
  textSecondCell: null,
}
