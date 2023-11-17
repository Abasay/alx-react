import React from 'react';
import './CourseList.css';
import PropTypes, { string } from 'prop-types';

export const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const backGround = isHeader ? '#deb5b545' : '#f5f5f5ab';

  if (isHeader) {
    return (
      <tr style={{ backgroundColor: backGround }}>
        {textSecondCell === null ? (
          <th colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th className='col-1'>{textFirstCell}</th>
            <th className='col-2'>{textSecondCell}</th>
          </>
        )}
      </tr>
    );
  }
  return (
    <tr style={{ backgroundColor: backGround }}>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
    </tr>
  );
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textFirstCell: 'required',
  textSecondCell: null,
};
