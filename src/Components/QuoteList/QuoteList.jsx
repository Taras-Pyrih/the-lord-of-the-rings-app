import { QuoteItem } from '../QuoteItem/QuoteItem.jsx';
import { v4 as uuidv4 } from "uuid";
import './QuoteList.scss';

export const QuoteList = props => {
  const quotes = props.quoteInfo.map(item => <QuoteItem profile={item} key={uuidv4()}/>);

  return (
    <div className="QuoteList">
      <ul>{quotes}</ul>
    </div>
  );
};