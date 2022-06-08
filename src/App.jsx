import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Components/HomePage/HomePage.jsx';
import { Books } from './Components/Books/Books.jsx';
import { Movies } from './Components/Movies/Movies.jsx';
import { DefaultMoviePage } from './Components/DefaultMoviePage/DefaultMoviePage.jsx';
import { Movie } from './Components/Movie/Movie.jsx';
import { Characters } from './Components/Characters/Characters.jsx';
import { DefaultCharacterPage } from './Components/DefaultCharacterPage/DefaultCharacterPage.jsx';
import { Character } from './Components/Character/Character.jsx';
import { Quotes } from './Components/Quotes/Quotes.jsx';
import { Chapters } from './Components/Chapters/Chapters.jsx';
import { NotFound } from './Components/NotFound/NotFound.jsx';
import './App.scss';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='books' element={<Books/>}/>
        <Route path='movies' element={<Movies/>}>
          <Route index element={<DefaultMoviePage/>}/>
          <Route path=':_id' element={<Movie/>}/>
        </Route>
        <Route path='characters' element={<Characters/>}>
          <Route index element={<DefaultCharacterPage/>}/>
          <Route path=':_id' element={<Character/>}/>
        </Route>
        <Route path='quotes' element={<Quotes/>}/>
        <Route path='chapters' element={<Chapters/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
};