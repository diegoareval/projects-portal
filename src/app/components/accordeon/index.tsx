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
import useBooleanToggler from "../../../lib/hooks/useBooleanToggler"


const AccordeonContainer = styled.div`
  ${tw`
    w-1/2
  `}
`;

const MainAccordeon = () => {
  const {
    isToggled: isWorking,
    reToggle: startWork,
    unToggle: finishWork,
  } = useBooleanToggler()

  const {showMessage} = useAlert();
  const [faqs, setFaqs] = useState<Faq[]>([]);

   useEffect(() =>{
    startWork()
    FaqApi.getFaqs().then((response)=> {
      finishWork()
      if ((response as ApiError).message) {
        const {message} = response as ApiError;
        showMessage(message, TOAST_TYPE.ERROR)
        console.log(response);
      } else {
        setFaqs(response as Faq[])
      }
    })
     // eslint-disable-next-line
   }, [])

console.log(isWorking);

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
