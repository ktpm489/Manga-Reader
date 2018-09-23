import axios from 'axios';

import { GET_ALL_MANGA } from './types';

const getAllManga = () => {
  return async (dispatch) => {
    axios.get('https://www.mangaeden.com/api/list/0/?p=1&l=26')
      .then(result => {
        return dispatch({
          type: GET_ALL_MANGA,
          payload: result,
        });
      })
      .catch(err => console.log('Error')); // eslint-disable-line
  }
}

export {
  getAllManga,
};
