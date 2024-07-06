import React from 'react';
import RtrLogo from '../../Images/MemberImages/Logos/Rotaract3192Black.png';


function Futer() {
  return (
    <div className="bg-gray-700 text-white  grid lg:grid-cols-3 xs:grid-cols-1 p-2 gap-2 h-60">
      <div className="flex lg:flex-wrap xs:flex-row lg:justify-end xs:justify-center ">
      <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            {/* <span className="sr-only">Your Company</span> */}
            <img className="h-12 w-auto" src={RtrLogo} alt="" />
          </a>
        </div>
      </div>

      <div className="flex lg:flex-row xs:flex-col justify-center items-center gap-5">
        <h6 className="text-base">
          <a href="#aboutus">About Us</a>
        </h6>
        <h6 className="text-base">
          <a href="#clublocater">Club Locater</a>
        </h6>
        <h6 className="text-base">
          <a href="#team">Team</a>
        </h6>
        <h6 className="text-base">
          <a href="#reporting">Reporting</a>
        </h6>
        <h6 className="text-base">
          <a href="#newletter">Newsletter</a>
        </h6>
        <h6 className="text-base">
          <a href="#contact"> Contact</a>
        </h6>
      </div>
      <div className="flex flex-row  justify-end">
        <div>
          <h6 className="text=base">Follow Us</h6>
        </div>
        <div className="flex gap-4 ml-4 mr-4">
          <div className="h-6 w-6">
            <img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png"></img>
          </div>
          <div className="h-6 w-6">
            {' '}
            <img src="https://cdn-icons-png.flaticon.com/128/15707/15707820.png"></img>
          </div>
          <div className="h-6 w-6">
            {' '}
            <img src="https://cdn-icons-png.flaticon.com/128/732/732200.png"></img>
          </div>
          <div className="h-6 w-6">
            {' '}
            <img src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png"></img>
          </div>
          <div className="h-6 w-6">
            {' '}
            <img src="https://cdn-icons-png.flaticon.com/128/145/145807.png" />
          </div>
          <div className="h-6 w-6 bg-white rounded">
            {' '}
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968830.png" />
          </div>

          <div className="h-6 w-6 bg-white rounded">
            {' '}
            <img src="https://cdn-icons-png.flaticon.com/128/174/174848.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Futer;
