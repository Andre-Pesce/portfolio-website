import React from "react";
import Video from "../../assets/videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Hi, I'm Andre Pesce</HeroH1>
        <HeroP>I'm a Graduate Software Developer, based in Adelaide, Australia</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
