import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, theme } from "antd";

const headerItems = [
  {
    key: 'iridium',
    label: 'Иридиум',
    disabled: true
  },
  {
    key: 'profile',
    label: (
      <Link to='/profile'>
        Профиль
      </Link>
    )
  },
  {
    key: 'library',
    label: (
      <Link to='/library'>
        Библиотека
      </Link>
    )
  }
]

const Header = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout.Header
      style={{
        display: 'flex',
        alignItems: 'center',
        background: colorBgContainer,
        padding: 0
      }}
    >
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={window.location.pathname.split('/')[1]}
        style={{
          flex: 1,
          minWidth: 0,
        }}
        items={headerItems}
      />
    </Layout.Header>
  )
}

export default Header;