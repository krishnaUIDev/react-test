import * as types from '../constants/actions-types';

// EXAMPLE: Elements REDUCER
const elements = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_FROM_SERVICE:
      return action.elements;

    default:
      return state;
  }
};

export default elements;
