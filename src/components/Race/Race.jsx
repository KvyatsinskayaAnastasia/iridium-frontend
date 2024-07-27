import React from "react";
import ShortListInfoViewer from "../common/ShortListInfoViewer/ShortListInfoViewer";
import RaceListContainer from "./RaceList/RaceListContainer/RaceListContainer";

const Race = (props) => {

  return (
    <ShortListInfoViewer
      listTitle={"Раса"}
      onClick={props.onClick}
      listContainer={<RaceListContainer/>}
      buttonTitle={"Новая Раса"}
    />
  )
}

export default Race