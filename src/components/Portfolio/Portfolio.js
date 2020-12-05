import React from "react";
import Icon1 from '../../assets/images/edms-search-sample.png'
import Icon2 from '../../assets/images/edms-search-sample.png'
import Icon3 from '../../assets/images/edms-search-sample.png'

import {
  PortfolioContainer,
  PortfolioH1,
  PortfolioWrapper,
  PortfolioCard,
  PortfolioIcon,
  PortfolioH2,
  PortfolioP,
} from "./PortfolioElements";

const Portfolio = () => {
  return (
    <PortfolioContainer id="portfolio">
      <PortfolioH1>PORTFOLIO</PortfolioH1>
      <PortfolioWrapper>
        <PortfolioCard>
          <PortfolioIcon src={Icon1} />
          <PortfolioH2>Engineering Data Management System</PortfolioH2>
          <PortfolioP>Created with Django Framework</PortfolioP>
        </PortfolioCard>

      </PortfolioWrapper>
    </PortfolioContainer>
  );
};

export default Portfolio;
