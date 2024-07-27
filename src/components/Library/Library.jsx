import React from "react";
import { Layout, Menu, theme } from "antd";
import { Link } from "react-router-dom";

const { Content, Sider } = Layout;

const refreshPage = () => {
  setTimeout(() => {
    window.location.reload(false);
  }, 500);
}

const selected = () => {
  const selected = window.location.pathname.substring(1).split('/');
  if (selected.length === 2) {
    return [selected.join('-')];
  }
  if (selected.length === 3) {
    return [`${selected[0]}-${selected[1]}`, selected.join('-')];
  }
  if (selected.length === 4) {
    return [`${selected[0]}-${selected[1]}`, `${selected[0]}-${selected[1]}-${selected[2]}`, selected.join('-')];
  }
  return ['']
}
const Library = (props) => {
  const items = [
    {
      key: 'library-magic',
      label: 'Магия',
      children: !!props.allMagic && props.allMagic.map(magic => {
        return {
          key: `library-magic-${magic.id}`,
          label: (
            <Link to={`/library/magic/${magic.id}`} onClick={refreshPage}>{magic.name}</Link>
          )
        }
      })
    },
    {
      key: 'library-ability',
      label: 'Способности',
      children: [
        {
          key: 'library-ability-basic',
          label: 'Основные',
          children: !!props.allAbilities && props.allAbilities.filter(ability => ability.abilityType === "BASIC").map(ability => {
            return {
              key: `library-ability-basic-${ability.id}`,
              label: (
                <Link to={`/library/ability/basic/${ability.id}`} onClick={refreshPage}>{ability.name}</Link>
              )
            }
          })
        },
        {
          key: 'library-ability-fighting',
          label: 'Боевые',
          children: !!props.allAbilities && props.allAbilities.filter(ability => ability.abilityType === "FIGHTING").map(ability => {
            return {
              key: `library-ability-fighting-${ability.id}`,
              label: (
                <Link to={`/library/ability/fighting/${ability.id}`} onClick={refreshPage}>{ability.name}</Link>
              )
            }
          })
        },
        {
          key: 'library-ability-general',
          label: 'Общие',
          children: !!props.allAbilities && props.allAbilities.filter(ability => ability.abilityType === "GENERAL").map(ability => {
            return {
              key: `library-ability-general-${ability.id}`,
              label: (
                <Link to={`/library/ability/general/${ability.id}`} onClick={refreshPage}>{ability.name}</Link>
              )
            }
          })
        }
      ]
    },
  ];
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Sider
        width={250}
        style={{
          background: colorBgContainer,
        }}
      >
        <Menu
          mode="inline"
          defaultOpenKeys={selected()}
          defaultSelectedKeys={selected()}
          style={{
            height: '100%'
          }}
          items={items}
        />
      </Sider>
      <Layout>
        <Content
          style={{
            padding: 10,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {props.content}
        </Content>
      </Layout>
    </Layout>
  )
}

export default Library;