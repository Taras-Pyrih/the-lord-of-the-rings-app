import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { charactersAPI } from "../../thunkActionCreators/charactersAPI.jsx";
import { searchCharactersAPI } from "../../thunkActionCreators/searchCharactersAPI.jsx";
import { setFilterIsVisible, setSearchIsvisible,
         setAscending, setDescanding,
         setSearchValue, setCurrentCharacterPage } from "../../actionCreators/requestActionCreators.jsx";
import { icons } from "../../images/icons.jsx";
import classNames from "classnames";
import { PageSelection } from "../PageSelection/PageSelection.jsx";
import { CharacterList } from "../CharacterList/CharacterList.jsx";
import './DefaultCharacterPage.scss';

export const DefaultCharacterPage = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.characters);
  const pageQuantity = characters.pageQuantity;
  const currentPage = characters.currentPage;
  const perPage = characters.perPage;
  const filterIsVisible = characters.filterIsVisible;
  const criterion = characters.criterion;
  const searchIsVisible = characters.searchIsVisible;
  const searchValue = characters.searchValue;

  useEffect(() => {
    searchValue == ""
    ? dispatch(charactersAPI(currentPage, perPage, criterion))
    : dispatch(searchCharactersAPI(currentPage, perPage, criterion, searchValue));
  }, [currentPage, criterion]);

  const handleFilterIconClick = () => {
    dispatch(setFilterIsVisible(!filterIsVisible));
  };

  const handleSearchIconClick = () => {
    dispatch(setSearchIsvisible(!searchIsVisible));
  };

  const handleAscendingClick = () => {
    dispatch(setAscending());
  };

  const handleDescendingClick = () => {
    dispatch(setDescanding());
  };
  
  const handleSearchValueChange = e => {
    dispatch(setSearchValue(e.target.value));
  };

  const handleSearchClick = () => {
    dispatch(setCurrentCharacterPage(1));
    searchValue == ""
    ? dispatch(charactersAPI(currentPage, perPage, criterion))
    : dispatch(searchCharactersAPI(currentPage, perPage, criterion, searchValue));
  };

  return (
    <div className="DefaultCharacterPage">
      {
        characters.isReady
        ? <>
            <div className="top-row">
              <img src={icons.filter} alt="filter_icon" onClick={handleFilterIconClick}/>
              <h1>Список персонажів:</h1>
              <img src={icons.search} alt="search_icon" onClick={handleSearchIconClick}/>
            </div>
            <div className="bottom-row">
              <div className={classNames('filter', {filterIsVisible})}>
                <img src={icons.ascending} alt="ascending_icon" onClick={handleAscendingClick}/>
                <div className="slider">
                  <span className={classNames('roller', {rollerIsOnRightSide: criterion == 'desc'})}></span>
                </div>
                <img src={icons.descending} alt="descending_icon" onClick={handleDescendingClick}/>
              </div>
              <div className={classNames('search', {searchIsVisible})}>
                <input type="search" value={searchValue} placeholder="Enter search value" onChange={handleSearchValueChange}/>
                <button onClick={handleSearchClick}>Search</button>
              </div>
            </div>
            {
              characters.characterData.length != 0
              ? <>
                  <PageSelection setCurrentPage={setCurrentCharacterPage} pageQuantity={pageQuantity} currentPage={currentPage}/>
                  <CharacterList characterInfo={characters.characterData}/>
                  <PageSelection setCurrentPage={setCurrentCharacterPage} pageQuantity={pageQuantity} currentPage={currentPage}/>
                </>
              : <p className="notification">Жодного співпадіння не знайдено :(</p>
            }
          </>
        : <p className="notification">{characters.notification}</p>
      }
    </div>
  );
};