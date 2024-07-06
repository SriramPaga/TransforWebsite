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
function TrainingAgenda() {
  return (
    <CustomContainer>
      <h2 className="lg:text-5xl sm:text-xl font-bold tracking-tight text-gray-900 ">
        The Residential Training Agenda
      </h2>
      <h4 className="lg:text-3xl sm:text-xl font-bold tracking-tight text-gray-900  ">
        Unleash Your Inner Rotaract Hero: A Training Beyond Ordinary!
      </h4>
      <p>
        Get ready for a two-day residential training experience that goes beyond
        just learning! This first-ever District 3192 Training will equip you
        with a powerful blend of:{' '}
      </p>

      <div className="">
        <h3 className="text-5xl">
          SPARK is your helium injection! Here's why you NEED to attend:
        </h3>
      </div>
      <CustomRow>
        <CustomCol>
          <ul className="list-disc">
            <div>Day 1</div>
            <li>
              Unleash Your Inner Superhero: No capes required, but you'll
              discover the power to tackle any Rotaract challenge.
            </li>
            <li>
              Mastermind Missions: Breakout sessions that transform you from a
              lone Rotaract warrior to a skilled service crusader.
            </li>
            <li>
              Epic Dance Party: Unleash your inner party animal (responsibly, of
              course) at the legendary Rotaract DJ Night.
            </li>
          </ul>
        </CustomCol>
        <CustomCol>
          <ul>
            <div>Day 2</div>
            <li>
              Laughter is the Best Medicine: Start Day 2 with Laughter Yoga –
              the most fun way to boost focus and connection.
            </li>
            <li>
              Level Up Your Leadership: Learn from inspiring Rotarian leaders
              and fellow heroes, crafting a personalized action plan to conquer
              your club goals.
            </li>
            <li>
              First Dibs on District Secrets: Get the inside scoop on the latest
              Rotaract District initiatives straight from the source.
            </li>
          </ul>
        </CustomCol>
      </CustomRow>
      <div>
        Don't miss out! SPARK is more than just a training – it's an adventure
        that will ignite your passion for Rotaract and equip you to make a real
        difference. See you there, fellow Rotaract Superhero! ‍
      </div>
    </CustomContainer>
  );
}

export default TrainingAgenda;
