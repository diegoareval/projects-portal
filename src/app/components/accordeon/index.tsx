import React from 'react'
import styled from "styled-components";
import tw from "twin.macro";
import Accordion from './accordeon'
import AccordionItem from './accordeonItem'



const AccordeonContainer = styled.div`
  ${tw`
    w-1/2
  `}
`;


const MainAccordeon = () => {
  return (
       <AccordeonContainer>
       <Accordion>
        <AccordionItem title="What is Responsive Design?">
          Lorem ipsum dolor sit amet
        </AccordionItem>
        <AccordionItem title="What is Responsive Design?">
          Lorem ipsum dolor sit amet
        </AccordionItem>
        <AccordionItem title="What is Responsive Design?">
          Lorem ipsum dolor sit amet
        </AccordionItem>
        <AccordionItem title="How to contact us">
          adipisci sit earum molestiae doloribus quisquam esse quaerat
        </AccordionItem>
        <AccordionItem title="Problems we solve">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ipsam
          numquam quis, possimus at aspernatur quia, adipisci sit earum
          molestiae doloribus quisquam esse quaerat nulla facilis sunt beatae
          tempora laudantium.
        </AccordionItem>
        <AccordionItem title="Who are we?">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ipsam
          numquam quis, possimus at aspernatur quia, adipisci sit earum
          molestiae doloribus quisquam esse quaerat nulla facilis sunt beatae
          tempora laudantium.
        </AccordionItem>
      </Accordion>
      </AccordeonContainer>
  )
}

export default MainAccordeon
