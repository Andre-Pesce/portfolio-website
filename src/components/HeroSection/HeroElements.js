import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 880.909px;
  poistion: relative;
  z-index: 1;

  :before {
    .content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180 deg, rgba(0, 0, 0, 0.2) 0%, transparent);
    z-index: 2;
  }

  ${"" /* Galaxy S10 */}
  @media screen and (max-height: 760px) {
    height: 760px;
  }

  ${"" /* Galaxy S7/S8/S9/Note 8/Note 9 */}
  @media screen and (max-height: 740px) {
    height: 740px;
  }

  ${"" /* Iphone 6/7/8 Plus */}
  @media screen and (max-height: 736px) {
    height: 736px;
  }

  ${"" /* Iphone 6/7/8 */}
  @media screen and (max-height: 667px) {
    height: 667px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;
