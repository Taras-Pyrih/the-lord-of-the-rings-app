import { moviePosters } from "../../images/moviePosters.jsx";
import { characterPhotos } from "../../images/characterPhotos.jsx";
import default_character_photo from '../../images/The-Lord-of-the-Rings/characters/default-character-image.jpg';
import './QuoteItem.scss';

export const QuoteItem = props => {
  const profile = props.profile;
  let movieImageLink;
  let movie;
  let characterImageLink;
  let character;

  for (let poster of moviePosters) {
    if (poster._id == profile.movie) {
      movieImageLink = poster.url;
      movie = poster.name;
      break;
    }
  }

  for (let photo of characterPhotos) {
    if (photo._id == profile.character) {
      characterImageLink = photo.url;
      character = photo.name;
      break;
    }
    
    characterImageLink = default_character_photo;
    character = "Unknown";
  }

  return (
    <li className="QuoteItem">
      <img src={movieImageLink} alt={'poster'}/>
      <div className="description">
        <p>Movie: <span>{movie}</span></p>
        <p>Character: <span>{character}</span></p>
        <p>Dialog: <span>{profile.dialog}</span></p>
      </div>
      <img src={characterImageLink} alt={'photo'}/>
    </li>
  );
};