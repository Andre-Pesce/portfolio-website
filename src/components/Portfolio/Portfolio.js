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
  Img,
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
  isVid,
  img,
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
              {isVid ? (
                <Vid autoPlay loop muted src={img} type="video/mp4" />
              ) : (
                <Img src={img} alt={alt} />
              )}
            </ImgWrap>
          </Column2>
        </PortfolioRow>
      </PortfolioWrapper>
    </PortfolioContainer>
  );
};

export default Portfolio;
