import * as types from '../constants/actions-types';

// EXAMPLE: Update message
const message = (state = 'Hello World!', action) => {
  switch (action.type) {
    case types.UPDATE_MESSAGE: {
      return action.message;
    }

    default:
      return state;
  }
};

export default message;
