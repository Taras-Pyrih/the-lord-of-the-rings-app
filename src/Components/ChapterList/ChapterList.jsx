import { ChapterItem } from '../ChapterItem/ChapterItem.jsx';
import { v4 as uuidv4 } from "uuid";
import './ChapterList.scss';

export const ChapterList = props => {
  const chapters = props.chapterInfo.map(item => <ChapterItem profile={item} key={uuidv4()}/>);

  return (
    <div className="ChapterList">
      <ul>{chapters}</ul>
    </div>
  );
};