import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { chaptersAPI } from "../../thunkActionCreators/chaptersAPI.jsx";
import { NavBar } from "../NavBar/NavBar.jsx";
import { ChapterList } from '../ChapterList/ChapterList.jsx';
import './Chapters.scss';

export const Chapters = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(chaptersAPI());
  }, []);

  const chapters = useSelector(state => state.chapters);

  return (
    <div className="Chapters">
      <NavBar/>
      {
        chapters.isReady
        ? <>
            <h1>Список розділів:</h1>
            <ChapterList chapterInfo={chapters.chapterData}/>
          </>
        : <p className="notification">{chapters.notification}</p>
      }
    </div>
  );
};