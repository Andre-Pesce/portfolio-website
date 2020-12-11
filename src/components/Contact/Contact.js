import React from "react";
import { EmailButton } from "../ButtonElements";

import {
  ContactContainer,
  ContactWrapper,
  ContactRow,
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
} from "./ContactElements";

const Contact = ({
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
    <ContactContainer lightBg={lightBg} id={id}>
      <ContactWrapper>
        <ContactRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Subtitle darkText={darkText}>{description}</Subtitle>
            </TextWrapper>
            <EmailButton
              href="mailto:andrepesce95@hotmail.com"
              aria-label="e-mail"
            >
              Send me a message!
            </EmailButton>
          </Column1>
        </ContactRow>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
