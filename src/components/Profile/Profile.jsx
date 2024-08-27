import React from "react";
import { Layout, theme, Button } from "antd";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

const { Content} = Layout;

const Profile = (props) => {
  const navigate = useNavigate();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const logout = () => {
    sessionStorage.clear();
    navigate('/login');
  }

  return (
    <Layout>
      <Header/>
      <Layout>
        <Content
          style={{
            padding: 10,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <p>{props.currentUser.username}</p>
          {props.currentUser.roles.map((role) => {
            return (<p key={role.name}>{role.name}</p>)
          })}
          <Button onClick={logout}>Выйти</Button>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Profile;