import React from "react";

import {
  PortfolioContainer,
  PortfolioWrapper,
  PortfolioRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrap,
  Vid,
} from "./PortfolioElements";

const Portfolio = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  vid,
  alt,
}) => {
  return (
    <PortfolioContainer lightBg={lightBg} id={id}>
      <PortfolioWrapper>
        <PortfolioRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Vid autoPlay loop muted src={vid} alt={alt} type="video/mp4" />
            </ImgWrap>
          </Column2>
        </PortfolioRow>
      </PortfolioWrapper>
    </PortfolioContainer>
  );
};

export default Portfolio;
