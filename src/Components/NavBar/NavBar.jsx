import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import './NavBar.scss';

export const NavBar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const setLinkStyle = ({ isActive }) => (
    isActive
    ? (
      pathname != '/books' &&
      pathname != '/movies' &&
      pathname != '/characters' &&
      pathname != '/quotes' &&
      pathname != '/chapters'
      ? 'active-child-link'
      : 'active-parent-link'
    )
    : 'link'
  );

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