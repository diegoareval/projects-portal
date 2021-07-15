import React from 'react'
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from '../../components/button';
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

const ButtonContainer = styled.h1`
  ${tw`
  mt-8
  `};
`;

const Container = styled.div`
  ${tw`
  relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl
  `};
`;

const CardContainer = styled.div`
  ${tw`
  max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12
  `};
`;


const About = () => {
  return (
    <MainContainer footer={true}>
      <Title>About Us</Title> 
<Container>
  <div className="w-full h-64 lg:w-1/2 lg:h-auto">
    <img className="h-full w-full object-cover" src="https://images.pexels.com/photos/326508/pexels-photo-326508.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Winding mountain road"/>
  </div>
  <CardContainer>
    <div className="flex flex-col p-12 md:px-16">
      <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">Dev Solutions</h2>
      <p className="mt-4">
        Our main commitment is help and provide you the best solution in the market, we provide solutions since 2014 and 
        we helped hundreds of enterprises.
      </p>
      <ButtonContainer>
        <Button text="Check out our content"/>
      </ButtonContainer>
    </div>
  </CardContainer>
  
</Container>


    </MainContainer>
  )
}

export default About
