import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
import { v4 } from "uuid";

interface IProjectsData {
  title: string;
  description: string;
  image: string;
  tags: string[];
  source: string;
  visit: string;
  id: string;
}

const Projects: React.FC = () => {
  const projectsData = getProjects();

  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main> Projects </SectionTitle>
      <GridContainer>
        {projectsData.map((data, index) => {
          return (
            <>
              <BlogCard key={data.id} id={data.id}>
                <Img src={data.image} />
                <TitleContent>
                  <HeaderThree title>{data.title}</HeaderThree>
                  <Hr />
                </TitleContent>
                <CardInfo>{data.description}</CardInfo>

                <div>
                  <TitleContent>Stack</TitleContent>
                  <TagList>
                    {data.tags.map((tag, ind) => {
                      return <Tag key={`${tag}-${ind}`}>{tag}</Tag>;
                    })}
                  </TagList>
                </div>

                <UtilityList>
                  <ExternalLinks href={data.visit} target="_blank">
                    Demo
                  </ExternalLinks>
                  <ExternalLinks href={data.source} target="_blank">
                    Source Code
                  </ExternalLinks>
                </UtilityList>
              </BlogCard>
            </>
          );
        })}
      </GridContainer>
    </Section>
  );
};

const getProjects = () => {
  const projects: IProjectsData[] = [
    {
      title: "Project 1",
      description: "This is a demo description of the project",
      image: "images/1.png",
      tags: ["React", "Typescript", ".NET", "C#"],
      source: "",
      visit: "",
      id: v4(),
    },
    {
      title: "Project 2",
      description: "This is a demo description of the project",
      image: "images/2.png",
      tags: ["React", "Typescript"],
      source: "",
      visit: "",
      id: v4(),
    },
    {
      title: "Project 3",
      description: "This is a demo description of the project",
      image: "images/3.jpg",
      tags: [".NET"],
      source: "",
      visit: "",
      id: v4(),
    },
    {
      title: "Project 4",
      description: "This is a demo description of the project",
      image: "images/4.jpg",
      tags: ["React"],
      source: "",
      visit: "",
      id: v4(),
    },
  ];
  return projects;
};

export default Projects;
