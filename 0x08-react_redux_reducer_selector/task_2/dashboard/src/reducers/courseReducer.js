import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

export const defaultState = [];

export const courseReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      state = action.data.map((obj) => {
        return { ...obj, isSelected: false };
      });
      return state;
    case SELECT_COURSE:
      const updatedCourses = state.map((course) => {
        if (course.id === action.index) return { ...course, isSelected: true };

        return course;
      });
      return updatedCourses;
    case UNSELECT_COURSE:
      const courses = state.map((course) => {
        if (course.id === action.index) return { ...course, isSelected: false };

        return course;
      });
      return courses;
    default:
      return state;
  }
};
