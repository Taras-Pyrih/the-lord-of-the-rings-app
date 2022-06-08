import { getBooks } from "../requests/getBooks.jsx";
import { booksRequestSucceeded, booksRequestFailed } from "../actionCreators/requestActionCreators.jsx";

export const booksAPI = () => dispatch => {
  getBooks().then(
    response => dispatch(booksRequestSucceeded(response.data)),
    error => dispatch(booksRequestFailed(error.message))
  );
};