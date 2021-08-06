import React, {useContext} from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import { SettingContext } from '../../../provider/SettingProvider';

const Social = () => {
    const setting = useContext(SettingContext);
const ImageContainer = styled.a`
  ${tw`
  text-gray-700  relative
  
  `};
`;

const Email = styled.a`
${tw`
text-gray-700  relative
`};
`;

const Address = styled.a`
${tw`
leading-normal my-5
`};
`;

const Images = styled.span`
${tw`
inline-flex
`};
`;

const SocialContainer = styled.div`
${tw`
p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center
`};
`;

    return (
        <SocialContainer>
            <Email>{setting.company_email}</Email>
            <br />
            <Address>
                {`${setting.address} ${setting.codigo_postal}`}
        </Address>
        <br />
            <Images>
                <ImageContainer>
                    <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                    >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                </ImageContainer>
                <ImageContainer>
                    <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                    >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                </ImageContainer>
                <ImageContainer>
                    <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                    >
                        <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                </ImageContainer>
                <ImageContainer>
                    <svg
                        fill="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                    >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                </ImageContainer>
            </Images>
        </SocialContainer>
    )
}

export default Social
