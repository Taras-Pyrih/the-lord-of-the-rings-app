import { getCharacter } from "../requests/getCharacter.jsx";
import { characterRequestSucceeded, characterRequestFailed } from "../actionCreators/requestActionCreators.jsx";

export const characterAPI = _id => async dispatch => {
  let response;

  try {
    response = await getCharacter(_id);
  } catch (error) {
    dispatch(characterRequestFailed(error.message));
    
    return;
  }

  dispatch(characterRequestSucceeded(response.data));
};