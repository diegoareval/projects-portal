/* eslint-disable jsx-a11y/alt-text */
import React, {useContext} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { SettingContext } from "../../../provider/SettingProvider";

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
  const setting = useContext(SettingContext);

  return (
    <Link to="/">
      <LogoContainer>
        <Image>
          <img src={bgColor === "dark" ? setting.logo_url:setting.logo_url } />
        </Image>
  <LogoText color={color || "dark"}>{setting.company_name}</LogoText>

      </LogoContainer>
    </Link>
  );
}