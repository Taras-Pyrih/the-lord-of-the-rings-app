import { MOVIE_SUCCESS, MOVIE_FAILURE } from "../actionTypes/requestActionTypes.jsx";

const initialState = {
  currentMovieData: {},
  isReady: false,
  notification: 'Завантаження профайлу фільму...'
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_SUCCESS:
      return {
        ...state,
        currentMovieData: action.data.docs[0],
        isReady: true,
        notification: ''
      };
    case MOVIE_FAILURE:
      return {
        ...state,
        currentMovieData: {},
        isReady: false,
        notification: action.message
      };
    default:
      return state;
  }
};