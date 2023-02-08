import React from "react";

function DiagnosticButton({ state, reset, toggle, setToggle, message }: any) {
    
  return (
    <div className="w-[40%] m-auto">
      <button
        type="button"
        onClick={() => {
          if(state === 5) {
            reset();
          }else{
            setToggle(true)
          }
        }}
        className={
          "p-3  border rounded-lg bg-blue-500 text-white font-bold uppercase"
        }
      >
        {message}
      </button>
    </div>
  );
}

export default DiagnosticButton;
