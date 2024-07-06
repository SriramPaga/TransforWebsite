import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import SparkHeroContent from '../Components/Spark/SparkHeroContent';
import Shape1 from '../Components/Shapes/Shape1';
import CircleShape from '../Components/Shapes/CircleShape';
import styled from 'styled-components';
import Spark from '../Images/sparkles.png';
import TrainingAgenda from '../Components/Spark/TrainingAgenda';
function Sparkview() {
  const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    scroll-behavior: auto;
    overflow-y: auto;
    background-color: '#486b73';
  `;
  const CustomSection = styled.section`
    height: 100%;
    width: 100%;
    z-index: 0;
    scroll-snap-align: center;
  `;

  return (
    <Container>
      <CustomSection>
        <div className="bg-RoseWhite h-screen">
          <div className="relative isolate px-6 pt-14 lg:px-8">
            <div
              className="absolute inset-x-0 top-[calc(100%-15rem)] -z-10 transform-gpu overflow-hidden blur-sm  sm:top-[calc(100%-38rem)]"
              aria-hidden="true"
            >
              <div className="relative left-[calc(50%+3rem)] aspect-[500/208] w-[36.125rem] -translate-x-1/2  opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]">
                <img src={Spark} />
              </div>
            </div>

            <SparkHeroContent />
            {/* <CircleShape /> */}
          </div>
        </div>
      </CustomSection>

      <CustomSection>
        <TrainingAgenda />
      </CustomSection>
    </Container>
  );
}

export default Sparkview;
