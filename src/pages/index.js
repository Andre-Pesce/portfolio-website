import React, { useState } from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Portfolio from "../components/Portfolio/Portfolio";
import AboutSection from "../components/AboutSection/AboutSection";
import Footer from "../components/Footer/Footer";
import { homeObjOne, homeObjTwo } from "../components/AboutSection/Data";


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <Portfolio />
      <AboutSection {...homeObjOne}/>
      <AboutSection {...homeObjTwo}/>
      <Footer />
    </>
  );
};

export default Home;
