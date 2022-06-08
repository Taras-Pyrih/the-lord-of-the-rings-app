import { NavLink } from "react-router-dom";
import './NavBar.scss';

export const NavBar = () => {
  const setLinkStyle = ({ isActive }) => isActive ? 'active-link' : 'link';

  return (
    <nav className="NavBar">
      <ul>
        <li><NavLink className={setLinkStyle} to='/books'>Books</NavLink></li>
        <li><NavLink className={setLinkStyle} to='/movies'>Movies</NavLink></li>
        <li><NavLink className={setLinkStyle} to='/characters'>Characters</NavLink></li>
        <li><NavLink className={setLinkStyle} to='/quotes'>Quotes</NavLink></li>
        <li><NavLink className={setLinkStyle} to='/chapters'>Chapters</NavLink></li>
      </ul>
    </nav>
  );
};