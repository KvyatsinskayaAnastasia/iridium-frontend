import React from "react";
import Library from "../Library";
import CharacterItemContainer from "../../Character/CharacterItem/CharacterItemContainer/CharacterItemContainer";

const CharacterLibraryInfo = () => {
  return (
    <Library content={<CharacterItemContainer/>}/>
  )
}

export default CharacterLibraryInfo;