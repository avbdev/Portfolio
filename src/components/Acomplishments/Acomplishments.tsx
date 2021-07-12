import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: 20, text: "Open Source Projects" },
  { number: 1000, text: "Students" },
  { number: 1900, text: "Github Followers" },
  { number: 5000, text: "Github Stars" },
];

const Accomplishments: React.FC = () => {
  return (
    <Section>
      <SectionDivider />
      <SectionTitle style={{ paddingTop: "4rem" }}>
        Accomplishments
      </SectionTitle>
      <Boxes>
        {data.map((d, i) => {
          return (
            <Box key={i}>
              <BoxNum>{d.number}</BoxNum>
              <BoxText>{d.text}</BoxText>
            </Box>
          );
        })}
      </Boxes>
    </Section>
  );
};

export default Accomplishments;
