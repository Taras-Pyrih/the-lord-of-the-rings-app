import { bookCovers } from "../../images/bookCovers.jsx";
import './ChapterItem.scss';

export const ChapterItem = props => {
  const profile = props.profile;
  let imageLink;
  let book;

  for (let cover of bookCovers) {
    if (cover._id == profile.book) {
      imageLink = cover.url;
      book = cover.name
      break;
    }
  }

  return (
    <li className="ChapterItem">
      <img src={imageLink} alt={`${book}_cover`}/>
      <p>Book: <span>{book}</span></p>
      <p>Chapter name: <span>{profile.chapterName}</span></p>
    </li>
  );
};