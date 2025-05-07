import React from "react";
import { Button, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { PlusCircleOutlined } from "@ant-design/icons";

const { Content, Sider } = Layout;

const selected = () => {
  const selected = window.location.pathname.substring(1).split('/');
  if (selected.length > 1) {
    return [selected.join('-')];
  }
  return ['']
}

const open = () => {
  const selected = window.location.pathname.substring(1).split('/');
  if (selected.length === 3) {
    return [selected[0] + '-' + selected[1]];
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
      label: <div>
        <Link to={'/library/character'}>Персонажи</Link>
        <Button
          style={{
            float: 'right',
            marginTop: '5px'
          }}
          type="link"
          shape="circle"
          icon={<PlusCircleOutlined href={'/character/create'}/>}
          href={'/character/create'}
        />
      </div>
    }
  ];

  return (
    <Layout>
      <Sider
        theme="dark"
        width={250}
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultOpenKeys={open()}
          defaultSelectedKeys={selected()}
          items={items}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            padding: 10,
            margin: '10px',
            minHeight: 280
          }}
        >
          {props.content}
        </Content>
      </Layout>
    </Layout>
  )
}

export default Library;