import { getMovies } from "../requests/getMovies.jsx";
import { moviesRequestSucceeded, moviesRequestFailed } from "../actionCreators/requestActionCreators.jsx";

export const moviesAPI = () => dispatch => {
  getMovies().then(
    response => dispatch(moviesRequestSucceeded(response.data)),
    error => dispatch(moviesRequestFailed(error.message))
  );
};