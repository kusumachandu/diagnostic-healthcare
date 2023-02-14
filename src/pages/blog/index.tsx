import React from "react";
import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import config from '../../config/next-seo.config';
import { NextSeo } from "next-seo";

function blogspage() {
  const SEO = {
    ...config,
    title: 'Blog',
    description: 'Blogs related to the common issues faced by majority of the population',
  }
  
  const blogs = [
    {
      title: "attention Deficit",
      desc : "Not getting concentrated on what you are doing ?",
      image: "https://www.acamh.org/app/uploads/2019/12/Age-related-immaturity-web.png",
      id: 1,
    },
    {
      title: "Stress",
      desc: "Feeling stressed for some reason ?",
      image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/stress-1558362827.jpg",
      id: 2,
    },
    {
      title: "Sleep Dis-order",
      desc : "Depressed for something ?",
      image: "https://www.practostatic.com/health-wiki/images/3e2b1402cf0513d37599504ae8fe33d7.jpg",
      id: 3,
    },
    {
      title: "Addiction",
      desc : "Addicted for Something ?",
      image: "https://www.aimsindia.com/wp-content/uploads/2020/10/Asian-blog-image2-01-Oct.jpg",
      id: 4,
    },
    {
      title: "over thinking",
      desc : "Had a habbit of over thinking every minute ?",
      image: "https://images.squarespace-cdn.com/content/v1/60bf898a38e65d4d4ab9babe/1623275762977-LSZJ5D9OWBRNHGMTVJM7/overthinking.jpg",
      id: 5,
    },
    {
      title: "Eating Dis-order",
      desc : "You eat a lot or don't even feel any cravings for long time ?",
      image: "http://4.bp.blogspot.com/-J3M_8qpW8iE/VTqDHHbvTBI/AAAAAAAAARA/igcdwwoLISU/s1600/binge.jpg",
      id: 6,
    },
  ];
  
  const handleButtonClick = () => {
    const element = document.getElementById("blog");
    if(element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  };

  return (
    <>
    <NextSeo {...SEO} />
    <div>
      <Navbar />
      <div>
        <div className="border w-[95%] m-auto md:w-[80%] md:shadow-md shadow-md ld:w-[80%] lg:m-auto text-center rounded-2xl lg:transition-all lg:shadow-md dark:border-none dark:bg-gray-900">
          <div className="flex justify-around py-2 ">
            <div className="w-5 h-5 rounded-full bg-green-100"></div>
            <h1 className="text-green-400 text-2xl font-bold mt-4">Our Blog</h1>
            <div className="w-5 h-5 rounded-full bg-pink-300"></div>
          </div>
          <div className="font-bold text-lg md:text-3xl lg:text-3xl pb-5 lg:mt-5 lg:pb-5">
            <h1>Resources for the people and </h1>
            <h1>Health Care Precautions</h1>
          </div>
          <div className="pb-10">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This helps know better about your health and makes give you a good
              idea to maintain good health
            </p>
          </div>
          <div className="flex justify-center md:gap-28 gap-4 lg:gap-28 pb-10">
            <div className="w-5 h-5 rounded-full bg-pink-300"></div>
            <div className="">
              <button onClick={handleButtonClick} className="border text-white font-bold bg-black rounded-lg px-3 py-2 text-sm lg:text-md md:text-md">
                Go To Blogs
              </button>
            </div>
            <div className="w-5 h-5 rounded-full bg-green-100"></div>
          </div>
        </div>
        <div className="px-10 md:gap-14 lg:flex lg:justify-center lg:gap-5 mt-10 mb-10 lg:px-32">
          <div className="border md:w-[90%] md:m-auto lg:w-[55%] shadow-md rounded-lg dark:bg-gray-700 dark:border-none lg:py-5">
            <div className="rounded-lg md:w-[90%] md:h-[400px] m-auto md:pt-4 lg:pt-4">
              <img
                className="rounded-lg w-[100%] h-[100%] "
                alt="image"
                src="https://cdn.create.vista.com/api/media/small/210631768/stock-photo-patient-doctor-talking-looking-each"
              />
            </div>
            <div className="lg:px-7 md:px-7 px-1 pb-2 pt-6">
              <p className="font-bold md:text-3xl lg:text-3xl text-left md:text-left lg:text-left">
                You Might be in need of health checkup and doctor's consultation
                !!
              </p>
            </div>
          </div>
          <div className="mt-5 md:flex  justify-center lg:block  gap-2 md:gap-10 md:mt-10 lg:mt-0 md:w-[80%] md:m-auto lg:w-[30%]">
            <div className="w-[100%] px-4 py-4 md:px-10 lg:px-0 border md:py-4 lg:py-0 rounded-xl shadow-md dark:bg-gray-700 dark:border-none">
              <div className="w-full h-[150px] md:h-[200px] lg:h-[200px] rounded-lg lg:pb-4">
                <img
                  className="rounded-lg w-[100%] h-[100%]"
                  alt="image"
                  src="https://welkinhealth.com/wp-content/uploads/2019/08/wh-blog-mastering-the-doctor-patient-relationship.jpg"
                />
              </div>
              <div className="px-2 py-3 md:py-3 lg:pb-5">
                <p className="font-bold text-sm">
                  You can find the best doctor
                </p>
              </div>
            </div>
            <div className="w-[100%] mt-2 px-4 py-4 md:px-10 lg:px-0 border md:py-4 lg:py-0 rounded-xl shadow-md lg:mt-10 dark:bg-gray-700 dark:border-none">
              <div className="w-full h-[150px] md:h-[200px] lg:h-[200px] rounded-lg lg:pb-4">
                <img
                  className="rounded-lg w-[100%] h-[100%]"
                  alt="image"
                  src="https://welkinhealth.com/wp-content/uploads/2019/08/wh-blog-mastering-the-doctor-patient-relationship.jpg"
                />
              </div>
              <div className="px-2 py-3 md:py-3 lg:pb-5">
                <p className="font-bold text-sm">
                  You can find the best doctor
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[65%]  m-auto">
          <div className="border shadow-md bg-gray-200 py-20 rounded-xl">
            <p className="text-center text-black">Advertisement</p>
          </div>
        </div>
      </div>
      <div className="mb-10"></div>
      <main id="blog" className="p-4 w-[90%] md:w-[80%] lg:w-[70%] m-auto">
        <div className="px-5">
          <ul className="md:grid md:grid-cols-2 md:gap-x-4 lg:grid lg:grid-cols-3 lg:gap-x-4 justify-evenly">
            {blogs.map((blog) => (
              <li key={blog.id} className="mb-4 border text-center rounded-lg shadow-md dark:bg-gray-700 dark:border-none">
                <Link href="/blog/[id]" as={`/blog/${blog.id}`}>
                  <div className="">
                    <div className="w-[100%] m-auto">
                      <img className="rounded-t-lg" alt="image" src={blog.image} />
                    </div>
                  </div>
                  <p className="font-md uppercase mt-6 font-bold dark:text-stone-100">
                    {blog.title}
                  </p>
                  <div className="pt-2 pb-5 pl-2 md:pl-0 lg:pl-0 text-left md:text-center lg:text-center dark:text-gray-300">
                    <p>{blog.desc}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
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

export default blogspage;
