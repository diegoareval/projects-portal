import React from 'react';
import styled from "styled-components";
import tw from "twin.macro";
import './App.css';
import Routers from './app/routers';


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
    <AppContainer>
    <Routers />
  </AppContainer>
  );
}

export default App;
