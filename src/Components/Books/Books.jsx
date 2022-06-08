import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { booksAPI } from "../../thunkActionCreators/booksAPI.jsx";
import { NavBar } from "../NavBar/NavBar.jsx";
import { BookList } from "../BookList/BookList.jsx";
import './Books.scss';

export const Books = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(booksAPI());
  }, []);

  const books = useSelector(state => state.books);

  return (
    <div className="Books">
      <NavBar/>
      {
        books.isReady
        ? <>
            <h1>Список книжок:</h1>
            <BookList bookInfo={books.bookData}/>
          </>
        : <p className="notification">{books.notification}</p>
      }
    </div>
  );
};