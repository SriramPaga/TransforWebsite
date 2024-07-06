import React, { useState, useRef, useEffect } from 'react';
import autoAnimate from '@formkit/auto-animate';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Faqdata } from '../../Dummydata/Faqdata';
function Qcard(props) {
  return (
    <div className="lg:w-96 xs:min-w-80 lg:h-44 xs:min-h-40  flex align-middle justify-center  border border-gray-200 rounded-lg shadow p-4 bg-yellow-500 ">
      <div className="flex justify-center items-center">
        <h5 className="mb-1 text-2xl font-medium text-gray-900 dark:text-white">
          {props.data.Ques}
        </h5>
      </div>
    </div>
  );
}

function Acard(props) {
  return (
    <div className="lg:w-96 sm:min-w-80 border border-gray-200 rounded-lg shadow p-4 bg-black">
      <div className="flex flex-col items-center pt-4 pb-10">
        <h5 className="mb-1 text-xl font-medium text-gray-400 dark:text-white">
          {props.data.Ques}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, sint
          debitis! Libero non eaque explicabo ab. Dolores asperiores sit error.
          Consectetur nulla fugiat voluptatem sed nesciunt, ut saepe ipsum
          corporis!
        </span>
      </div>
    </div>
  );
}

function Faqcard2() {
  const [ansClicked, setAnsClicked] = useState(-1);

  const [parentRef, enableAnimations] = useAutoAnimate(/* optional config */);
  function ansHandler(index) {
    setAnsClicked(index);
  }

  return (
    <>
      {Faqdata.map((data, index) => {
        return (
          <div key={index} ref={parentRef} onClick={(id) => ansHandler(index)}>
            {index == ansClicked ? (
              <Acard data={data} />
            ) : (
              <Qcard data={data} />
            )}
          </div>
        );
      })}
    </>
  );
}

export default Faqcard2;
