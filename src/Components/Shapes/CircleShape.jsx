import React from 'react';

function CircleShape() {
  return (
    <div
      className="absolute inset-x-0 top-[calc(100%-15rem)] -z-10 transform-gpu overflow-hidden blur-lg  sm:top-[calc(100%-38rem)]"
      aria-hidden="true"
    >
      <div
        className="relative left-[calc(50%+3rem)] aspect-[500/208] w-[36.125rem] -translate-x-1/2 bg-gradient-to-t from-[#f8b769] to-[#f2a516] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style={{
          clipPath: 'circle(50% at 50% 100%)',
          //   clipPath:'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      />
    </div>
  );
}

export default CircleShape;
