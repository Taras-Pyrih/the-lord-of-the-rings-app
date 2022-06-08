import { getQuotes } from "../requests/getQuotes.jsx";
import { quotesRequestSucceeded, quotesRequestFailed } from "../actionCreators/requestActionCreators.jsx";

export const quotesAPI = (currentPage, perPage) => dispatch => {
  getQuotes(currentPage, perPage).then(
    response => dispatch(quotesRequestSucceeded(response.data)),
    error => dispatch(quotesRequestFailed(error.message))
  );
};