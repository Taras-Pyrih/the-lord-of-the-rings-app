import { moviePosters } from "../../images/moviePosters.jsx";
import { Link } from "react-router-dom";
import './MovieItem.scss';

export const MovieItem = props => {
  const profile = props.profile;
  let imageLink;

  for (let poster of moviePosters) {
    if (poster._id == profile._id) {
      imageLink = poster.url;
      break;
    }
  }

  return (
    <li className="MovieItem">
      <img src={imageLink} alt={`${profile.name}_poster`}/>
      <div><Link className="link" to={`/movies/${profile._id}`}>{profile.name}</Link></div>
    </li>
  );
};