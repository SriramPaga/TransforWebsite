import React from 'react';
import NavigationBar from '../Components/NavigationBar/NavigationBar';
import HeroCarousel from '../Components/HeroSection/HeroCarousel';
import LinksCard from '../Components/QuickLinks.jsx/LinksCard';
import styled from 'styled-components';

import HeroSection from '../Components/HeroSection/HeroSection';
import LinksSection from '../Components/QuickLinks.jsx/LinksSection';

import AboutUsSection from '../Components/AboutUs/AboutUsSection';
import FaqCard from '../Components/FAQ/FaqCard';
import FaqSection from '../Components/FAQ/FaqSection';
import Futer from '../Components/Footer/FooterSection';

const Container = styled.div`
  height: '100%';
  /* scroll-snap-type: y mandatory; */
  /* scroll-behavior: smooth; */
  /* overflow-y: auto; */
  /* background-color: '#486b73'; */
`;
const CustomSection = styled.section`
  /* height: 100%;
  width: 100%;
  z-index: 0;
  scroll-snap-align: center; */
`;
function LandingPage() {
  return (
    <Container>
      <CustomSection>
        <HeroSection />
      </CustomSection>
      <CustomSection>
        <LinksSection />
      </CustomSection>
      <CustomSection>
        <AboutUsSection />
      </CustomSection>
      <CustomSection>
        <FaqSection />
      </CustomSection>
    </Container>
    // <>
    //   <HeroSection />
    //   <LinksSection />
    //   <AboutUsSection />
    // </>
  );
}

export default LandingPage;
