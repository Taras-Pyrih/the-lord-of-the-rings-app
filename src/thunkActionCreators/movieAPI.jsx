import { getMovie } from "../requests/getMovie.jsx";
import { movieRequestSucceeded, movieRequestFailed } from "../actionCreators/requestActionCreators.jsx";

export const movieAPI = _id => async dispatch => {
  let response;

  try {
    response = await getMovie(_id);
  } catch (error) {
    dispatch(movieRequestFailed(error.message));
    
    return;
  }

  dispatch(movieRequestSucceeded(response.data));
};