import React from 'react';
import { motion } from 'framer-motion';
import { styled } from 'styled-components';
import FaqCard from './FaqCard';
import Faqcard2 from './Faqcard2';
const CustomContainer = styled.div`
  height: 100vh;
  /* max-width: 100vw; */
  gap: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  scroll-snap-type: y mandatory;
  scroll-behavior: auto;
  overflow-x: auto;
  @media screen and (max-width: 420px) {
    font-size: small;
  }
`;

function FaqSection() {
  return (
    <CustomContainer>
      <div className="mt-24 flex flex-col align-center ">
        <h1 className="text-center uppercase text-3xl font-bold">
          Frequently Asked Changes
        </h1>
        <h6 className="text-center text-2xl">
          Here are some quick FAQs to help you navigate through the website.{' '}
        </h6>
      </div>
      <div className='flex  xs:flex-col md:flex-row gap-2'>
        <Faqcard2 />
      </div>
    </CustomContainer>
  );
}

export default FaqSection;
