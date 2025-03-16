import React from "react";
import LibraryContainer from "../LibraryContainer";
import AbilityListContainer from "../../Abilitiy/AbilityList/AbilityListContainer/AbilityListContainer";
import CharacterListContainer from "../../Character/CharacterList/CharacterListContainer/CharacterListContainer";

const CharacterListLibraryInfo = () => {
  return (
    <LibraryContainer content={<CharacterListContainer/>}/>
  )
}

export default CharacterListLibraryInfo;