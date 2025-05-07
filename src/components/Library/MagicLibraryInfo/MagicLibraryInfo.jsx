import React from "react";
import MagicItemContainer from "../../Magic/MagicItem/MagicItemContainer/MagicItemContainer";
import Library from "../Library";

const MagicLibraryInfo = () => {
  return (
    <Library content={<MagicItemContainer/>}/>
  )
}

export default MagicLibraryInfo;