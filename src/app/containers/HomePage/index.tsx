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
import { Parallax } from "react-parallax";

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
      <Parallax strength={500}>
      <TopSection />
      </Parallax>
      <Marginer direction="vertical" margin="4em" />
      <Parallax strength={500}>
      <BookCard />
      </Parallax>
      <Marginer direction="vertical" margin="4em" />
      <Parallax strength={500}>
      <BookingSteps />
      </Parallax>
      <Marginer direction="vertical" margin="4em" />
      <Parallax strength={500}>
      <AboutUs />
      </Parallax>
      <Marginer direction="vertical" margin="8em" />
      <Parallax strength={500}>
      <TopProjects title="Explore Our Top Sale Projects" projects={projects} />
      </Parallax>
      <Marginer direction="vertical" margin="4em" />
      <Parallax strength={500}>
      <TopProjects title="New hottest Projects" projects={projects} />
      </Parallax>
      <Footer />
    </PageContainer>
  )
}

export default index
