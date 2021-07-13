import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: "4+", text: "Years in developing enterprise web apps" },
  // { number: 1000, text: "Students" },
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
