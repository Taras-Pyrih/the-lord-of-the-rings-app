import { CharacterItem } from '../CharacterItem/CharacterItem.jsx';
import { v4 as uuidv4 } from "uuid";
import './CharacterList.scss';

export const CharacterList = props => {
  const characters = props.characterInfo.map(item => <CharacterItem profile={item} key={uuidv4()}/>);

  return (
    <div className="CharacterList">
      <ul>{characters}</ul>
    </div>
  );
};