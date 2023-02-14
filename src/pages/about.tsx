import Navbar from "@/components/layouts/Navbar";
import React from "react";
import { NextSeo } from "next-seo";
import config from '../config/next-seo.config';

function About() {
  const SEO = {
    ...config,
    title: 'About',
    description: 'Mehraaj is a leading doctor and have x years of experience in treating x diseases in x hospital.'
  }
  return (
    <>
    <NextSeo {...SEO} />
    <div>
      <Navbar />
      <div className="px-10">
        <div className="rounded-lg  md:w-[600px] lg:w-[600px] m-auto">
          <img
            className="rounded-lg md:rounded-3xl"
            alt="image"
            src="https://st.depositphotos.com/2309453/2682/i/950/depositphotos_26820645-stock-photo-serious-mature-doctor-holding-x.jpg"
          />
        </div>
        <div className="text-center md:mt-6 lg:mt-6 mt-3">
          <p className="font-bold text-2xl dark:text-stone-400">Dr. ChandraShekar</p>
          <p className="text-sm md:mb-10 lg:mb-10 dark:text-gray-500">MBBS, FRCS, Diagnostic</p>
        </div>
        <div className="mt-5 md:justify-between md:mx-14 md:flex md:gap-1 lg:flex lg:gap-10 lg:mx-32 lg:justify-around mb-10 md:mb-0 lg:mb-0">
          <div className="md:mb-16 md:w-[200%] lg:w-[70%]">
            <h1 className="font-bold text-blue-900 dark:text-blue-700 text-center md:text-left md:text-3xl md:mb-5 lg:text-left lg:text-4xl lg:mb-4 mb-5 mt-8 text-3xl">
              STORY
            </h1>
            <p className="font-bold text-center md:text-left lg:text-left md:text-md lg:text-lg lg:w-[350px] dark:text-gray-500">
              we're building the website for the self diagnostic testing and
              slot bookings for the doctor's consultation
            </p>
            <div className="mt-10 mb-10 md:mb-0 lg:mb-0">
              <div className="md:flex lg:flex">
                <img
                  className="w-[100px] m-auto h-[80px] md:w-[120px] md:h-[100px] md:ml-[-20px] lg:w-[150px] lg:h-[100px] lg:ml-[-24px] rounded-lg"
                  alt="image"
                  src="	https://craftwork-images.b-cdn.net/wp-content/uploads/call-the-doctor-19-medicine.png"
                />
                <p className="mt-4 text-sm md:w-[300px] lg:w-[300px] lg:text-[18px] lg:ml-2 md:ml-2 ml-2 dark:text-gray-500 ">
                  A living place for curiosity and collaboration, meeting and
                  meaning. The heart
                </p>
              </div>
            </div>
          </div>
          <div className="lg:px-5 md:px-5 py-5  md:pl-10 md:py-0 lg:py-0 lg:w-[70%]">
            <div className="lg:mt-[85px] md:mt-[52px]">
              <h1 className="font-bold md:text-md lg:text-lg dark:text-slate-300">
                01. years of intense experience
              </h1>
              <p className="md:px-7 lg:px-7 mt-2 mb-2 md:mb-4 md:text-[14px] lg:mb-4 text-sm lg:text-[16px] text-gray-500">
                Our experience helps you know better about your health and how
                could you make out your health perfcet
              </p>
            </div>
            <div>
              <h1 className="font-bold md:text-md lg:text-lg dark:text-slate-300">
                02. Contact monitoring
              </h1>
              <p className="md:px-7 lg:px-7 mt-2 text-sm md:text-[14px] lg:text-[16px] text-gray-500">
                Just make sure you enter your contact details and give some
                information about the situation that you are facing currently
                which helps us to contact you through phone
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="md:flex md:justify-between md:px-14 lg:flex lg:justify-between lg:gap-10 lg:px-32 md:mb-10 md:mt-10">
            <div className="px-5 lg:px-0 md:px-0 md:w-[55%]  lg:w-[55%] lg:mt-10">
              <h1 className="text-blue-900 dark:text-blue-700 font-bold text-3xl md:text-3xl md:text-left md:mt-5 md:mb-3 lg:text-4xl text-center lg:text-left lg:mt-5">
                Mission
              </h1>
              <p className="md:px-0 md:w-[100%] md:text-md md:text-gray-600 lg:px-0 lg:w-[80%] text-sm lg:text-lg lg:text-gray-600 mt-2 mb-2 dark:text-gray-500">
                we're building the website for the self diagnostic testing and
                slot bookings for the doctor's consultation and can share the
                contact details for an mobile consultation for your precautions
              </p>
            </div>
            <div className="">
              <div className="w-[200px] md:w-[250px] lg:w-[600px] m-auto rounded-3xl mt-8 md:mt-0">
                <img
                  className="rounded-3xl lg:ml-16 h-[100%]"
                  alt="image"
                  src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?b=1&s=170667a&w=0&k=20&c=ZAXJYLesh6gSd9huAgpy6rjpR4z-IFVH9MpxrKIXCrs="
                />
              </div>
            </div>
          </div>
          <div className=" md:flex md:justify-between md:mx-14 md:gap-2 lg:flex lg:justify-between lg:gap-10 lg:px-32">
            <div className="lg:ml-[-60px] w-[200px] m-auto md:w-[250px] lg:w-[600px] rounded-3xl mt-8 md:ml-[-1px]">
              <img
                className="rounded-3xl h-[100%]"
                alt="image"
                src="https://thumbs.dreamstime.com/b/african-male-doctor-happy-tablet-computer-34481166.jpg"
              />
            </div>
            <div className="px-5 mt-10 lg:px-0 md:w-[45%] lg:w-[55%] lg:mt-10">
              <h1 className="text-blue-900 dark:text-blue-700 text-center md:text-left md:text-3xl lg:text-left lg:mt-20 lg:ml-10 lg:text-4xl font-bold text-3xl">
                Vision
              </h1>
              <p className=" text-sm mt-2 mb-2 md:px-0 md:w-[100%] md:text-left lg:px-0 lg:w-[80%] lg:ml-10 lg:text-gray-600 lg:text-lg lg:text-gray dark:text-gray-500">
                we believe the world will look very different after this
                pandemic, as it did other the second Covid and the health crisis
                of 2020. As it always does, after it has faced destruction.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-8 border-blue-100 bg-gray-300 mt-20">
        <div className="md:flex md:justify-evenly lg:flex  lg:justify-around py-8">
          <div className="flex justify-center">
            <p className="font-bold  text-gray-500 md:hidden lg:hidden">Contact:  </p>
            <p className="text-gray-500 pl-3 md:pl-0 lg:pl-0">+91 9129393939</p>
          </div>
          <div className="flex md:flex-none lg:flex-none justify-center py-2 md:py-0 lg:py-0">
            <p className="font-bold text-gray-500 md:hidden lg:hidden">Gmail:  </p>
            <p className="text-gray-500 pl-[5px] md:pl-0 lg:pl-0">chandu@gmail.com</p>
          </div>
          <div>
            <p className="text-gray-500 text-center">@2023 Copyright Doctor'sName</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default About;
