import { characterPhotos } from "../../images/characterPhotos.jsx";
import default_character_photo from '../../images/The-Lord-of-the-Rings/characters/default-character-image.jpg';
import { Link } from "react-router-dom";
import './CharacterItem.scss';

export const CharacterItem = props => {
  const profile = props.profile;
  let imageLink;

  for (let photo of characterPhotos) {
    if (photo._id == profile._id) {
      imageLink = photo.url;
      break;
    }
    
    imageLink = default_character_photo;
  }

  return (
    <li className="CharacterItem">
      <img src={imageLink} alt={`${profile.name}_photo`}/>
      <div><Link className="link" to={`/characters/${profile._id}`}>{profile.name}</Link></div>
    </li>
  );
};