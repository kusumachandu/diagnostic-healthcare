import React, { useState } from "react";
import DiagnosticButton from "../widgets/DiagnosticButton";
import Question from "../widgets/Question";

function Card() {
  const [state, setState] = useState<number>(0);
  const [toggle, setToggle] = useState<boolean>(false);
  const [lastRating, setLastRating] = useState<number>(0);
  const [prevClicked, setPrevClicked] = useState<boolean>(false);
  let score: any = localStorage.getItem('score') || 0

  // function increment(rating:number) {
  //   score = +!localStorage.getItem('score') + rating;
  //   setLastRating(rating);
  //   localStorage.setItem('score', +score);
  //   console.log(score);
  //   setPrevClicked(false);
  //   setState((prev) => prev + 1);
  // }

  // function decrement() {
  //   score = +!localStorage.getItem('score') - lastRating;
  //   localStorage.setItem('score', score);
  //   setPrevClicked(true);
  //   setState((prev) => prev - 1);
  // }

  // function reset(){
  //   localStorage.setItem('score', 0);
  //   setPrevClicked(false);
  //   setState(0);
  // }

  function increment(rating: number) {
    let newScore = +localStorage.getItem('score')! + rating; // Add a '+' before localStorage.getItem('score') to convert it to a number
    setLastRating(rating);
    localStorage.setItem('score', String(newScore)); // Convert newScore to a string before setting it in localStorage
    console.log(newScore);
    setPrevClicked(false);
    setState((prev) => prev + 1);
  }
  
  function decrement() {
    let newScore = +localStorage.getItem('score')! - lastRating; // Add a '+' before localStorage.getItem('score') to convert it to a number
    localStorage.setItem('score', String(newScore)); // Convert newScore to a string before setting it in localStorage
    setPrevClicked(true);
    setState((prev) => prev - 1);
  }
  
  function reset() {
    localStorage.setItem('score', '0'); // Set '0' as a string
    setPrevClicked(false);
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
                prevClicked={prevClicked}
                reset={reset}
              />
            </div>
          )}
        </>
      ) : (
        <div className="text-center font-bold">
          <p className="mb-5"> Thankyou for answering !!</p>
          <p className="mb-5"> Your score is {score}</p>
          {
            score < 15 ? (
              <p className="px-4 pb-4 text-green-400">You better need to consult the doctor</p>
            ) : (
              <p className="px-4 pb-4 text-green-400">You are good, you can confirm with your doctor again by booking slot</p>
            )
          }
          <DiagnosticButton state={state} reset={reset}  toggle={toggle} setToggle={setToggle} message='Start test again' />
        </div>
      )}
    </>
  );
}

export default Card;
