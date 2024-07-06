import React from 'react';
import { MemberData } from '../../Dummydata/MemberData';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  align-items: center;
  gap: 30px;

  background-color: blueviolet;
  @media screen and (max-width: 420px) {
    max-width: 100%;
    display: flex;
    overflow: scroll;
    padding: 10px;
    align-items: flex-start;

    justify-content: flex-start;
  }
`;

function FaqCard() {
  return (
    <>
      {/* <div className="grid md:grid-cols-4 gap-4 justify-items-center content-center"> */}
      <div className="container bg-slate-400">
        <CardContainer>
          {MemberData.map((data, index) => {
            return (
              <div className="lg:min-w-96 sm:min-w-80 border border-gray-200 rounded-lg shadow">
                <div className="flex flex-col items-center pt-4 pb-10">
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {data.Name}
                  </h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {data.Designation}
                  </span>
                </div>
              </div>
            );
          })}
        </CardContainer>
      </div>
    </>
  );
}

export default FaqCard;
