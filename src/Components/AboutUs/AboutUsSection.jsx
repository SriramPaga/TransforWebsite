import React from 'react';
import { styled } from 'styled-components';

import CardDisplay from './CardDisplay';
const CustomContainer = styled.div`
  /* height: 100vh; */
  /* max-width: 100vw; */
  gap: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  /* scroll-snap-type: y mandatory; */
  scroll-behavior: smooth;
  /* overflow-x: auto; */
`;
function AboutUsSection() {
  return (
    <CustomContainer id='aboutus'>
      <CardDisplay />
    </CustomContainer>
  );
}

export default AboutUsSection;
