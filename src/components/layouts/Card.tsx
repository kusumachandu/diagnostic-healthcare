import React, { useEffect, useState } from "react";
import DiagnosticButton from "../widgets/DiagnosticButton";
import Question from "../widgets/Question";

function Card() {
  const [state, setState] = useState<number>(0);
  const [toggle, setToggle] = useState<boolean>(false);

  console.log(toggle)

  function increment() {
    setState((prev) => prev + 1);
  }

  function decrement() {
    setState((prev) => prev - 1);
  }

  function reset(){
    setState(0);
  }

  const data = [
    {
      id: 1,
      question: "How you are feeling ?",
      rating: "",
    },
    {
      id: 2,
      question: "any headache symptoms ?",
      rating: "",
    },
    {
      id: 3,
      question: "cold and cough ?",
      rating: "",
    },
    {
      id: 4,
      question: "Any Fever symptoms ?",
      rating: "",
    },
    {
      id: 5,
      question: "Body Pains ?",
      rating: "",
    },
  ];

  let current = data[state];

  return (
    <>
      {state < 5 ? (
        <>
          {!toggle && (
            <div className="text-center font-bold">
              <p className="uppercase mb-5">Take a diagnostic test here!!</p>
              <DiagnosticButton state={state} reset={reset} toggle={toggle} setToggle={setToggle} message='Start test' />
            </div>
          )}

          {toggle && (
            <div className="flex gap-3">
              <Question
                question={current}
                increment={increment}
                decrement={decrement}
              />
            </div>
          )}
        </>
      ) : (
        <div className="text-center font-bold">
          <p className="mb-5"> Thankyou for answering !!</p>
          <DiagnosticButton state={state} reset={reset}  toggle={toggle} setToggle={setToggle} message='Start test again' />
        </div>
      )}
    </>
  );
}

export default Card;
