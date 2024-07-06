import React from 'react';
import { MemberData } from '../../Dummydata/MemberData';
import MemberCard2 from './MemberCard2';
import MemberCard from './MemberCard';
import { ArrowDownLeftIcon } from '@heroicons/react/20/solid';
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/outline';

function CardDisplay() {
  const sliderLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const sliderRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div className="w-full flex flex-col min-h-screen ">
      <div className="flex justify-center text-center my-8">
        <div className="w-full lg:w-full px-4">
          <h1 className="text-gray-900 text-4xl font-bold mb-8">
            Meet the Team
          </h1>

          {/* <p className="text-gray-700 text-lg font-light">
            With over 100 years of combined experience, we've got a
            well-seasoned team at the helm.
          </p> */}
        </div>
      </div>
      <div className="bg-yellow-500 w-full flex  justify-around items-center">
      
        <ArrowLeftCircleIcon
          className="size-14 text-white"
          onClick={sliderLeft}
        />
        <div className="flex justify-center items-center relative top-40">
          <div className="container ">
            <MemberCard />
          </div>
        </div>
        <ArrowRightCircleIcon
          className="size-14 text-white"
          onClick={sliderRight}
        />
      </div>
    </div>
  );
}

export default CardDisplay;
