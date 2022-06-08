import { CHARACTER_PAGE_SUCCESS, CHARACTER_PAGE_FAILURE, CURRENT_CHARACTER_PAGE } from "../actionTypes/requestActionTypes.jsx";

const initialState = {
  characterData: [],
  pageQuantity: 1,
  currentPage: 1,
  perPage: 50,
  isReady: false,
  notification: 'Завантаження списку персонажів...',
};

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTER_PAGE_SUCCESS:
      return {
        ...state,
        characterData: action.data.docs,
        pageQuantity: action.data.pages,
        isReady: true,
        notification: ''
      };
    case CHARACTER_PAGE_FAILURE:
      return {
        ...state,
        characterData: [],
        pageQuantity: 1,
        isReady: false,
        notification: action.message
      };
    case CURRENT_CHARACTER_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    default:
      return state;
  }
};