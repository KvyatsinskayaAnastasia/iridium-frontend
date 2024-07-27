import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const refreshPage = () => {
  setTimeout(()=>{
    window.location.reload(false);
  }, 500);
}

const MenuItemsList = (props) => {
  return props.itemsList.map(item => {
    console.log(`${props.type.replace('/', '-')}-${item.id}`);
     return <Menu.Item key={`${props.type.replace('/', '-')}-${item.id}`}>
        <Link to={`/${props.type}/${item.id}`} onClick={refreshPage}>{item.name}</Link>
      </Menu.Item>
  })
}

export default MenuItemsList;