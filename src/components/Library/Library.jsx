import React from "react";
import { Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";

const { Content, Sider } = Layout;

const selected = () => {
  const selected = window.location.pathname.substring(1).split('/');
  if (selected.length === 2) {
    return [selected.join('-')];
  }
  return ['']
}

const Library = (props) => {
  const items = [
    {
      key: 'library-magic',
      label: <Link to={'/library/magic'}>Магия</Link>
    },
    {
      key: 'library-ability',
      label: 'Способности',
      children: [
        {
          key: 'library-ability-basic',
          label: <Link to={'/library/ability/basic'}>Основные</Link>
        },
        {
          key: 'library-ability-fighting',
          label: <Link to={'/library/ability/fighting'}>Боевые</Link>
        },
        {
          key: 'library-ability-general',
          label: <Link to={'/library/ability/general'}>Общие</Link>
        }
      ]
    },
    {
      key: 'library-race',
      label: <Link to={'/library/race'}>Расы</Link>
    },
    {
      key: 'library-character',
      label: <Link to={'/library/character'}>Персонажи</Link>
    }
  ];

  const {
    token: { bodyBg },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        width={250}
      >
        <Menu
          mode="inline"
          defaultOpenKeys={selected()}
          defaultSelectedKeys={selected()}
          style={{
            height: '100%',
            borderRight: '2px solid rgba(212, 78, 2, 0.25)'
          }}
          items={items}
        />
      </Sider>
      <Layout style={{background: bodyBg}}>
        <Content
          style={{
            padding: 10,
            margin: '10px',
            minHeight: 280,
            background: bodyBg
          }}
        >
          {props.content}
        </Content>
      </Layout>
    </Layout>
  )
}

export default Library;