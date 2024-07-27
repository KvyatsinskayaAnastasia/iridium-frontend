import React from "react";
import AbilityItemContainer from "../../Abilitiy/AbilityItem/AbilityItemContainer/AbilityItemContainer";
import LibraryContainer from "../LibraryContainer";

const AbilityLibraryInfo = () => {
  return (
    <LibraryContainer content={<AbilityItemContainer/>}/>
  )
}

export default AbilityLibraryInfo;