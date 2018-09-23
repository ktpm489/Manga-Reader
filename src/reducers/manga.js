import { GET_ALL_MANGA } from '../actions/types';

const initialState = {
  data: null,
  isLoading: true,
};

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_ALL_MANGA:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.manga,
      }
    default:
      return state;
  }
}