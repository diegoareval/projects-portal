import React from 'react';
import styled from "styled-components";
import tw from "twin.macro";
import './App.css';
import Routers from './app/routers';
import SettingProvider from './provider/SettingProvider';
import './toast/bootstrap-v4.css'
import './toast/noty.css'

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `};
`;

function App() {
  return (
    <SettingProvider>
    <AppContainer>
    <Routers />
  </AppContainer>
  </SettingProvider>
  );
}

export default App;
