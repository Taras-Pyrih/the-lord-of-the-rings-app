import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { characterAPI } from "../../thunkActionCreators/characterAPI.jsx";
import { useSelector } from "react-redux";
import { characterPhotos } from "../../images/characterPhotos.jsx";
import default_character_photo from '../../images/The-Lord-of-the-Rings/characters/default-character-image.jpg';
import './Character.scss';

export const Character = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();

  useEffect(() => {
    dispatch(characterAPI(_id));
  }, []);

  const character = useSelector(state => state.character);
  let profile;
  let imageLink;

  if (character.currentCharacterData._id) {
    profile = character.currentCharacterData;

    for (let photo of characterPhotos) {
      if (photo._id == profile._id) {
        imageLink = photo.url;
        break;
      }

      imageLink = default_character_photo;
    }
  }

  return (
    <div className="Character">
      {
        character.isReady
        ? <>
            <h1>Профайл персонажу:</h1>
            <div className="container">
              <div className="top-row">
                <img src={imageLink} alt={`${profile.name}_photo`}/>
                <div className="top-row__right-side">
                  <p>Name: <span>{profile.name}</span></p>
                  <p>Race: <span>{profile.race}</span></p>
                  <p>Gender: <span>{profile.gender}</span></p>
                  <p>Height: <span>{profile.height}</span></p>
                  <p>Hair: <span>{profile.hair}</span></p>
                  <p>Spouse: <span>{profile.spouse}</span></p>
                  <p>Realm: <span>{profile.realm}</span></p>
                </div>    
              </div>
              <div className="bottom-row">
                <p>Birth: <span>{profile.birth}</span></p>
                <p>Death: <span>{profile.death}</span></p>
                <p>WikiUrl: <span>{profile.wikiUrl}</span></p>
              </div>
            </div>
          </>
        : <p className="notification">{character.notification}</p>
      }
    </div>
  );
};