import React from 'react'
import { TopSection } from "./topSection";
import { Marginer } from "../../components/marginer";
import { AboutUs } from "./aboutUs";
import { BookCard } from "../../components/bookCard";
import { BookingSteps } from "./bookingSteps";
import { TopProjects } from "./topProjects";
import { projects } from "../../data/projects";
import MainContainer from '../container';


const index = () => {
  return (
    <MainContainer>
     
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
  
      </MainContainer>
  )
}

export default index
