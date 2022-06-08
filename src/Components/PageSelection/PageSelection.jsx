import { getPageNumbers } from "./getPageNumbers.jsx";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import './PageSelection.scss';

export const PageSelection = props => {
  const pageQuantity = props.pageQuantity;
  const currentPage = props.currentPage;
  const setCurrentPage = props.setCurrentPage;
  const pageNumbers = getPageNumbers(pageQuantity, currentPage);
  const dispatch = useDispatch();

  const pages = pageNumbers.map(page => (
    page != '...'
    ? <span
        className={page == currentPage ? 'current-page' : 'page'}
        onClick={() => dispatch(setCurrentPage(page))}
        key={uuidv4()}>{page}</span>
    : <span key={uuidv4()}>{page}</span>
  ));

  return (
    <div className="PageSelection">
      {pages}
    </div>
  );
};