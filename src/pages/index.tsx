import Card from "@/components/layouts/Card";
import Navbar from "@/components/layouts/Navbar";
import { buttonVariants, divVariants } from "@/constants/variants";
import { motion } from "framer-motion";

export default function Home() {
  function handleClickScroll() {
    const element = document.getElementById("test");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <div className="m-auto md:bg-blue-50 lg:bg-blue-50 md:dark:bg-gray-800 lg:dark:bg-gray-800 rounded-tl-[15%] rounded-br-[15%] md:rounded-tl-[200px]md:rounded-br-[200px] lg:rounded-tl-[200px] lg:rounded-br-[200px] w-[90%] md:w-[100%] lg:w-[100%]">
        <Navbar />
        <div className="mt-[-30px] pb-20">
          <div className="lg:flex lg:justify-between">
            <motion.div className="lg:pl-40 lg:pt-28 py-10"
              variants={divVariants}
              initial='hidden'
              whileInView='visible'
              exit='exit'
            >
              <p className="font-bold lg:text-[50px] text-3xl lg:text-left text-center lg:pb-5 dark:text-slate-200">
                Health.
              </p>
              <p className="font-bold lg:text-[50px] text-3xl lg:text-left text-center dark:text-gray-300">
                Powered By Diagnost.
              </p>
              <motion.div 
                className="mt-3"
                variants={divVariants}
              >
                <p className="lg:text-lg text-center lg:text-left lg:py-5 dark:text-slate-400">
                  Supporting better health outcomes and clinical excellence with{" "}
                  <br /> our technology.
                </p>
              </motion.div>
              <div className="md:flex md:justify-center mt-10 lg:mt-5 gap-10 lg:flex lg:justify-start">
                <div className="lg:hidden h-5 w-5 absolute bg-pink-200 rounded-full ml-[-70%] mt-[-10%] md:mt-0"></div>
                <motion.div className="flex justify-center" variants={buttonVariants}>
                  <button className="border w-44 font-bold flex justify-center  p-2 rounded-lg bg-blue-500 text-white uppercase hover:opacity-80">
                    Contact
                  </button>
                </motion.div>
                <motion.div className="flex justify-center mt-2 md:mt-0 lg:mt-0" variants={buttonVariants}>
                  <button
                    onClick={handleClickScroll}
                    className="border font-bold hover:border-blue-500 hover:shadow-md w-44 p-2 rounded-lg bg-white text-blue-500 uppercase hover:opacity-80"
                  >
                    Go For Test
                  </button>
                </motion.div>
                <div className="lg:hidden h-5 w-5 absolute bg-orange-200 rounded-full ml-[70%] mt-[-10%] md:mt-0"></div>
              </div>
            </motion.div>
            <div className="lg:pr-40 flex items-center justify-center">
              <div className="lg:hidden h-5 w-5 absolute bg-gray-400 rounded-full ml-[-70%] md:ml-[-50%]"></div>
              <motion.iframe
                variants={buttonVariants}
                initial='hidden'
                whileInView='visible'
                className="lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-full"
                src="https://embed.lottiefiles.com/animation/128391"
              ></motion.iframe>
              <div className="lg:hidden h-5 w-5 absolute bg-red-200 rounded-full ml-[70%] md:ml-[50%]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex md:block justify-between md:px-20 lg:px-32 lg:py-20  pb-20 md:py-10">
        <div className="flex justify-center md:m-auto md:w-[90%] md:h-[300px] lg:w-[45%] lg:h-[300px] rounded-3xl">
          <motion.img
            variants={buttonVariants}
            initial='hidden'
            whileInView='visible'
            exit='exit'
            className="w-[75%] h-[100%] rounded-3xl"
            alt="image"
            src="https://sa1s3optim.patientpop.com/assets/images/provider/photos/1812100.jpg"
          />
        </div>
        <div className="lg:w-[55%] justify-center lg:py-20 md:py-14 pt-14 md:px-14 lg:px-14 px-6">
          <div className="font-bold pb-5">
            <motion.p 
              className="lg:text-3xl text-xl text-center md:text-4xl md:text-center lg:text-left"
              variants={divVariants}
              initial='hidden'
              whileInView='visible'
              exit='exit'
            >
              Take good care of yourself
            </motion.p>
          </div>
          <div className="lg:w-[80%]">
            <motion.p 
              className="text-lg text-left  md:text-center lg:text-left"
              variants={divVariants}
              initial='hidden'
              whileInView='visible'
              exit='exit'
            >
              Your body is sending you important signals about your health.
              Understand, manage, and get care for symptoms with trusted medical
              expertise in minutes.
            </motion.p>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-5 lg:gap-10 lg:py-20 pb-14 px-14">
        <div>
          <div className="w-14 h-14 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full bg-red-200"></div>
          <div className="text-center py-2">
            <p>STEP 1</p>
          </div>
        </div>
        <div className="bg-gray-500 dark:bg-white h-2 w-32 rounded-lg mt-6 md:mt-8 lg:mt-12"></div>
        <div>
          <div className="w-14 h-14 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full bg-blue-200"></div>
          <div className="text-center py-2">
            <p>STEP 2</p>
          </div>
        </div>
        <div className="bg-gray-500 dark:bg-white h-2 w-32 rounded-lg mt-6 md:mt-8 lg:mt-12"></div>
        <div>
          <div className="w-14 h-14 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full bg-green-200"></div>
          <div className="text-center py-2">
            <p>STEP 3</p>
          </div>
        </div>
      </div>
      <div
        id="test"
        className=" rounded-tr-[15%] lg:rounded-bl-[50px] lg:rounded-tr-[250px] py-24 bg-blue-50 dark:bg-gray-800"
      >
        <Card />
      </div>
    </>
  );
}
