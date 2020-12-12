import React from "react";

import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  TextWrapper,
  TopLine,
  Subtitle,
} from "./AboutElements";

const About = ({ lightBg, id, imgStart, topLine, darkText, description }) => {
  return (
    <AboutContainer lightBg={lightBg} id={id}>
      <AboutWrapper>
        <AboutRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Subtitle darkText={darkText}>{description}</Subtitle>
            </TextWrapper>
          </Column1>
        </AboutRow>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;
