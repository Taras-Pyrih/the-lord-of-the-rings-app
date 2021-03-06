import { getCharacters } from "../requests/getCharacters.jsx";
import { charactersRequestSucceeded, charactersRequestFailed } from "../actionCreators/requestActionCreators.jsx";

export const charactersAPI = (currentPage, perPage, criterion) => dispatch => {
  getCharacters(currentPage, perPage, criterion).then(
    response => dispatch(charactersRequestSucceeded(response.data)),
    error => dispatch(charactersRequestFailed(error.message))
  );
};