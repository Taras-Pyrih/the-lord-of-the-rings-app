import { CHARACTER_SUCCESS, CHARACTER_FAILURE } from "../actionTypes/requestActionTypes.jsx";

const initialState = {
  currentCharacterData: {},
  isReady: false,
  notification: 'Завантаження профайлу персонажу...'
};

export const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTER_SUCCESS:
      return {
        ...state,
        currentCharacterData: action.data.docs[0],
        isReady: true,
        notification: ''
      };
    case CHARACTER_FAILURE:
      return {
        ...state,
        currentCharacterData: {},
        isReady: false,
        notification: action.message
      };
    default:
      return state;
  }
};