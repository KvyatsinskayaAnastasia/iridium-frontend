import React from "react";
import './App.css';
import { ConfigProvider, Layout } from 'antd';
import { Route, Routes } from "react-router";
import MagicLibraryInfo from "./components/Library/MagicLibraryInfo/MagicLibraryInfo";
import AbilityLibraryInfo from "./components/Library/AbilityLibraryInfo/AbilityLibraryInfo";
import Library from "./components/Library/Library";
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
import CharacterLibraryInfo from "./components/Library/CharacterLibraryInfo/CharacterLibraryInfo";

const App = () => {
  return (
    <ConfigProvider theme={{
      components: {
        Card: {
          headerBg: 'rgb(212, 78, 2)',
          colorBgBase: 'black'
        },
        Menu: {
        },
        Layout: {
          bodyBg: 'black',
          footerBg: '#001529',
        },
        Collapse: {
          headerBg: 'rgb(212, 78, 2)'
        },
        Button: {
          primaryShadow: ''
        },
        Select: {
          optionActiveBg: 'rgba(212, 78, 2, 0.5)',
          optionSelectedBg: 'rgb(212, 78, 2)'
        },
      },
      token:
        {
          colorBgElevated: 'black',
          colorBgBase: 'black',
          colorSplit: 'rgb(212, 78, 2)',
          colorPrimary: 'rgb(212, 78, 2)',
          colorText: 'rgb(255, 255, 255, 0.65)',
          colorBgContainer: 'black',
          colorBorder: 'rgb(212, 78, 2)',
          lineWidth: 2,
          fontSize: 16,
          colorBorderSecondary: 'rgb(212, 78, 2)',
          colorLink: 'rgb(250,141,79)'
        }
    }}>
      <Layout style={{ scrollbarColor: 'rgba(212, 78, 2) black' }}>
        <Header/>
        <Routes>
          <Route path="/login" element={
            <LoginFormContainer/>
          }/>
          <Route element={<ProtectedRouteContainer/>}>
            <Route path="/"/>
          </Route>
          <Route element={<ProtectedRouteContainer/>}>
            <Route path="/library" element={
              <Library/>
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
            <Route path="/library/character/:id" element={
              <CharacterLibraryInfo/>
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
