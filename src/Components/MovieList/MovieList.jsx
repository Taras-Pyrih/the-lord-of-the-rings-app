import { MovieItem } from "../MovieItem/MovieItem.jsx";
import { v4 as uuidv4 } from "uuid";
import './MovieList.scss';

export const MovieList = props => {
  const TLOTRSeries = props.movieInfo.map((item, index) => (
    index >= 5
    ? <MovieItem profile={item} key={uuidv4()}/>
    : null
  ));

  const THSeries = props.movieInfo.map((item, index) => (
    index >= 2 && index <= 4
    ? <MovieItem profile={item} key={uuidv4()}/>
    : null
  ));

  return (
    <div className="MovieList">
      <ul>
        {TLOTRSeries}
      </ul>
      <ul>
        {THSeries}
      </ul>
    </div>
  );
};