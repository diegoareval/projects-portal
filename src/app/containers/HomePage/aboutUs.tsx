import React, { useContext } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SettingContext } from "../../../provider/SettingProvider";
import { SCREENS } from "../../components/responsive";

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md:pr-0
    bg-white
  `};
`;

const ImageContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -50px;
  transform: "translate(-50%,-50%)"
  img {
    width: auto;
    height: 100%;
  }
  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }
  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    width: 40%;
    margin-left: 6vw;
  }
`;

const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `};
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

const InfoText = styled.p`
  ${tw`
    md:max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
  `};
`;



export function AboutUs() {
  const setting = useContext(SettingContext);
  return (
    <AboutUsContainer>
      <ImageContainer>
        <img alt={"about"} src={"https://www.logmein.com/-/media/27c99c2d419d41c4b94a9cd717772c32.svg?h=434&w=904&la=en&hash=3C6F6E5B392E1A3A214F6DC6DD6495A7"} />
      </ImageContainer>
      <InfoContainer>
        <Title>{setting.us_title} </Title>
        <InfoText>
         {setting.us_description}
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
}