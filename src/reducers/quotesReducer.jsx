import { QUOTE_PAGE_SUCCESS, QUOTE_PAGE_FAILURE, CURRENT_QUOTE_PAGE } from "../actionTypes/requestActionTypes.jsx";

const initialState = {
  quoteData: [],
  pageQuantity: 1,
  currentPage: 1,
  perPage: 50,
  isReady: false,
  notification: 'Завантаження списку цитат...'
};

export const quotesReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUOTE_PAGE_SUCCESS:
      return {
        ...state,
        quoteData: action.data.docs,
        pageQuantity: action.data.pages,
        isReady: true,
        notification: ''
      };
    case QUOTE_PAGE_FAILURE:
      return {
        ...state,
        quoteData: [],
        pageQuantity: 1,
        isReady: false,
        notification: action.message
      };
    case CURRENT_QUOTE_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };
    default:
      return state;
  }
};