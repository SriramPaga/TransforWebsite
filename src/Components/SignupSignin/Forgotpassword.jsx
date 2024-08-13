import React from 'react';
import { useState } from 'react';
import axios from 'axios';
export default function Forgotpassword({ toggle }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reenterpass, setReenterPass] = useState('');

  async function handlesubmit() {
    handlePasswordMatch();
    const data = await axios.post(
      'http://localhost:3001/auth/requestCRE',
      { email, password, reenterpass },
      {
        withCredentials: true,
      }
    );
  }

  function handlePasswordMatch() {
    if (password != reenterpass) {
      alert('password  match');
    }
  }

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handlesubmit();
        }}
      >
        <div className="flex justify-center self-center  z-10 h-screen">
          <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
            <div className="mb-4">
              <h3 className="font-semibold text-2xl text-gray-800">
                Forgot Password{' '}
              </h3>
              <p className="text-gray-500">Forgot password? Dont worry!</p>
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Email
                </label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  type="email"
                  placeholder="mail@gmail.com"
                />
              </div>
              <div className="otp">
                <div className="space-y-2">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Enter Otp
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    type=""
                    placeholder="Enter Otp"
                  />
                </div>
                <div className="mt-5">
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Resend OTP
                  </button>
                </div>
              </div>
              <div className="new-password">
                <div className="space-y-2">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    type=""
                    placeholder="Enter your password"
                  />
                </div>
                <div className="space-y-2">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Re enter password
                  </label>
                  <input
                    value={reenterpass}
                    onChange={(e) => setReenterPass(e.target.value)}
                    className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    type=""
                    placeholder="Re-enter your password"
                  />
                </div>
                <div className="mt-5">
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Reset Password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
