import React from "react";
import MagicListContainer from "./MagicList/MagicListContainer/MagicListContainer";
import ShortListInfoViewer from "../common/ShortListInfoViewer/ShortListInfoViewer";

const Magic = (props) => {

  return (
    <ShortListInfoViewer
      listTitle={"Магия"}
      onClick={props.onClick}
      listContainer={<MagicListContainer/>}
      buttonTitle={"Новая Магия"}
    />
  )
}

export default Magic