import { BOOKS_SUCCESS, BOOKS_FAILURE,
         MOVIES_SUCCESS, MOVIES_FAILURE,
         MOVIE_SUCCESS, MOVIE_FAILURE,
         CHARACTER_PAGE_SUCCESS, CHARACTER_PAGE_FAILURE, CURRENT_CHARACTER_PAGE,
         FILTER_IS_VISIBLE, ASCENDING, DESCENDING,
         SEARCH_IS_VISIBLE, SEARCH_VALUE,
         CHARACTER_SUCCESS, CHARACTER_FAILURE,
         QUOTE_PAGE_SUCCESS, QUOTE_PAGE_FAILURE, CURRENT_QUOTE_PAGE,
         CHAPTERS_SUCCESS, CHAPTERS_FAILURE } from "../actionTypes/requestActionTypes.jsx";
// booksRequest
export const booksRequestSucceeded = data => {
  return { type: BOOKS_SUCCESS, data };
};

export const booksRequestFailed = message => {
  return { type: BOOKS_FAILURE, message };
};
// moviesRequest
export const moviesRequestSucceeded = data => {
  return { type: MOVIES_SUCCESS, data };
};

export const moviesRequestFailed = message => {
  return { type: MOVIES_FAILURE, message };
};
// movieRequest
export const movieRequestSucceeded = data => {
  return { type: MOVIE_SUCCESS, data };
};

export const movieRequestFailed = message => {
  return { type: MOVIE_FAILURE, message };
};
// charactersRequest
export const charactersRequestSucceeded = data => {
  return { type: CHARACTER_PAGE_SUCCESS, data };
};

export const charactersRequestFailed = message => {
  return { type: CHARACTER_PAGE_FAILURE, message };
};

export const setCurrentCharacterPage = currentPage => {
  return { type: CURRENT_CHARACTER_PAGE, currentPage };
};

export const setFilterIsVisible = visibility => {
  return { type: FILTER_IS_VISIBLE, visibility };
};

export const setAscending = () => {
  return { type: ASCENDING, payload: 'asc' };
};

export const setDescanding = () => {
  return { type: DESCENDING, payload: 'desc' };
};

export const setSearchIsvisible = visibility => {
  return { type: SEARCH_IS_VISIBLE, visibility };
};

export const setSearchValue = searchValue => {
  return { type: SEARCH_VALUE, searchValue };
};
// characterRequest
export const characterRequestSucceeded = data => {
  return { type: CHARACTER_SUCCESS, data };
};

export const characterRequestFailed = message => {
  return { type: CHARACTER_FAILURE, message };
};
// quotesRequest
export const quotesRequestSucceeded = data => {
  return { type: QUOTE_PAGE_SUCCESS, data };
};

export const quotesRequestFailed = message => {
  return { type: QUOTE_PAGE_FAILURE, message };
};

export const setCurrentQuotePage = currentPage => {
  return { type: CURRENT_QUOTE_PAGE, currentPage };
};
// chaptersRequest
export const chaptersRequestSucceeded = data => {
  return { type: CHAPTERS_SUCCESS, data };
};

export const chaptersRequestFailed = message => {
  return { type: CHAPTERS_FAILURE, message };
};