import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { quotesAPI } from "../../thunkActionCreators/quotesAPI.jsx";
import { NavBar } from "../NavBar/NavBar.jsx";
import { PageSelection } from "../PageSelection/PageSelection.jsx";
import { setCurrentQuotePage } from "../../actionCreators/requestActionCreators.jsx";
import { QuoteList } from '../QuoteList/QuoteList.jsx';
import './Quotes.scss';

export const Quotes = () => {
  const dispatch = useDispatch();
  const quotes = useSelector(state => state.quotes);
  const pageQuantity = quotes.pageQuantity;
  const currentPage = quotes.currentPage;
  const perPage = quotes.perPage;

  useEffect(() => {
    dispatch(quotesAPI(currentPage, perPage));
  }, [currentPage]);

  return (
    <div className="Quotes">
      <NavBar/>
      {
        quotes.isReady
        ? <>
            <h1>Список цитат:</h1>
            <PageSelection setCurrentPage={setCurrentQuotePage} pageQuantity={pageQuantity} currentPage={currentPage}/>
            <QuoteList quoteInfo={quotes.quoteData}/>
            <PageSelection setCurrentPage={setCurrentQuotePage} pageQuantity={pageQuantity} currentPage={currentPage}/>
          </>
        : <p className="notification">{quotes.notification}</p>
      }
    </div>
  );
};