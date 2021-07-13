import React from 'react'
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from '../../components/Navbar';
import { Footer } from "../../components/footer";


interface ContainerProps {
    children: React.ReactNode
}
const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

const MainContainer = ({children}: ContainerProps) => {
  return (
    <PageContainer>
      <Navbar />
        {children}
      <Footer />
    </PageContainer>
  )
}

export default MainContainer
