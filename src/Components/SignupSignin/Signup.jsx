import React from 'react';
import { useState } from 'react';
import axios from 'axios';
export default function Signup({ toggle }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState();
  const [club, setClub] = useState('');

  async function handlesubmit() {
    const data = await axios.post(
      'http://localhost:3001/auth/requestCRE',
      { name, email, password, phone, club },
      {
        withCredentials: true,
      }
    );
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
              <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
              <p className="text-gray-500">Please sign in to your account.</p>
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Name
                </label>
                <input
                  // onChange={(e) => setEmail(e.target.value)}
                  className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="mail@gmail.com"
                />
              </div>
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
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Phone
                </label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  type="number"
                  placeholder="mail@gmail.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Club Name
                </label>
                <input
                  value={club}
                  onChange={(e) => setClub(e.target.value)}
                  className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  type="text"
                  placeholder="mail@gmail.com"
                />
              </div>
              <div className="flex flex-col items-center justify-between">
                <div className="text-sm">
                  <a href="#" className="text-green-400 hover:text-green-500">
                    Forgot your password?
                  </a>
                </div>
                <div className="text-sm">
                  <a
                    onClick={() => {
                      toggle((prev) => !prev);
                    }}
                    className="text-green-400 hover:text-green-500"
                  >
                    Dont have an Account? Sign-up
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                >
                  Sign in
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
