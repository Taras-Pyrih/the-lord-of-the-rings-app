import { combineReducers } from 'redux';
import { booksReducer } from './booksReducer.jsx';
import { moviesReducer } from './moviesReducer.jsx';
import { movieReducer } from './movieReducer.jsx';
import { charactersReducer } from './charactersReducer.jsx';
import { characterReducer } from './characterReducer.jsx';
import { quotesReducer } from './quotesReducer.jsx';
import { chaptersReducer } from './chaptersReducer.jsx';

export const rootReducer = combineReducers({
  books: booksReducer,
  movies: moviesReducer,
  movie: movieReducer,
  characters: charactersReducer,
  character: characterReducer,
  quotes: quotesReducer,
  chapters: chaptersReducer
});