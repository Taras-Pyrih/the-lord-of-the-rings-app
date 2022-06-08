import { CHAPTERS_SUCCESS, CHAPTERS_FAILURE } from "../actionTypes/requestActionTypes.jsx";

const initialState = {
  chapterData: [],
  isReady: false,
  notification: 'Завантаження списку розділів...'
};

export const chaptersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHAPTERS_SUCCESS:
      return {
        ...state,
        chapterData: action.data.docs,
        isReady: true,
        notification: ''
      };
    case CHAPTERS_FAILURE:
      return {
        ...state,
        chapterData: [],
        isReady: false,
        notification: action.message
      };
    default:
      return state;
  }
};