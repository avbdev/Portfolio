import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";
import { BsDownload } from "react-icons/bs";

const Hero: React.FC = (props) => {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Web <br />
          Portfolio
        </SectionTitle>
        <SectionText>I'm a Software Developer.</SectionText>
        <a href="Bhardwaj_Resume_.pdf" download>
          <Button onClick={() => {}}>
            Resume{" "}
            <div style={{ paddingLeft: 15, paddingTop: 4 }}>
              <BsDownload />
            </div>
          </Button>
        </a>
      </LeftSection>
    </Section>
  );
};

export default Hero;
