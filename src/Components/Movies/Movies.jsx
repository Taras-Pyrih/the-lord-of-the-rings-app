import { NavBar } from "../NavBar/NavBar.jsx";
import { Outlet } from "react-router-dom";
import './Movies.scss';

export const Movies = () => {
  return (
    <div className="Movies">
      <NavBar/>
      <Outlet/>
    </div>
  );
};