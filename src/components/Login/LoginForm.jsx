import React from "react";
import { Button, Divider, Form, Input, Layout, theme } from "antd";

const LoginForm = (props) => {

  const login = (target) => {
    const user = {
      username: target.username,
      password: target.password
    };
    props.login(user);
  }

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{
      minHeight: '100vh'
    }}>
      <Layout.Content style={{
        margin: 'auto',
        width: '40%',
        maxHeight: '50vh',
        textAlign: 'center',
        position: 'relative',
        background: colorBgContainer,
        borderRadius: '5%'
      }}>
        <Form
          name="login"
          style={{
            minWidth: 400,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
          onFinish={login}
        >
          <h2>Логин</h2>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите никнейм!',
              },
            ]}
          >
            <Input placeholder="Никнейм"/>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите пароль!',
              },
            ]}
          >
            <Input.Password placeholder="Пароль"/>
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Layout.Content>
    </Layout>
  )
}

export default LoginForm;