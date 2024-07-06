import React from 'react';
import { cardData } from '../../Dummydata/CardData';
import { motion } from 'framer-motion';
import { styled } from 'styled-components';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 350px);
  justify-content: center;
  align-items: center;
  gap: 20px;
  /* height: 80vh; */
  @media screen and (max-width: 420px) {
    max-width: 100%;
    display: flex;
    overflow: scroll;
    padding: 10px;
    align-items: flex-start;
    /* white-space: nowrap; */
    justify-content: flex-start;
    /* scroll-snap-align: center; */
  }
  @media screen and (max-width: 740px) {
    max-width: 100%;
    display: flex;
    overflow: scroll;
    padding: 10px;
    align-items: flex-start;
    /* white-space: nowrap; */
    justify-content: flex-start;
    /* scroll-snap-align: center; */
  }
`;
function LinksCard() {
  return (
    <CardContainer>
      {cardData.map((data, index) => {
        return (
          // <div className="bg-lightBrown text-white min-w-80 rounded  shadow-lg m-1 h-max snap-center">
          <div className="hover:scale-110 ease-in-out duration-75 text-black min-w-80 rounded-s-lg  m-1 h-max snap-center border-4 shadow-md border-yellow-400 ">
            <div className="px-6 py-4">
              <div className="flex justify-center">
                <data.Icon className="w-20 h-20" />
              </div>
              <div className="font-bold text-xl mb-2 flex justify-center ">
                {data.Title}
              </div>
              {/* <p className="text-base">{data.Description}</p> */}
            </div>
          </div>
        );
      })}
    </CardContainer>
  );
}

export default LinksCard;
