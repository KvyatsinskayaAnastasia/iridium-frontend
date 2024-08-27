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

const App = () => {
  return (
    <ConfigProvider theme={{ token: { colorPrimary: 'gray' } }}>
      <Layout>
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
            <Route path="/library/magic/:id" element={
              <MagicLibraryInfo/>
            }/>
          </Route>
          <Route element={<ProtectedRouteContainer/>}>
            <Route path="/library/ability/:type/:id" element={
              <AbilityLibraryInfo/>
            }/>
          </Route>
          <Route element={<ProtectedRouteContainer/>}>
            <Route path="/profile" element={
              <ProfileContainer/>
            }/>
          </Route>
        </Routes>
      </Layout>
    </ConfigProvider>
  )
}

export default App;
