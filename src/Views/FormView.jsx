import React from 'react';
import { styled } from 'styled-components';
import ReportingForm from '../Components/Inputfields/ReportingForm';
const Container = styled.div`
  height: '100%';
  /* scroll-snap-type: y mandatory; */
  scroll-behavior: smooth;
  /* overflow-y: auto; */
  /* background-color: '#486b73'; */
  /* background-color: "#000000"; */
`;
const CustomSection = styled.section`
  height: 100%;
  width: 100%;
  z-index: 0;
  /* scroll-snap-align: center; */
`;

function FormView() {
  return (
    <Container>
      <CustomSection>
        <div className="mx-10 md:mx-72 bg">
          <div className="py-12 px-6 mt-12 bg-orange-200  rounded space-y-12 ">
            <div className="flex justify-center align-middle">
              <h1 className="text-4xl md:text-7xl font-semibold  text-gray-900">
                Reporting
              </h1>
            </div>
            <div className="">
              <div className="text-md md:text-md font-semibold  text-gray-900">
                Please use this form to report the statistics of your Club
                activities. Share the statistics and numbers for all your Club
                projects for the specified month. For more information, contact
                your ZRR/ZRS.
              </div>
              <div className="text-md md:text-md font-semibold  text-gray-900">
                Deadline for reporting: 2nd of each month by 11:59 pm. (For
                example, projects completed in July should be reported on or
                before August 2nd.)
              </div>
              <div className="text-md md:text-md font-semibold  text-gray-900">
                Your Club's reporting for the month will be considered complete
                only after filling out this form. Thank you!
              </div>
            </div>
          </div>
          <ReportingForm />
        </div>
      </CustomSection>
    </Container>
  );
}

export default FormView;
