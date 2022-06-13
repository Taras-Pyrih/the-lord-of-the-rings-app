import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { moviesAPI } from "../../thunkActionCreators/moviesAPI.jsx";
import { MovieList } from "../MovieList/MovieList.jsx";
import './DefaultMoviePage.scss';

export const DefaultMoviePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(moviesAPI());
  }, []);

  const movies = useSelector(state => state.movies);

  return (
    <div className="DefaultMoviePage">
      {
        movies.isReady
        ? <>
            <h1>Список фільмів:</h1>
            <MovieList movieInfo={movies.movieData}/>
          </>
        : <p className="notification">{movies.notification}</p>
      }
    </div>
  );
};