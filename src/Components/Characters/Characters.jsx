import { NavBar } from "../NavBar/NavBar.jsx";
import { Outlet } from "react-router-dom";
import './Characters.scss';

export const Characters = () => {
  return (
    <div className="Characters">
      <NavBar/>
      <Outlet/>
    </div>
  );
};