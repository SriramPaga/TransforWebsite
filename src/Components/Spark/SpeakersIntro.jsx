import React from 'react';

import { styled } from 'styled-components';

const CustomContainer = styled.div`
  height: 100vh;
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

const CustomRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin: 0;
  padding-left: 50px;
  padding-right: 50px;
  @media screen and (max-width: 420px) {
    display: flex;
    flex-direction: column;
  }
`;
const CustomCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px;
`;

const SpeakersIntro = () => {
  return <div>SpeakersIntro</div>;
};

export default SpeakersIntro;
