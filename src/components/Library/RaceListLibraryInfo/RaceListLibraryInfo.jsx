import React from "react";
import LibraryContainer from "../LibraryContainer";
import RaceListContainer from "../../Race/RaceList/RaceListContainer/RaceListContainer";

const RaceListLibraryInfo = () => {
  return (
    <LibraryContainer content={<RaceListContainer/>}/>
  )
}

export default RaceListLibraryInfo;