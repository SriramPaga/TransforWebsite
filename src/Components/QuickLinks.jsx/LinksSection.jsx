import React from 'react';
import LinksCard from './LinksCard';
import { styled } from 'styled-components';

const CustomContainer = styled.div`
  height: 60vh;
  max-width: 100vw;
  gap: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  scroll-snap-type: y mandatory;
  scroll-behavior: auto;
  overflow-x: auto;
  @media screen and (max-width: 420px) {
    font-size: small;
  }
`;

function LinksSection() {
  return (
    <CustomContainer>
      {/* <div className="h-36 mt-12 flex flex-col "> */}
      <h1 className="text-center uppercase text-3xl font-bold">
        Reach Quick Links
      </h1>
      <h6 className="text-center text-2xl">
        Here are some quick links to help you navigate through the website.{' '}
      </h6>
      {/* </div> */}
    
      <LinksCard />
     
    </CustomContainer>
  );
}

export default LinksSection;
