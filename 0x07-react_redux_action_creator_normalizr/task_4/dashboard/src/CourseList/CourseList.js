import React from 'react';
import { CourseListRow } from './CourseListRow';
import './CourseList.css';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

export const CourseList = ({ listCourses }) => {
  const bool = true;
  return (
    <table className={css(styles.table)}>
      <thead>
        <CourseListRow textFirstCell='Available courses' isHeader={bool} />

        <CourseListRow
          textFirstCell='Course name'
          isHeader={bool}
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
            );
          })
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.array,
};

CourseList.defaultProps = {
  listCourses: [],
};

const styles = StyleSheet.create({
  table: {
    width: '80%',
    margin: '20px auto',
    border: '1.5px solid grey',
  },
});
