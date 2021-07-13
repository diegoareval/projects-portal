import React from 'react'
import styled from "styled-components";
import tw from "twin.macro";
import { Navbar } from '../../components/Navbar';
import { TopSection } from "./topSection";
import { Marginer } from "../../components/marginer";
import { Footer } from "../../components/footer";
import { AboutUs } from "./aboutUs";
import { BookCard } from "../../components/bookCard";
import { BookingSteps } from "./bookingSteps";
import { TopProjects } from "./topProjects";
import { projects } from "../../data/projects";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

const index = () => {
  return (
    <PageContainer>
      <Navbar />
     
      <TopSection />
  
      <Marginer direction="vertical" margin="4em" />
     
      <BookCard />
  
      <Marginer direction="vertical" margin="4em" />
     
      <BookingSteps />
  
      <Marginer direction="vertical" margin="4em" />
     
      <AboutUs />
  
      <Marginer direction="vertical" margin="8em" />
     
      <TopProjects title="Explore Our Top Sale Projects" projects={projects} />
  
      <Marginer direction="vertical" margin="4em" />
     
      <TopProjects title="New hottest Projects" projects={projects} />
  
      <Footer />
    </PageContainer>
  )
}

export default index
