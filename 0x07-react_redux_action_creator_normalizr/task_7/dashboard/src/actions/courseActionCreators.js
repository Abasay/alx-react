import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    index: index,
  };
};

export const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    index: index,
  };
};

export const boundSelectCourse = (index) => {
  return (dispatch) => {
    dispatch(selectCourse(index));
  };
};

export const boundUnselectCourse = (index) => {
  return (dispatch) => {
    dispatch(unSelectCourse(index));
  };
};
