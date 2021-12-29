import * as types from '../constants/actions-types';

// EXAMPLE: Update message
const updateMessage = () => (
  {
    type: types.UPDATE_MESSAGE,
    message: 'Hola Mundo!',
  }
);

export default updateMessage;
