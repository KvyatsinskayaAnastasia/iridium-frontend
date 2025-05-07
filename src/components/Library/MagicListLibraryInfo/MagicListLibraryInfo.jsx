import React from "react";
import Library from "../Library";
import MagicListContainer from "../../Magic/MagicList/MagicListContainer/MagicListContainer";

const MagicListLibraryInfo = () => {
  return (
    <Library content={<MagicListContainer/>}/>
  )
}

export default MagicListLibraryInfo;