import React from 'react'
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from '../../components/Navbar';

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

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal
  `};
`;

const Projects = () => {
  return (
    <PageContainer>
      <Navbar />
       <Title>Projects</Title>
    </PageContainer>
  )
}

export default Projects
