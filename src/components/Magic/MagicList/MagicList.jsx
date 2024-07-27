import React  from "react";
import MenuItemsList from "../../common/MenuItemsList/MenuItemsList";

const MagicList = (props) => {

  return (
    <MenuItemsList itemsList={props.allMagic} type={"library/magic"}/>
  )
}

export default MagicList;