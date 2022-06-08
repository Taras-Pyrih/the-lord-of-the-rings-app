import TLOTR_firstBookCover from './The-Lord-of-the-Rings/books/The-Fellowship-of-the-Ring_book.png';
import TLOTR_secondBookCover from './The-Lord-of-the-Rings/books/The-Two-Towers_book.png';
import TLOTR_thirdBookCover from './The-Lord-of-the-Rings/books/The-Return-of-the-King_book.png';
import { TLOTR_firstBookId, TLOTR_secondBookId, TLOTR_thirdBookId } from '../consts/bookIds';

export const bookCovers = [
  {
    _id: TLOTR_firstBookId,
    url: TLOTR_firstBookCover,
    name: "The Fellowship Of The Ring"
  },
  {
    _id: TLOTR_secondBookId,
    url: TLOTR_secondBookCover,
    name: "The Two Towers"
  },
  {
    _id: TLOTR_thirdBookId,
    url: TLOTR_thirdBookCover,
    name: "The Return Of The King"
  }
];