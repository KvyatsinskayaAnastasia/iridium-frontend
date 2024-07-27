import React from "react";
import MenuItemsList from "../../common/MenuItemsList/MenuItemsList";
import { Menu } from "antd";

const AbilityList = (props) => {

  return [
    <Menu.SubMenu title={"Основные"} key={"library-ability-basic"}>
      <MenuItemsList itemsList={props.allAbilities.filter(ability => ability.abilityType === "BASIC")}
                     type={"library/ability"}/>
    </Menu.SubMenu>,
    <Menu.SubMenu title={"Общие"} key={"library-ability-general"}>
      <MenuItemsList itemsList={props.allAbilities.filter(ability => ability.abilityType === "GENERAL")}
                     type={"library/ability"}/>
    </Menu.SubMenu>,
    <Menu.SubMenu title={"Боевые"} key={"library-ability-fighting"}>
      <MenuItemsList itemsList={props.allAbilities.filter(ability => ability.abilityType === "FIGHTING")}
                     type={"library/ability"}/>
    </Menu.SubMenu>
  ]
}

export default AbilityList;