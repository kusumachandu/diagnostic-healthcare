import React from "react";
import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";

function blogspage() {
  const blogs = [
    {
      title: "attention Deficit",
      desc: "Not getting concentrated on what you are doing ?",
      image:
        "https://www.acamh.org/app/uploads/2019/12/Age-related-immaturity-web.png",
      id: 1,
    },
    {
      title: "Stress",
      desc: "Feeling stressed for some reason ?",
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/stress-1558362827.jpg",
      id: 2,
    },
    {
      title: "Sleep Dis-order",
      desc: "Depressed for something ?",
      image:
        "https://www.practostatic.com/health-wiki/images/3e2b1402cf0513d37599504ae8fe33d7.jpg",
      id: 3,
    },
    {
      title: "Addiction",
      desc: "Addicted for Something ?",
      image:
        "https://www.aimsindia.com/wp-content/uploads/2020/10/Asian-blog-image2-01-Oct.jpg",
      id: 4,
    },
    {
      title: "over thinking",
      desc: "Had a habbit of over thinking every minute ?",
      image:
        "https://images.squarespace-cdn.com/content/v1/60bf898a38e65d4d4ab9babe/1623275762977-LSZJ5D9OWBRNHGMTVJM7/overthinking.jpg",
      id: 5,
    },
    {
      title: "Eating Dis-order",
      desc: "You eat a lot or don't even feel any cravings for long time ?",
      image:
        "http://4.bp.blogspot.com/-J3M_8qpW8iE/VTqDHHbvTBI/AAAAAAAAARA/igcdwwoLISU/s1600/binge.jpg",
      id: 6,
    },
  ];

  return (
    <>
      <Navbar />
      <div>
        <div>
          <div className="border md:w-[80%] ld:w-[80%] lg:m-auto text-center rounded-2xl lg:transition-all lg:shadow-md">
            <div className="flex justify-around py-2 mt-2">
              <div className="w-5 h-5 rounded-full bg-green-100"></div>
              <h1 className="text-green-400 ">Our Blog</h1>
              <div className="w-5 h-5 rounded-full bg-pink-300"></div>
            </div>
            <div className="font-bold text-3xl pb-5">
              <h1>Resources for the people and </h1>
              <h1>Health Care Precautions</h1>
            </div>
            <div className="pb-10">
              <p className="text-sm text-gray-500">
                This helps know better about your health and makes give you a
                good idea to maintain good health
              </p>
            </div>
            <div className="flex justify-center gap-28 pb-10">
              <div className="w-5 h-5 rounded-full bg-pink-300"></div>
              <div>
                <button className="border text-white font-bold bg-black rounded-lg px-3 py-2">
                  Go To Blogs
                </button>
              </div>
              <div className="w-5 h-5 rounded-full bg-green-100"></div>
            </div>
          </div>
          <div className="flex justify-center gap-14 mt-10 mb-10">
            <div className="border w-[40%] shadow-md rounded-lg">
              <div className="rounded-lg w-[90%] h-[400px] m-auto pt-4">
                <img
                  className="rounded-lg w-[100%] h-[100%] "
                  alt="image"
                  src="https://cdn.create.vista.com/api/media/small/210631768/stock-photo-patient-doctor-talking-looking-each"
                />
              </div>
              <div className="px-7 py-3">
                <p className="font-bold text-3xl">
                  You Might be in need of health checkup and doctor's
                  consultation !!
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-sm mt-7 px-7 cursor-pointer">
                  Check for the contact details in the footer
                </p>
                <p className="pr-7 text-sm mt-7 hover:underline hover:text-blue-300 cursor-pointer">
                  chandu@gmail.com
                </p>
              </div>
            </div>
            <div className="w-[30%] ">
              <div className="w-[100%] px-10 border py-4 rounded-xl shadow-md">
                <div className="w-full h-[200px] rounded-lg">
                  <img
                    className="rounded-lg w-[100%] h-[100%]"
                    alt="image"
                    src="https://welkinhealth.com/wp-content/uploads/2019/08/wh-blog-mastering-the-doctor-patient-relationship.jpg"
                  />
                </div>
                <div className="px-2 py-3">
                  <p className="font-bold text-sm">
                    You can find the best doctor
                  </p>
                </div>
              </div>
              <div className="w-[100%] px-10 border py-4 rounded-xl mt-4 shadow-md">
                <div className="w-full h-[200px] rounded-lg">
                  <img
                    className="rounded-lg w-[100%] h-[100%]"
                    alt="image"
                    src="https://welkinhealth.com/wp-content/uploads/2019/08/wh-blog-mastering-the-doctor-patient-relationship.jpg"
                  />
                </div>
                <div className="px-2 py-3">
                  <p className="font-bold text-sm">
                    You can find the best doctor
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[65%]  m-auto">
            <div className="border shadow-md bg-gray-200 py-20 rounded-xl">
              <p className="text-center">Advertisement</p>
            </div>
          </div>
        </div>
        <div className="mb-10"></div>
        <main className="p-4 w-[70%] m-auto">
          <div className="px-5">
            <ul className="grid grid-cols-3 gap-x-4 justify-evenly">
              {blogs.map((blog) => (
                <li
                  key={blog.id}
                  className="mb-4 border text-center rounded-lg shadow-md"
                >
                  <Link href="/blog/[id]" as={`/blog/${blog.id}`}>
                    <div className="">
                      <div className="w-[100%] m-auto">
                        <img
                          className="rounded-t-lg"
                          alt="image"
                          src={blog.image}
                        />
                      </div>
                    </div>
                    <p className="font-md uppercase mt-6 font-bold">
                      {blog.title}
                    </p>
                    <div className="pt-2 pb-5">
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
              <p className="font-bold  text-gray-500 md:hidden lg:hidden">
                Contact:{" "}
              </p>
              <p className="text-gray-500 pl-3 md:pl-0 lg:pl-0">
                +91 9129393939
              </p>
            </div>
            <div className="flex md:flex-none lg:flex-none justify-center py-2 md:py-0 lg:py-0">
              <p className="font-bold text-gray-500 md:hidden lg:hidden">
                Gmail:{" "}
              </p>
              <p className="text-gray-500 pl-[5px] md:pl-0 lg:pl-0">
                chandu@gmail.com
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-center">
                @2023 Copyright Doctor'sName
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default blogspage;
