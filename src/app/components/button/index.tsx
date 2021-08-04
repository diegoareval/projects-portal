import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
  theme?: "filled" | "outlined";
  text: string;
  className?: string;
  onClick?: ()=> void
}

const BaseButton = styled.button`
  ${tw`
    pl-5
    pr-5
    pt-3
    pb-3
    outline-none
    rounded-md
    text-white
    text-xs
    font-semibold
    border-transparent
    border-2
    border-solid
    focus:outline-none
    transition-all
    duration-200
    ease-in-out
    m-1
  `};
`;

const OutlinedButton = styled(BaseButton)`
   background-color: #1d2124;
  ${tw`
    hover:bg-transparent
    hover:text-red-500
    hover:border-red-500
  `};
`;

const FilledButton = styled(BaseButton)`
  ${tw`
    border-red-500
    text-red-500
    bg-transparent
    hover:bg-red-500
    hover:text-white
    hover:border-transparent
  `};
`;

export function Button(props: IButtonProps) {
  const { theme, text, className, onClick } = props;
   const handleClick = () => {
     if(onClick){
      onClick();
     }
   }

  if (theme === "filled")
    return <FilledButton className={className} onClick={()=> handleClick()}>{text}</FilledButton>;
  else return <OutlinedButton onClick={()=> handleClick()} className={className} >{text}</OutlinedButton>;
}