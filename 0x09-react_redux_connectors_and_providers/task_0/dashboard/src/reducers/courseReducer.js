import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';
import { Map } from 'immutable';
import { courseNormalizer } from '../schema/courses';

export const defaultState = Map({
  courses: [],
});

export const courseReducer = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      const normalizedData = courseNormalizer(action.data);
      const newData = normalizedData.entities.courses.map((course) => {
        return {
          course,
          isSelected: false,
        };
      });
      return state.mergeIn(['courses'], normalizedData.entities.courses);

    case SELECT_COURSE:
      return state.setIn(['courses', action.index, 'isSelected'], true);
    case UNSELECT_COURSE:
      return state.setIn(['courses', action.index, 'isSelected'], false);

    default:
      return state;
  }
};
