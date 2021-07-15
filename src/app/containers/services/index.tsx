import React from 'react'
import styled from "styled-components";
import tw from "twin.macro";
import Card from '../../components/card';
import MainContainer from '../container';


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

const BlocContainer = styled.div`
  ${tw`
  flex flex-wrap lg:h-full content-center
  `};
`;


const CardContainer = styled.div`
  ${tw`
  container my-auto mx-auto sm:px-4 pt-10 pb-32
  `};
`;

const GreyContainer = styled.div`
  ${tw`
  bg-gray-200
  `};
`;

const Services = () => {
  return (
    <MainContainer>
      <Title>Services</Title>
      <GreyContainer>
        <CardContainer>
          <BlocContainer>
            <Card />
            <Card />
            <Card />
          </BlocContainer>
          <BlocContainer>
            <Card />
            <Card />
            <Card />
          </BlocContainer>
        </CardContainer>
      </GreyContainer>
    </MainContainer>
  )
}

export default Services
