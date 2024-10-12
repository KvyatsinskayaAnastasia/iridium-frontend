import React from "react";
import LibraryContainer from "../LibraryContainer";
import RaceItemContainer from "../../Race/RaceItem/RaceItemContainer/RaceItemContainer";

const RaceLibraryInfo = () => {
  return (
    <LibraryContainer content={<RaceItemContainer/>}/>
  )
}

export default RaceLibraryInfo;