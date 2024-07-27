import React  from "react";
import ItemsList from "../../common/ItemsList/ItemsList";

const RaceList = (props) => {

  return (
    <ItemsList itemsList={props.allRaces} type={"race"}/>
  )
}

export default RaceList;