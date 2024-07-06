import React from 'react';

function SparkHeroContent() {
  return (
    <div className="mx-auto  max-w-5xl py-32 sm:py-48 lg:py-56">
      <div className="mb-8 flex justify-center ">
        {/* <div className="hover:bg-darkTangerine duration-300  relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
        Where Youth Makes a Splash.
      </div> */}
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Spark: Transform Leaders Training
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Get ready to shine with SPARK!
        </p>
        <p className="mt-6 text-lg leading-5 text-gray-600 text-justify">
          Are you passionate about Rotaract? Do you want to learn more? Then
          mark your calendars for SPARK, taking place on 8th and 9th June 2024
          at Dayanand Sagar University on the first day and at Adithya Gardens
          on the second day. This exciting event will feature training,
          networking and a lot of fun!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="#"
            className="rounded-md bg-darkTangerine px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-darkTangerine focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Register Now
          </a>
          {/* <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Learn more <span aria-hidden="true">→</span>
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default SparkHeroContent;
