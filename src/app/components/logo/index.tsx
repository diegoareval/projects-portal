/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface ILogoProps {
  color?: "white" | "dark";
  bgColor?: "white" | "dark";
}

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
  `};
`;

const LogoText = styled.div`
  ${tw`
    text-xl
    md:text-2xl
    font-bold
    text-black
    m-1
    `};
  ${({ color }: any) => (color === "white" ? tw`text-white` : tw`text-black`)}
` as any;

const Image = styled.div`
  width: auto;
  ${tw`h-6 md:h-9`};
  img {
    width: auto;
    height: 100%;
  }
`;

export function Logo(props: ILogoProps) {
  const { color, bgColor } = props;
  
  return (
    <LogoContainer>
      <Image>
        <img src={bgColor === "dark" ? "data:image/png;base64,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" : "data:image/png;base64,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"} />
      </Image>
      <LogoText color={color || "dark"}>Devs Solutions.</LogoText>
    </LogoContainer>
  );
}