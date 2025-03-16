import React from "react";
import LibraryContainer from "../LibraryContainer";
import MagicListContainer from "../../Magic/MagicList/MagicListContainer/MagicListContainer";

const MagicListLibraryInfo = () => {
  return (
    <LibraryContainer content={<MagicListContainer/>}/>
  )
}

export default MagicListLibraryInfo;