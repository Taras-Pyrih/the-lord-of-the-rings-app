import { getChapters } from "../requests/getChapters.jsx";
import { chaptersRequestSucceeded, chaptersRequestFailed } from "../actionCreators/requestActionCreators.jsx";

export const chaptersAPI = () => dispatch => {
  getChapters().then(
    response => dispatch(chaptersRequestSucceeded(response.data)),
    error => dispatch(chaptersRequestFailed(error.message))
  );
};