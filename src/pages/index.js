import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import HeroSection from "../components/HeroSection/HeroSection";
import Portfolio from "../components/Portfolio/Portfolio";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import { portfolioData } from "../components/Portfolio/Data";
import { aboutData } from "../components/About/Data";
import { contactData } from "../components/Contact/Data";


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
      <Portfolio {...portfolioData} />
      <About {...aboutData}/>
      <Contact {...contactData}/>
      <Footer />
    </>
  );
};

export default Home;
