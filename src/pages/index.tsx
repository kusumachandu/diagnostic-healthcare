import Navbar from "@/components/layouts/Navbar";
import Head from "next/head";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import lottie from "lottie-web";
import Imagepath from "../doctor.json";
import Card from "@/components/layouts/Card";

export default function Home() {

  function handleClickScroll(){
    const element = document.getElementById("test");
    if(element){
      element.scrollIntoView({behavior : 'smooth'})
    }
  }

  return (
    <div>
      <div className="m-0 bg-blue-50 rounded-br-[45%]">
        <div className="mt-[-30px] pb-20">
          <div className="flex justify-between">
            <div className="pl-40 py-20">
              <p className="font-bold text-[50px]">Health.</p>
              <p className="font-bold text-[50px]">Powered By Diagnost.</p>
              <div className="mt-3">
                <p className="text-lg">
                  Supporting better health outcomes and clinical excellence with{" "}
                  <br /> our technology.
                </p>
              </div>
              <div className="flex mt-10 gap-10">
                <button className="border w-44 font-bold  p-2 rounded-lg bg-blue-500 text-white uppercase hover:opacity-80">
                  Contact
                </button>
                <button onClick={handleClickScroll} className="border font-bold hover:border-blue-500 hover:shadow-md w-44 p-2 rounded-lg bg-white text-blue-500 uppercase hover:opacity-80">
                  Go For Test
                </button>
              </div>
            </div>
            <div className="pr-40 pt-5">
              <iframe
                className="w-[400px] h-[400px] rounded-full"
                src="https://embed.lottiefiles.com/animation/128391"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between  px-32 py-20">
        <div className="w-[45%] h-[300px] rounded-3xl">
          <img
            className="w-[75%] h-[100%] rounded-3xl"
            alt="image"
            src="https://sa1s3optim.patientpop.com/assets/images/provider/photos/1812100.jpg"
          />
        </div>
        <div className=" w-[55%] justify-center py-20">
          <div className="font-bold pb-5">
            <p className="text-3xl">Take good care of yourself</p>
          </div>
          <div className="w-[80%]">
            <p className="text-lg">
              Your body is sending you important signals about your health.
              Understand, manage, and get care for symptoms with trusted medical
              expertise in minutes.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-10 py-20">
        <div>
          <div className="w-24 h-24 rounded-full bg-red-200"></div>
          <div className="text-center py-2">
            <p>STEP 1</p>
          </div>
        </div>
        <div className="bg-gray-500 h-2 w-32 rounded-lg mt-12"></div>
        <div>
          <div className="w-24 h-24 rounded-full bg-blue-200"></div>
          <div className="text-center py-2">
            <p>STEP 2</p>
          </div>
        </div>
        <div className="bg-gray-500 h-2 w-32 rounded-lg mt-12"></div>
        <div>
          <div className="w-24 h-24 rounded-full bg-green-200"></div>
          <div className="text-center py-2">
            <p>STEP 3</p>
          </div>
        </div>
      </div>
      <div id="test" className="border-2 rounded-tr-[50%] py-24 bg-blue-50">
        <Card />
      </div>
    </div>
  );
}
