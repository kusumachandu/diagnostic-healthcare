import React from "react";
import SampleContact from "./SampleContact";

function ContactsCard ({messages}: any) {

  return (
    <div>
      <div className="w-[70%] lg:h-[500px] md:h-[300px] m-auto mb-10">
        <img className="w-[100%] h-[100%] rounded-2xl" src="https://ibpf.org/wp-content/uploads/2016/09/doctors-appointment-mental-health.png" />
      </div>
      <div className="lg:mb-10 lg:block hidden">
        <div className="lg:flex lg:justify-around">
          <div className="lg:w-10 lg:h-10 lg:rounded-full bg-pink-400"></div>
          <hr className="lg:w-96 lg:h-1 lg:bg-orange-200 lg:mt-5"></hr>
          <div className="lg:w-10 lg:h-10 lg:rounded-full bg-green-400"></div>
          <hr className="lg:w-96 lg:h-1 lg:bg-green-400 lg:mt-5"></hr>
          <div className="lg:w-10 lg:h-10 lg:rounded-full bg-yellow-400"></div>
        </div>
      </div>
    <div className='w-[95%] md:w-[80%] m-auto lg:grid lg:grid-cols-2 gap-5 py-3 px-3 cursor-pointer'>
      {
        messages.map((query:any) => {
          return (
            <li key={query.id} className="list-none">
              <SampleContact query={query} />
            </li>
          )
        })
      }
    </div>
    </div>
  );
}

export default ContactsCard;