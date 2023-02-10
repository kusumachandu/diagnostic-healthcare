import React from "react";

function AppointmentCards() {
  const userData = [
    {
      name: "chandu",
      email: "chandu@gmail.com",
      mobile: "8790133883",
      date: "10-02-23",
    },
    {
      name: "chandu",
      email: "chandu@gmail.com",
      mobile: "8790133883",
      date: "10-02-23",
    },
    {
      name: "chandu",
      email: "chandu@gmail.com",
      mobile: "8790133883",
      date: "10-02-23",
    },
    {
      name: "chandu",
      email: "chandu@gmail.com",
      mobile: "8790133883",
      date: "10-02-23",
    },
    {
        name: "chandu",
        email: "chandu@gmail.com",
        mobile: "8790133883",
        date: "10-02-23",
      },
      {
        name: "chandu",
        email: "chandu@gmail.com",
        mobile: "8790133883",
        date: "10-02-23",
      },
      {
        name: "chandu",
        email: "chandu@gmail.com",
        mobile: "8790133883",
        date: "10-02-23",
      },
      {
        name: "chandu",
        email: "chandu@gmail.com",
        mobile: "8790133883",
        date: "10-02-23",
      },
  ];

  return (
    <div>
      <div>
        <div>
            <div>
                <select>
                    filter by
                </select>
            </div>
        </div>
        <div>
          <header className="">
            <div className="flex justify-around">
              <div>
                <h1 className="font-bold">Date</h1>
              </div>
              <div>
                <h1 className="font-bold">Name</h1>
              </div>
              <div>
                <h1 className="font-bold">Email</h1>
              </div>
              <div>
                <h1 className="font-bold">Mobile</h1>
              </div>
              <div>
                <h1 className="font-bold">Time</h1>
              </div>
            </div>
          </header>
        </div>
        <ul className="mt-5">
          {userData.map((data) => {
            return (
              <li className="py-1 border">
                <section className="flex justify-around py-1 ">
                  <div>
                    <h1 className="font-bold">{data.date}</h1>
                  </div>
                  <div>
                    <h1 className="font-bold ml-10">{data.name}</h1>
                  </div>
                  <div>
                    <h1 className="font-bold">{data.email}</h1>
                  </div>
                  <div>
                    <h1 className="font-bold">{data.mobile}</h1>
                  </div>
                  <div>
                    <h1 className="font-bold">11AM - 12PM</h1>
                  </div>
                </section>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default AppointmentCards;
