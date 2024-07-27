import React from "react";
import MagicItemContainer from "../../Magic/MagicItem/MagicItemContainer/MagicItemContainer";
import LibraryContainer from "../LibraryContainer";

const MagicLibraryInfo = () => {
  return (
    <LibraryContainer content={<MagicItemContainer/>}/>
  )
}

export default MagicLibraryInfo;