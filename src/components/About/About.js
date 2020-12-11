import React from "react";
import { Button } from "../ButtonElements";

import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  Vid,
} from "./AboutElements";

const About = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  isVid,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
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
