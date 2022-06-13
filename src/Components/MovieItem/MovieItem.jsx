import { useNavigate } from "react-router-dom";
import { moviePosters } from "../../images/moviePosters.jsx";
import './MovieItem.scss';

export const MovieItem = props => {
  const navigate = useNavigate();
  const profile = props.profile;

  const handleClick = () => {
    navigate(`/movies/${profile._id}`);
  };

  let imageLink;

  for (let poster of moviePosters) {
    if (poster._id == profile._id) {
      imageLink = poster.url;
      break;
    }
  }

  return (
    <li className="MovieItem" onClick={handleClick}>
      <img src={imageLink} alt={`${profile.name}_poster`}/>
      <div><p>{profile.name}</p></div>
    </li>
  );
};