import { Link } from "react-router-dom";
import LOTR_logo from '../../images/The-Lord-of-the-Rings/The-Lord-of-the-Rings_logo.png';
import './HomePage.scss';

export const HomePage = () => {
  return (
    <div className="HomePage">
      <img src={LOTR_logo} alt="logo"/>
      <nav>
        <Link className='main-link' to='/books'>Books</Link>
        <Link className='main-link' to='/movies'>Movies</Link>
        <Link className='main-link' to='/characters'>Characters</Link>
        <Link className='main-link' to='/quotes'>Quotes</Link>
        <Link className='main-link' to='/chapters'>Chapters</Link>
      </nav>
    </div>
  );
};