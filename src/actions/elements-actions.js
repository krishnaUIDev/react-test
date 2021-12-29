import axios from 'axios';
import * as types from '../constants/actions-types';

// EXAMPLE: Load elements from service
const actionLoadElements = () => (
  dispatch => (
    axios.get('http://localhost:3000/elements')
      .then((response) => {
        dispatch({
          type: types.LOAD_FROM_SERVICE,
          elements: response.data,
        });
      })
      .catch(error => console.log('ERROR -> GET ELEMENTS FROM SERVICE', error))
  )
);

export default actionLoadElements;
