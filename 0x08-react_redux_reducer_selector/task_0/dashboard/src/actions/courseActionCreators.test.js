import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('Testing action creators', () => {
  it('should return { type: SELECT_COURSE, index: 1 } for selectCourse function', () => {
    const result = selectCourse(1);
    const expected = { type: SELECT_COURSE, index: 1 };

    expect(result).toEqual(expected);
  });

  it('should return { type: SELECT_COURSE, index: 1 } for selectCourse function', () => {
    const result = unSelectCourse(1);
    const expected = { type: UNSELECT_COURSE, index: 1 };

    expect(result).toEqual(expected);
  });
});
