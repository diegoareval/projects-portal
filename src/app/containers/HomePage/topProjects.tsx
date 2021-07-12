import React, {  useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Project } from "../../components/project";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/responsive";
import MoonLoader from "react-spinners/MoonLoader";
import { IProject } from "../../typings/project";

const TopProjectsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `};
`;

const Title = styled.h2`
  ${tw`
    text-3xl
    lg:text-5xl
    text-black
    font-extrabold
  `};
`;

const ProjectsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
  `};
`;

const EmptyProjects = styled.div`
  ${tw`
    w-full
    flex
    justify-center
    items-center
    text-sm
    text-gray-500
  `};
`;

const LoadingContainer = styled.div`
  ${tw`
    w-full
    mt-9
    flex
    justify-center
    items-center
    text-base
    text-black
  `};
`;

interface TopProjectsProps{
    projects: IProject[],
    title: string
}


export function TopProjects(props: TopProjectsProps) {
    const { title, projects } = props;
    const [current, setCurrent] = useState(0);
    const [isLoading] = useState(false);

    const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });


    const isEmptyTopProjects = !projects || projects.length === 0;
    const numberOfDots = isMobile ? projects.length : Math.ceil(projects.length / 3);

    const myProjects =
        (!isEmptyTopProjects &&
            projects.map((project) => <Project {...project} thumbnailSrc={project.thumbnailSrc} />)) ||
        [];

    return (
        <TopProjectsContainer>
            <Title>{title}</Title>
            {isLoading && (
                <LoadingContainer>
                    <MoonLoader loading size={20} />
                </LoadingContainer>
            )}
            {isEmptyTopProjects && !isLoading && <EmptyProjects>No projects To Show!</EmptyProjects>}
            {!isEmptyTopProjects && !isLoading && (
                <ProjectsContainer>
                    <Carousel
                        value={current}
                        onChange={setCurrent}
                        slides={myProjects}
                        plugins={[
                            "clickToChange",
                            {
                                resolve: slidesToShowPlugin,
                                options: {
                                    numberOfSlides: 3,
                                },
                            },
                        ]}
                        breakpoints={{
                            640: {
                                plugins: [
                                    {
                                        resolve: slidesToShowPlugin,
                                        options: {
                                            numberOfSlides: 1,
                                        },
                                    },
                                ],
                            },
                            900: {
                                plugins: [
                                    {
                                        resolve: slidesToShowPlugin,
                                        options: {
                                            numberOfSlides: 2,
                                        },
                                    },
                                ],
                            },
                        }}
                    />
                    <Dots value={current} onChange={setCurrent} number={numberOfDots} />
                </ProjectsContainer>
            )}
        </TopProjectsContainer>
    );
}
