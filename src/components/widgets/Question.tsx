import React from "react";


function Question({ question, increment, decrement }: any) {


  return (
    <div className="border w-[250px] lg:w-[350px] md:w-[350px] m-auto py-10 rounded-lg shadow-md bg-white dark:bg-gray-600">
      { question.id > 1 && (
        <div className="mt-[-25px] px-4">
          <p
            onClick={() => decrement()}
            className="text-gray-400 cursor-pointer"
          >
            {"<--"} prev
          </p>
        </div>
      )}

      <div className="text-center">
        <p className="font-bold py-2">{question.question}</p>
        <p>how are you feeling now</p>
      </div>
      <div className="flex justify-around pt-5 text-center">
        <div className="md:w-10 md:h-10 lg:w-10 lg:h-10 w-7 h-7 rounded-full bg-green-400  cursor-pointer">
          <p className="lg:mt-2 md:mt-2 dark:text-black" onClick={() => increment()}>1</p>
        </div>
        <div className="md:w-10 md:h-10 lg:w-10 lg:h-10 w-7 h-7 rounded-full bg-green-200 cursor-pointer">
          <p className="lg:mt-2 md:mt-2 dark:text-black" onClick={() => increment()}>2</p>
        </div>
        <div className="md:w-10 md:h-10 lg:w-10 lg:h-10 w-7 h-7 rounded-full bg-yellow-200 cursor-pointer">
          <p className="lg:mt-2 md:mt-2 dark:text-black" onClick={() => increment()}>3</p>
        </div>
        <div className="md:w-10 md:h-10 lg:w-10 lg:h-10 w-7 h-7 rounded-full bg-orange-200 cursor-pointer">
          <p className="lg:mt-2 md:mt-2 dark:text-black" onClick={() => increment()}>4</p>
        </div>
        <div className="md:w-10 md:h-10 lg:w-10 lg:h-10 w-7 h-7 rounded-full bg-red-400 cursor-pointer">
          <p className="lg:mt-2 md:mt-2 dark:text-black" onClick={() => increment()}>5</p>
        </div>
      </div>
    </div>
  );
}

export default Question;
