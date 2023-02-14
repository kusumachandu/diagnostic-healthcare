import React from "react";


function Question({ question, increment, decrement, prevClicked, reset }: any) {


  return (
    <div className="border w-[250px] lg:w-[350px] md:w-[350px] m-auto py-10 rounded-lg shadow-md bg-white dark:bg-gray-600">
      { question.id > 1 && (
        <div className="mt-[-25px] px-4">
          <p
            className="text-gray-400 cursor-pointer"
          >
            {!prevClicked && <svg onClick={() => decrement(question.id)} viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg>}
            {prevClicked && <svg onClick={() => reset()} viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>}
          </p>
        </div>
      )}

      <div className="text-center">
        <p className="font-bold py-1">{question.question}</p>
        <p>how are you feeling now</p>
      </div>
      <div className="flex justify-around pt-5 text-center">
        <div className="md:w-10 md:h-10 lg:w-10 lg:h-10 w-7 h-7 rounded-full bg-green-400  cursor-pointer">
          <p className="lg:mt-2 md:mt-2 dark:text-black" onClick={() => increment(1)}>1</p>
        </div>
        <div className="md:w-10 md:h-10 lg:w-10 lg:h-10 w-7 h-7 rounded-full bg-green-200 cursor-pointer">
          <p className="lg:mt-2 md:mt-2 dark:text-black" onClick={() => increment(2)}>2</p>
        </div>
        <div className="md:w-10 md:h-10 lg:w-10 lg:h-10 w-7 h-7 rounded-full bg-yellow-200 cursor-pointer">
          <p className="lg:mt-2 md:mt-2 dark:text-black" onClick={() => increment(3)}>3</p>
        </div>
        <div className="md:w-10 md:h-10 lg:w-10 lg:h-10 w-7 h-7 rounded-full bg-orange-200 cursor-pointer">
          <p className="lg:mt-2 md:mt-2 dark:text-black" onClick={() => increment(4)}>4</p>
        </div>
        <div className="md:w-10 md:h-10 lg:w-10 lg:h-10 w-7 h-7 rounded-full bg-red-400 cursor-pointer">
          <p className="lg:mt-2 md:mt-2 dark:text-black" onClick={() => increment(5)}>5</p>
        </div>
      </div>
    </div>
  );
}

export default Question;
