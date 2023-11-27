import React from 'react';
import { courseReducer } from './courseReducer';
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from '../actions/courseActionTypes';

describe('TESTING COURSE REEDUCERS', () => {
  it('test default state returns an emppty array', () => {
    const expected = [];
    const result = courseReducer(undefined, {}).toJS().courses;

    expect(result).toEqual(expected);
  });

  it('test that FETCH_COURSE_SUCCESS returns the data passed', () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        {
          id: 1,
          name: 'ES6',
          credit: 60,
        },
        {
          id: 2,
          name: 'Webpack',
          credit: 20,
        },
        {
          id: 3,
          name: 'React',
          credit: 40,
        },
      ],
    };
    const expected = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];

    const result = courseReducer([], action).toJS().courses;

    expect(result).toEqual(expected);
  });

  it('Test that SELECT_COURSE  returns the date with the right item updated', () => {
    const initialState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];

    const expected = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: true,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];

    const action = {
      type: SELECT_COURSE,
      index: 2,
    };

    const result = courseReducer(initialState, action).toJS().courses;
    expect(result).toEqual(expected);
  });

  it('Test that UNSELECT_COURSE  returns the date with the right item updated', () => {
    const initialState = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: true,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];

    const expected = [
      {
        id: 1,
        name: 'ES6',
        isSelected: false,
        credit: 60,
      },
      {
        id: 2,
        name: 'Webpack',
        isSelected: false,
        credit: 20,
      },
      {
        id: 3,
        name: 'React',
        isSelected: false,
        credit: 40,
      },
    ];

    const action = {
      type: UNSELECT_COURSE,
      index: 2,
    };

    const result = courseReducer(initialState, action).toJS().courses;
    expect(result).toEqual(expected);
  });
});
