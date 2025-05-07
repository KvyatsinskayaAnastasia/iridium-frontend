import React from "react";
import RaceItemContainer from "../../Race/RaceItem/RaceItemContainer/RaceItemContainer";
import Library from "../Library";

const RaceLibraryInfo = () => {
  return (
    <Library content={<RaceItemContainer/>}/>
  )
}

export default RaceLibraryInfo;