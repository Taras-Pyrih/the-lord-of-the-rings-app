import { BOOKS_SUCCESS, BOOKS_FAILURE } from "../actionTypes/requestActionTypes.jsx";

const initialState = {
  bookData: [],
  isReady: false,
  notification: 'Завантаження списку книжок...'
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOKS_SUCCESS:
      return {
        ...state,
        bookData: action.data.docs,
        isReady: true,
        notification: ''
      };
    case BOOKS_FAILURE:
      return {
        ...state,
        bookData: [],
        isReady: false,
        notification: action.message
      };
    default:
      return state;
  }
};