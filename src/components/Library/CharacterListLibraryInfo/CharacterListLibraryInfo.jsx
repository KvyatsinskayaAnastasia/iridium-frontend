import React from "react";
import Library from "../Library";
import CharacterListContainer from "../../Character/CharacterList/CharacterListContainer/CharacterListContainer";

const CharacterListLibraryInfo = () => {
  return (
    <Library content={<CharacterListContainer/>}/>
  )
}

export default CharacterListLibraryInfo;