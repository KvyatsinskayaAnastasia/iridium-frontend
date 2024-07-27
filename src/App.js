import React from "react";
import './App.css';
import { ConfigProvider, Layout, Menu, theme } from 'antd';
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import MagicLibraryInfo from "./components/Library/MagicLibraryInfo/MagicLibraryInfo";
import AbilityLibraryInfo from "./components/Library/AbilityLibraryInfo/AbilityLibraryInfo";
import LibraryContainer from "./components/Library/LibraryContainer";

const { Header } = Layout;
const headerItems = [
  <Menu.Item key={'iridium'}>
    <Link to='/'>
      Иридиум
    </Link>
  </Menu.Item>,
  <Menu.Item key={'library'}>
    <Link to='/library'>
      Библиотека
    </Link>
  </Menu.Item>
];

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <ConfigProvider theme={{ token: { colorPrimary: 'gray' } }}>
      <Layout>
        <Header
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
          >
            {headerItems}
          </Menu>
        </Header>
        <Routes>
          <Route path="/library" element={
            <LibraryContainer/>
          }/>
          <Route path="/library/magic/:id" element={
            <MagicLibraryInfo/>
          }/>
          <Route path="/library/ability/:type/:id" element={
            <AbilityLibraryInfo/>
          }/>
        </Routes>
      </Layout>
    </ConfigProvider>
    // <div className='app-wrapper'>
    //   <Header/>
    //   <div className="app-wrapper-content">
    //     <Routes>
    //       <Route path="/profile" element={
    //         <ProfileContainer />
    //       }/>
    //       <Route path="/magic/new" element={
    //         <AddMagicFormContainer />
    //       }/>
    //       <Route path="/magic/:id" element={
    //         <MagicItemContainer />
    //       }/>
    //       <Route path="/ability/new" element={
    //         <AddAbilityFormContainer />
    //       }/>
    //       <Route path="/ability/:id" element={
    //         <AbilityItemContainer />
    //       }/>
    //       <Route path="/race/new" element={
    //         <AddRaceFormContainer />
    //       }/>
    //       <Route path="/race/:id" element={
    //         <RaceItemContainer />
    //       }/>
    //       <Route path="/character/new" element={
    //         <AddCharacterFormContainer />
    //       }/>
    //       <Route path="/library" element={
    //         <Library />
    //       }/>
    //     </Routes>
    //   </div>
    // </div>
  )
}

export default App;
