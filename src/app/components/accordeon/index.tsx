import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import tw from "twin.macro";
import FaqApi from '../../../lib/api/faqs';
import useAlert from '../../../lib/hooks/useAlert';
import { TOAST_TYPE } from '../../../lib/types/alert';
import { ApiError } from '../../../lib/types/error';
import { Faq } from '../../../lib/types/faq';
import Accordion from './accordeon'
import AccordionItem from './accordeonItem'



const AccordeonContainer = styled.div`
  ${tw`
    w-1/2
  `}
`;

const MainAccordeon = () => {
  const {showMessage} = useAlert()
  const [faqs, setFaqs] = useState<Faq[]>([])
   useEffect(() =>{
    FaqApi.getFaqs().then((response)=> {
      if ((response as ApiError).message) {
        const {message} = response as ApiError;
        showMessage(message, TOAST_TYPE.ERROR)
        console.log(response);
      } else {
        setFaqs(response as Faq[])
      }
    })
   }, [])

  return (
       <AccordeonContainer>
       <Accordion>
         {faqs.map((faq: Faq) => {
           return (
            <AccordionItem title={faq.question} key={faq.id}>
            {faq.answer}
          </AccordionItem>
           )
         })}
      </Accordion>
      </AccordeonContainer>
  )
}

export default MainAccordeon
