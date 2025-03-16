import React from "react";
import './App.css';
import { ConfigProvider, Layout } from 'antd';
import { Route, Routes } from "react-router";
import MagicLibraryInfo from "./components/Library/MagicLibraryInfo/MagicLibraryInfo";
import AbilityLibraryInfo from "./components/Library/AbilityLibraryInfo/AbilityLibraryInfo";
import LibraryContainer from "./components/Library/LibraryContainer";
import ProtectedRouteContainer from "./components/common/ProtectedRoute/ProtectedRouteContainer";
import LoginFormContainer from "./components/Login/LoginFormContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import RaceLibraryInfo from "./components/Library/RaceLibraryInfo/RaceLibraryInfo";
import CreateCharacterContainer
  from "./components/Character/CreateCharacter/CreateCharacterContainer/CreateCharacterContainer";
import MagicListLibraryInfo from "./components/Library/MagicListLibraryInfo/MagicListLibraryInfo";
import AbilityListLibraryInfo from "./components/Library/AbilityListLibraryInfo/AbilityListLibraryInfo";
import Header from "./components/Header/Header";
import RaceListLibraryInfo from "./components/Library/RaceListLibraryInfo/RaceListLibraryInfo";
import CharacterListLibraryInfo from "./components/Library/CharacterListLibraryInfo/CharacterListLibraryInfo";

const App = () => {
  return (
    <ConfigProvider theme={{
      components: {
        Card: {
          headerBg: 'rgba(212, 78, 2, 0.15)'
        },
        Menu: {
          itemHoverBg: 'rgba(212, 78, 2, 0.05)',
          itemSelectedBg: 'rgba(212, 78, 2, 0.15)'
        },
        Layout: {
          bodyBg: 'white',
          footerBg: 'rgba(212, 78, 2, 0.15)',
        },
        Collapse: {
          headerBg: 'rgba(212, 78, 2, 0.15)'
        }
      },
      token:
        {
          colorSplit: 'rgba(212, 78, 2, 0.24)',
          colorPrimary: 'rgb(212, 78, 2)',
          headerBg: 'rgba(212, 78, 2, 0.15)',
          colorBorder: 'rgba(212, 78, 2, 0.25)',
          fontSize: 16,
          boxShadowTertiary: 'rgba(212, 78, 2, 0.24) 0px 3px 8px'
        }
    }}>
      <Layout style={{scrollbarColor: 'rgba(212, 78, 2, 0.24) white'}}>
        <Header />
        <Routes>
          <Route path="/login" element={
            <LoginFormContainer/>
          }/>
          <Route element={<ProtectedRouteContainer/>}>
            <Route path="/"/>
          </Route>
          <Route element={<ProtectedRouteContainer/>}>
            <Route path="/library" element={
              <LibraryContainer/>
            }/>
          </Route>
          <Route element={<ProtectedRouteContainer/>}>
            <Route path="/library/magic" element={
              <MagicListLibraryInfo/>
            }/>
          </Route>
          <Route element={<ProtectedRouteContainer/>}>
            <Route path="/library/magic/:id" element={
              <MagicLibraryInfo/>
            }/>
          </Route>
          <Route element={<ProtectedRouteContainer/>}>
            <Route path="/library/ability/:type" element={
              <AbilityListLibraryInfo/>
            }/>
          </Route>
          <Route element={<ProtectedRouteContainer/>}>
            <Route path="/library/ability/:type/:id" element={
              <AbilityLibraryInfo/>
            }/>
          </Route>
          <Route element={<ProtectedRouteContainer/>}>
            <Route path="/library/race" element={
              <RaceListLibraryInfo/>
            }/>
          </Route>
          <Route element={<ProtectedRouteContainer/>}>
            <Route path="/library/race/:id" element={
              <RaceLibraryInfo/>
            }/>
          </Route>
          <Route element={<ProtectedRouteContainer/>}>
            <Route path="/profile" element={
              <ProfileContainer/>
            }/>
          </Route>
          <Route element={<ProtectedRouteContainer/>}>
            <Route path="/library/character" element={
              <CharacterListLibraryInfo/>
            }/>
          </Route>
          <Route element={<ProtectedRouteContainer/>}>
            <Route path="/character/create" element={
              <CreateCharacterContainer/>
            }/>
          </Route>
        </Routes>
        <Layout.Footer
          style={{
            textAlign: 'center',
            borderTop: '2px solid rgba(212, 78, 2, 0.25)'
          }}
        >
          <b>Iridium {new Date().getFullYear()}</b>
        </Layout.Footer>
      </Layout>
    </ConfigProvider>
  )
}

export default App;
