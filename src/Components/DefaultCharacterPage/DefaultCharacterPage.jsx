import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { charactersAPI } from "../../thunkActionCreators/charactersAPI.jsx";
import { PageSelection } from "../PageSelection/PageSelection.jsx";
import { setCurrentCharacterPage } from "../../actionCreators/requestActionCreators.jsx";
import { CharacterList } from "../CharacterList/CharacterList.jsx";

export const DefaultCharacterPage = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.characters);
  const pageQuantity = characters.pageQuantity;
  const currentPage = characters.currentPage;
  const perPage = characters.perPage;

  useEffect(() => {
    dispatch(charactersAPI(currentPage, perPage));
  }, [currentPage]);

  return (
    <div className="DefaultCharacterPage">
      {
        characters.isReady
        ? <>
            <h1>Список персонажів:</h1>
            <PageSelection setCurrentPage={setCurrentCharacterPage} pageQuantity={pageQuantity} currentPage={currentPage}/>
            <CharacterList characterInfo={characters.characterData}/>
            <PageSelection setCurrentPage={setCurrentCharacterPage} pageQuantity={pageQuantity} currentPage={currentPage}/>
          </>
        : <p className="notification">{characters.notification}</p>
      }
    </div>
  );
};