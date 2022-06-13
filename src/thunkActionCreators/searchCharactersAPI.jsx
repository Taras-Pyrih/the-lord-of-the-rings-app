import { getSearchCharacters } from "../requests/getSearchCharacters.jsx";
import { charactersRequestSucceeded, charactersRequestFailed } from "../actionCreators/requestActionCreators.jsx";

export const searchCharactersAPI = (currentPage, perPage, criterion, searchValue) => dispatch => {
  getSearchCharacters(currentPage, perPage, criterion, searchValue).then(
    response => dispatch(charactersRequestSucceeded(response.data)),
    error => dispatch(charactersRequestFailed(error.message))
  );
};