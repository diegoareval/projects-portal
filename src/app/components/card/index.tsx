import React from 'react'
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from '../button';

const Card = () => {

    const ImageContainer = styled.div`
  ${tw`
  bg-cover h-64
  `};
`;


const CardContainer = styled.div`
${tw`
md:max-w-sm rounded-lg overflow-hidden shadow-xl mx-4 mb-4
`};
`;

    const Title = styled.div`
${tw`
font-bold text-2xl mb-2 text-gray-700
`};
`;

    const ButtonContainer = styled.p`
${tw`
px-6 mt-2 py-2
`};
`;

const DetailContainer = styled.p`
${tw`
px-6 py-4
`};
`;

    const Description = styled.p`
${tw`
text-gray-700 text-base md:h-40 pt-2 text-lg
`};
`;

    return (
        <CardContainer
        >
            <ImageContainer>
                <img
                    className="h-full w-full"
                    src="https://ravii-dev.s3.eu-west-2.amazonaws.com/photos/pentre_ifan.JPG"
                    alt="Pentre Ifan"
                />
            </ImageContainer>
            <DetailContainer>
                <Title>
                    Sales System
          </Title>
                <Description>
                    Pentre Ifan is the name of an ancient manor in the community and parish of Nevern, Pembrokeshire, Wales. It contains and gives its name to the largest and best preserved neolithic dolmen in Wales.
          </Description>
            </DetailContainer>
            <ButtonContainer>
                <Button text="Book Your Demo" />
                <Button text="Check Live Demo" />
            </ButtonContainer>
        </CardContainer>
    )
}

export default Card
