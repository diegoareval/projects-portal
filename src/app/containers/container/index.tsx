import React from 'react'
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from '../../components/Navbar';
import { Footer } from "../../components/footer";


interface ContainerProps {
    children: React.ReactNode
    footer?: boolean
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

const MainContainer = ({children, footer}: ContainerProps) => {
  return (
    <PageContainer>
      <Navbar />
        {children}
     {!footer &&  <Footer />}
    </PageContainer>
  )
}

export default MainContainer
