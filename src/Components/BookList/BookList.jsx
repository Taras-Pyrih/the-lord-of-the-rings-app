import { BookItem } from '../BookItem/BookItem.jsx';
import { v4 as uuidv4 } from "uuid";
import './BookList.scss';

export const BookList = props => {
  const TLOTRTrilogy = props.bookInfo.map(item => <BookItem profile={item} key={uuidv4()}/>);

  return (
    <div className="BookList">
      <ul>{TLOTRTrilogy}</ul>
    </div>
  );
};