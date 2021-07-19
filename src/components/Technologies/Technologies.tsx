import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies: React.FC = () => {
  return (
    <Section id="tech">
      <SectionDivider />
      <SectionTitle style={{ paddingTop: "4rem" }}>Technologies</SectionTitle>
      <SectionText>
        I have worked on various projects in Frontend and Backend.
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem" />
          <ListContainer>
            <ListTitle>Frontend</ListTitle>
            <ListParagraph>
              Experience with <br />
              React.js, Typescript, Node.js, Javascript
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <DiFirebase size="3rem" />
          <ListContainer>
            <ListTitle>Backend</ListTitle>
            <ListParagraph>
              Experience with <br />
              .NET, Node.js, Swift
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <DiZend size="3rem" />
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with tools like <br />
              Figma, Adobe Photoshop, Adobe AfterEffects
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  );
};

export default Technologies;
