import { MOVIES_SUCCESS, MOVIES_FAILURE } from "../actionTypes/requestActionTypes.jsx";

const initialState = {
  movieData: [],
  isReady: false,
  notification: 'Завантаження списку фільмів...'
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIES_SUCCESS:
      return {
        ...state,
        movieData: action.data.docs,
        isReady: true,
        notification: ''
      };
    case MOVIES_FAILURE:
      return {
        ...state,
        movieData: [],
        isReady: false,
        notification: action.message
      };
    default:
      return state;
  }
};