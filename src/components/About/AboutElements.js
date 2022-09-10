import styled from "styled-components";

export const AboutContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? "#FFF3D9" : "#010606")};
`;

export const AboutWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 728px;
  width: 100%;
  max-width: 1800px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px) {
    height: 860px;
  }
`;

export const AboutRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "col1";

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }

  @media screen and (max-width: 1209px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 10px;
  padding: 0 15px;
  grid-area: col1;

  @media screen and (max-width: 768px) {
    margin-bottom: 0px;
    padding: 0 0px;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;
export const TextWrapper = styled.div`
  max-width: 1000px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 0px;
    padding-left: 0px;
  }

  @media screen and (max-width: 1209px) {
    margin-top: 40px;
  }
`;

export const TopLine = styled.p`
  color: #ff8300;
  font-size: 24px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  text-align: center;
  padding-bottom: 20px;

  @media screen and (max-width: 768px) {
    text-align: left;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 1200px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  white-space: pre-wrap;
  color: ${({ darkText }) => (darkText ? "#fff" : "#010606")};

  @media screen and (max-width: 768px) {
    margin-bottom: 0px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 800px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const Vid = styled.video`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const FadeInSection = styled.div`
  opacity: 0;
  transform: translateY(20vh);
  visibility: hidden;
  transition: opacity 0.6s ease-out, transform 1.2s ease-out;
  will-change: opacity, visibility;

  &:is-visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }
`;
