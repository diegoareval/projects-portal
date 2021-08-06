import React, { useState } from 'react'
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../../components/button";
import Social from '../../components/social';
import MainContainer from '../container';
import useBooleanToggler from "../../../lib/hooks/useBooleanToggler"
import useAlert from '../../../lib/hooks/useAlert';
import { TOAST_TYPE } from '../../../lib/types/alert';
import { Contact, ContactType } from '../../../lib/types/contacts';
import ContactApi from '../../../lib/api/contacts';

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

const Section = styled.section`
  ${tw`
  text-gray-700  relative
  `};
`;

const ContactComponent = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  

  const {
    isToggled: isWorking,
    reToggle: startWork,
    unToggle: finishWork,
  } = useBooleanToggler();

  const {showMessage} = useAlert();

  const sendData  = () => {
    if(name.length< 1 || email.length< 1 || message.length< 1){
      showMessage("you must fill all fields", TOAST_TYPE.WARNING)
    }
    startWork();
    const payload: Contact ={
      name, email, message, type: ContactType.CONTACT, bookDate: new Date()
    };
    ContactApi.createContact(payload).then(response => {
      finishWork()
      if(response === true) {
        clear();
        showMessage("your message has been successfully sent", TOAST_TYPE.SUCCESS)
      } else {
        showMessage("your message has not been sent", TOAST_TYPE.ERROR)
      }
    })
  }

  const clear = () => {
    setEmail("");
    setMessage("");
    setName("");
  }

  return (
    <MainContainer footer={true}>
      <Title>Contact</Title>
      <Section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
             Please Leave a comments a we gonna get back yo you right away
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label className="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input
                   onChange={({target})=> {setName(target.value)}}
                  value={name}
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                   onChange={({target})=> {setEmail(target.value)}}
                  value={email}
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                  value={message}
                     onChange={({target})=> {setMessage(target.value)}}
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <Button onClick={isWorking? ()=> {}: sendData} text={isWorking? "Loading...": "Submit"} />
              </div>
             <Social/>
            </div>
          </div>
        </div>
      </Section>
      </MainContainer>
  )
}

export default ContactComponent
