import { useNavigate } from "react-router-dom";
import { characterPhotos } from "../../images/characterPhotos.jsx";
import default_character_photo from '../../images/The-Lord-of-the-Rings/characters/default-character-image.jpg';
import './CharacterItem.scss';

export const CharacterItem = props => {
  const navigate = useNavigate();
  const profile = props.profile;

  const handleClick = () => {
    navigate(`/characters/${profile._id}`);
  };

  let imageLink;

  for (let photo of characterPhotos) {
    if (photo._id == profile._id) {
      imageLink = photo.url;
      break;
    }
    
    imageLink = default_character_photo;
  }

  return (
    <li className="CharacterItem" onClick={handleClick}>
      <img src={imageLink} alt={`${profile.name}_photo`}/>
      <div><p>{profile.name}</p></div>
    </li>
  );
};