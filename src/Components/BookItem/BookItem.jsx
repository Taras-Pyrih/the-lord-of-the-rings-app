import { bookCovers } from "../../images/bookCovers.jsx";
import './BookItem.scss';

export const BookItem = props => {
  const profile = props.profile;
  let imageLink;

  for (let cover of bookCovers) {
    if (cover._id == profile._id) {
      imageLink = cover.url;
      break;
    }
  }

  return (
    <li className="BookItem">
      <img src={imageLink} alt={`${profile.name}_cover`}/>
      <p>{profile.name}</p>
    </li>
  );
};