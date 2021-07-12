import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero: React.FC = (props) => {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bhardwaj <br />
          Avasarala
        </SectionTitle>
        <SectionText>
          I'm a Software Developer and this is a portfolio to show the projects
          I have been working on.
        </SectionText>
        <Button onClick={() => {}}>Learn More</Button>
      </LeftSection>
    </Section>
  );
};

export default Hero;
