import TLOTR_secondMoviePoster from './The-Lord-of-the-Rings/movies/The-Two-Towers_movie.png';
import TLOTR_firstMoviePoster from './The-Lord-of-the-Rings/movies/The-Fellowship-of-the-Ring_movie.png';
import TLOTR_thirdMoviePoster from './The-Lord-of-the-Rings/movies/The-Return-of-the-King_movie.png';
import TH_firstMoviePoster from './The-Hobbit/movies/An-Unexpected-Journey_movie.png';
import TH_secondMoviePoster from './The-Hobbit/movies/The-Desolation-of-Smaug_movie.png';
import TH_thirdMoviePoster from './The-Hobbit/movies/The-Battle-of-the-Five-Armies_movie.png';
import { TLOTR_secondMovieId, TLOTR_firstMovieId, TLOTR_thirdMovieId,
         TH_firstMovieId, TH_secondMovieId, TH_thirdMovieId } from '../consts/movieIds';

export const moviePosters = [
  {
    _id: TLOTR_secondMovieId,
    url: TLOTR_secondMoviePoster,
    name: "The Two Towers"
  },
  {
    _id: TLOTR_firstMovieId,
    url: TLOTR_firstMoviePoster,
    name: "The Fellowship of the Ring"
  },
  {
    _id: TLOTR_thirdMovieId,
    url: TLOTR_thirdMoviePoster,
    name: "The Return of the King"
  },
  {
    _id: TH_firstMovieId,
    url: TH_firstMoviePoster,
    name: "The Unexpected Journey"
  },
  {
    _id: TH_secondMovieId,
    url: TH_secondMoviePoster,
    name: "The Desolation of Smaug"
  },
  {
    _id: TH_thirdMovieId,
    url: TH_thirdMoviePoster,
    name: "The Battle of the Five Armies"
  }
];