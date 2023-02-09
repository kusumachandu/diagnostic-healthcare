import React from "react";

function ContactsCard() {
  const userData = [
    {
      name: "chandu",
      email: "chandu@gmail.com",
      mobile: "8790133883",
      message:
        "I am not feeling well since last week. I am suffering woth heavy fever and body pains what are the precautions to be taken",
    },
    {
      name: "chandu",
      email: "chandu@gmail.com",
      mobile: "8790133883",
      message:
        "I am not feeling well since last week. I am suffering woth heavy fever and body pains what are the precautions to be taken",
    },
    {
      name: "chandu",
      email: "chandu@gmail.com",
      mobile: "8790133883",
      message:
        "I am not feeling well since last week. I am suffering woth heavy fever and body pains what are the precautions to be taken",
    },
    {
      name: "chandu",
      email: "chandu@gmail.com",
      mobile: "8790133883",
      message:
        "I am not feeling well since last week. I am suffering woth heavy fever and body pains what are the precautions to be taken",
    },
  ];

  return (
    <div>
      <div>
        <ul>
          {userData.map((data) => {
            return (
              <li className="w-[80%] m-auto">
                <div className="border flex justify-center gap-5 py-5 shadow-md rounded-2xl mb-5">
                  <div className="w-[120%] py-10 pl-48">
                    <div className="flex py-2">
                      <p className="font-bold uppercase">name:</p>
                      <p className="ml-2">{data.name}</p>
                    </div>
                    <div className="flex py-2">
                      <p className="font-bold uppercase">email:</p>
                      <p className="ml-2"> {data.email}</p>
                    </div>
                    <div className="flex py-2">
                      <p className="font-bold uppercase">mobile:</p>
                      <p className="ml-2"> {data.mobile}</p>
                    </div>
                  </div>
                  <div className="pr-20 flex justify-center items-center">
                    <div>
                      <h1 className="font-bold text-center mb-5 text-red-400 uppercase">Query</h1>
                      <p className="text-[16px] text-gray-500">{data.message}</p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ContactsCard;
