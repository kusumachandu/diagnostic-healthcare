import React from "react";


function Question({ question, increment, decrement }: any) {

  return (
    <div className="border w-[350px] m-auto py-10 rounded-lg shadow-md bg-white">
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
        <div className="w-10 h-10 rounded-full bg-green-400  cursor-pointer">
          <p className="mt-2" onClick={() => increment()}>1</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-green-200 cursor-pointer">
          <p className="mt-2" onClick={() => increment()}>2</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-yellow-200 cursor-pointer">
          <p className="mt-2" onClick={() => increment()}>3</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-orange-200 cursor-pointer">
          <p className="mt-2" onClick={() => increment()}>4</p>
        </div>
        <div className="w-10 h-10 rounded-full bg-red-400 cursor-pointer">
          <p className="mt-2" onClick={() => increment()}>5</p>
        </div>
      </div>
    </div>
  );
}

export default Question;
