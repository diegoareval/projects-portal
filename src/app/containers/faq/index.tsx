import React from 'react'
import styled from "styled-components";
import tw from "twin.macro";
import MainAccordeon from "../../components/accordeon";
import { Marginer } from '../../components/marginer';
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

const Faq = () => {
  return (
    <MainContainer footer={false}>
       <Title>Faq</Title>
       <MainAccordeon/>
       <Marginer direction="vertical" margin="4em"/>
    </MainContainer>
  )
}

export default Faq
