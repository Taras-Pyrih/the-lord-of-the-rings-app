import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { movieAPI } from '../../thunkActionCreators/movieAPI.jsx';
import { useSelector } from "react-redux";
import { moviePosters } from "../../images/moviePosters.jsx";
import './Movie.scss';

export const Movie = () => {
  const dispatch = useDispatch();
  const { _id } = useParams();

  useEffect(() => {
    dispatch(movieAPI(_id));
  }, []);

  const movie = useSelector(state => state.movie);
  let profile;
  let imageLink;

  if (movie.currentMovieData._id) {
    profile = movie.currentMovieData;

    for (let poster of moviePosters) {
      if (poster._id == profile._id) {
        imageLink = poster.url;
        break;
      }
    }
  }

  return (
    <div className="Movie">
      {
        movie.isReady
        ? <>
            <h1>Профайл фільму:</h1>
            <div className="container">
              <img src={imageLink} alt={`${profile.name}_poster`}/>
              <div className="right-side">
                <p>Name: <span>{profile.name}</span></p>
                <p>Rotten tomatoes score: <span>{profile.rottenTomatoesScore}</span></p>
                <p>Runtime in minutes: <span>{profile.runtimeInMinutes}</span></p>
                <p>Budget in millions: <span>{profile.budgetInMillions}</span></p>
                <p>Box office revenue in millions: <span>{profile.boxOfficeRevenueInMillions}</span></p>
                <p>Academy award nominations: <span>{profile.academyAwardNominations}</span></p>
                <p>Academy award wins: <span>{profile.academyAwardWins}</span></p>
              </div>
            </div>
          </>
        : <p className="notification">{movie.notification}</p>
      }
    </div>
  );
};