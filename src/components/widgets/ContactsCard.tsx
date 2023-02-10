import React from "react";

function ContactsCard ({messages}: any) {

  return (
    <div className=" px-5 pb-10">
      <div className="border-2  pb-5 rounded-2xl shadow-md pt-10">
        <ul className="w-[100%] md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
          {messages.map((query: any) => {
            return (
              <li className="w-[90%] m-auto" key={query.id}>
                <div className="border gap-5 py-5 shadow-md rounded-2xl mb-5">
                  <div className="lg:w-[120%] py-10 pl-5">
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

                  </div>
                  <div className="lg:pr-20 px-3 ">
                    <div>
                      <div className="font-bold pb-5 lg:text-left lg:pl-2">
                        <p>Message</p>
                      </div>
                      <p className="text-[16px] text-gray-500 leading-6 lg:text-left lg:pl-2">
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
