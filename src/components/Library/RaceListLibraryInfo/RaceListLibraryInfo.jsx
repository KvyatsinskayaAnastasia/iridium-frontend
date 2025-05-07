import React from "react";
import Library from "../Library";
import RaceListContainer from "../../Race/RaceList/RaceListContainer/RaceListContainer";

const RaceListLibraryInfo = () => {
  return (
    <Library content={<RaceListContainer/>}/>
  )
}

export default RaceListLibraryInfo;