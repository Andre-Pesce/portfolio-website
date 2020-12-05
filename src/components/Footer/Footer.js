import React from "react";
import {animateScroll as scroll } from 'react-scroll'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        {/* <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink>Link</FooterLink>
              <FooterLink>Link</FooterLink>
              <FooterLink>Link</FooterLink>
              <FooterLink>Link</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink>Link</FooterLink>
              <FooterLink>Link</FooterLink>
              <FooterLink>Link</FooterLink>
              <FooterLink>Link</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink>Link</FooterLink>
              <FooterLink>Link</FooterLink>
              <FooterLink>Link</FooterLink>
              <FooterLink>Link</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink>Link</FooterLink>
              <FooterLink>Link</FooterLink>
              <FooterLink>Link</FooterLink>
              <FooterLink>Link</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer> */}
        <SocialMedia>
          <SocialMediaWrap>
            {/* <SocialLogo to="/" onClick={toggleHome}>Andre</SocialLogo> */}
            <WebsiteRights>
            © {new Date().getFullYear()} Andre Pesce
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//www.linkedin.com/in/andre-pesce/"
                target="_blank" 
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="//www.github.com/Andre-Pesce"
                target="_blank"
                aria-label="GitHub"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="//www.twitter.com/andrepesce"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="mailto:andrepesce95@hotmail.com"
                aria-label="e-mail"
              >
                <FaEnvelope />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
