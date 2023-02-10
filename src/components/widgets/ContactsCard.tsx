import React from "react";

function ContactsCard ({messages}: any) {

  return (
    <div className="lg:px-24 px-5 pb-10">
      <div className="border pb-5 rounded-2xl shadow-md pt-10">
        <div className="hidden justify-evenly gap-36 py-5 md:hidden lg:visible">
          <div className="">
            <h1 className="font-bold ">Details</h1>
          </div>
          <div className="">
            <h1 className="font-bold">Queries</h1>
          </div>
        </div>
        <ul>
          {messages.map((query: any) => {
            return (
              <li className="w-[90%] m-auto" key={query.id}>
                <div className="border gap-5 py-5 shadow-md rounded-2xl mb-5">
                  <div className="lg:w-[120%] py-10 lg:pl-20 pl-5">
                    <div className="flex py-2">
                      <p className="font-bold uppercase">name:</p>
                      <p className="ml-2">{query.name}</p>
                    </div>
                    <div className="flex py-2">
                      <p className="font-bold uppercase">email:</p>
                      <p className="ml-2"> {query.email}</p>
                    </div>
                    <div className="flex py-2">
                      <p className="font-bold uppercase">mobile:</p>
                      <p className="ml-2"> {query.mobile}</p>
                    </div>
                    {/* <div className="flex py-2">
                      <p className="font-bold uppercase">Date:</p>
                      <p className="ml-2"></p>
                    </div> */}
                  </div>
                  <div className="lg:pr-20 px-3 flex justify-center items-center md:px-40">
                    <div>
                      <div className="font-bold pb-5 lg:text-center">
                        <p>Message</p>
                      </div>
                      <p className="text-[16px] text-gray-500 leading-6">
                        {query.message}
                      </p>
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
