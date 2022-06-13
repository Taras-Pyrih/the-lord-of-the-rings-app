import { CHARACTER_PAGE_SUCCESS, CHARACTER_PAGE_FAILURE, CURRENT_CHARACTER_PAGE,
         FILTER_IS_VISIBLE, ASCENDING, DESCENDING,
         SEARCH_IS_VISIBLE, SEARCH_VALUE } from "../actionTypes/requestActionTypes.jsx";

const initialState = {
  characterData: [],
  pageQuantity: 1,
  currentPage: 1,
  perPage: 50,
  filterIsVisible: false,
  criterion: 'asc',
  searchIsVisible: false,
  searchValue: '',
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
      case FILTER_IS_VISIBLE:
        return {
          ...state,
          filterIsVisible: action.visibility
        };
      case ASCENDING:
        return {
          ...state,
          criterion: 'asc'
        };
      case DESCENDING:
        return {
          ...state,
          criterion: 'desc'
        };
      case SEARCH_IS_VISIBLE:
        return {
          ...state,
          searchIsVisible: action.visibility
        };
      case SEARCH_VALUE:
        return {
          ...state,
          searchValue: action.searchValue
        };
    default:
      return state;
  }
};