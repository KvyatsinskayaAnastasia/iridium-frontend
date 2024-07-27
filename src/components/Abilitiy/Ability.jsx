import React from "react";
import ShortListInfoViewer from "../common/ShortListInfoViewer/ShortListInfoViewer";
import AbilityListContainer from "./AbilityList/AbilityListContainer/AbilityListContainer";

const Ability = (props) => {

  return (
    <ShortListInfoViewer
      onClick={props.onClick}
      listTitle={"Способности"}
      listContainer={<AbilityListContainer/>}
      buttonTitle={"Новая Способность"}
    />
  )
}

export default Ability