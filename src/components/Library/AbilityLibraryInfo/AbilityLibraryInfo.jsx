import React from "react";
import AbilityItemContainer from "../../Abilitiy/AbilityItem/AbilityItemContainer/AbilityItemContainer";
import Library from "../Library";

const AbilityLibraryInfo = () => {
  return (
    <Library content={<AbilityItemContainer/>}/>
  )
}

export default AbilityLibraryInfo;