import React from "react";
import { RiArrowGoBackLine } from 'react-icons/ri';

function BookingSuccess({ handleSuccessPage }:any) {
  return (
    <>
      <div className="border md:w-[80%] ld:w-[80%] lg:m-auto text-center rounded-2xl lg:transition-all lg:shadow-md ">
        <div className="h-[500px] flex justify-center items-center">
          <div>
            <div className="flex justify-around py-2 mt-2">
              <div className="w-5 h-5 rounded-full bg-green-100"></div>
              <div className="w-14 h-14 rounded-full bg-green-400 flex justify-center items-center">
                <svg
                  className=""
                  viewBox="0 0 24 24"
                  width="30"
                  height="30"
                  stroke="currentColor"
                  stroke-width="3"
                  fill="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div className="w-5 h-5 rounded-full bg-pink-300"></div>
            </div>
            <div className="font-bold text-3xl mt-4 pb-5">
              <h1> Appointment booked Successfully! </h1>
            </div>
            <div className="pb-10">
              <p className="text-sm text-gray-500">
                Your appointment was booked successfully.
              </p>
            </div>
            <div className="flex justify-around py-2 mt-2">
            <div className="w-5 h-5 rounded-full bg-pink-300"></div>
              <button onClick={() => handleSuccessPage()} className="border text-white font-bold bg-black rounded-lg px-3 py-2">
                <div className="flex gap-2">
                    <RiArrowGoBackLine size='1.5rem' />
                  <p>Go Back</p>
                </div>
              </button>
              <div className="w-5 h-5 rounded-full bg-green-100"></div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default BookingSuccess;
