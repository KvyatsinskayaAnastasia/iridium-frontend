import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, theme } from "antd";

const headerItems = [
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
      <Link to='/library/magic'>
        Библиотека
      </Link>
    )
  }
]

const Header = () => {
  const {
    token: { headerBg },
  } = theme.useToken();

  return (
    <Layout.Header
      style={{
        display: 'flex',
        padding: 0,
        marginLeft: 0
      }}
    >
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={window.location.pathname.split('/')[1]}
        style={{
          flex: 1,
          minWidth: 0,
          justifyContent: 'flex-end',
          backgroundColor: headerBg,
          borderBottom: '2px solid rgba(212, 78, 2, 0.25)'
        }}
        items={headerItems}
      />
    </Layout.Header>
  )
}

export default Header;