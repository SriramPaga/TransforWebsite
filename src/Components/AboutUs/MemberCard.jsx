import React from 'react';
import { MemberData } from '../../Dummydata/MemberData';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 30px;
  overflow-x: scroll;
  scroll-behavior: smooth;
  white-space: nowrap;
  @media screen and (max-width: 420px) {
    max-width: 100%;
    display: flex;
    overflow: scroll;
    padding: 10px;
    align-items: flex-start;

    justify-content: flex-start;
  }
`;

function MemberCard() {
  return (
    <>
      <CardContainer id="slider">
        {MemberData.map((data, index) => {
          return (
            <div className="min-w-80 bg-white border-2 border-yellow-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center pb-10">
                <img
                  className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center"
                  src={data.Avatar}
                  alt="Bonnie image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {data.Name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {data.Designation}
                </span>
                <div className="flex mt-4 md:mt-6">
                  <a
                    href="#"
                    // className="no-underline inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    className="no-underline inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-lightBrown rounded-lg"
                  >
                    {/* <img src="https://cdn-icons-png.flaticon.com/128/2343/2343522.png" /> */}
                    Contact
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </CardContainer>
    </>
  );
}

export default MemberCard;
