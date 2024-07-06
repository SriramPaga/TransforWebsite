import React from 'react';
import Shape1 from '../Shapes/Shape1';
import HeroContent from './HeroContent';
import CircleShape from '../Shapes/CircleShape';

function HeroSection() {
  return (
    <div className="bg-RoseWhite h-screen ">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <Shape1 />
        <HeroContent />
        <CircleShape />
      </div>
    </div>
  );
}

export default HeroSection;
