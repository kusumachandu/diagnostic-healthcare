import Link from "next/link";
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import Modal from "./Modal";
import Theme from "../widgets/Theme";

function AdminNavbar({ toggleToAppointments, toggleToQueries }: any) {
  const [showModal, setShowModal] = useState(false);
  const { logout }: any = useAuth();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

 function appointmentHandler(){
  toggleToAppointments()
  setOpen(!open);
 }

 function queryHandler(){
  toggleToQueries();
  setOpen(!open)
  
 }



  return (
    <>
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
          handleLogout={handleLogout}
        >
          Are you sure you want to logout ??
        </Modal>
      )}
      <div className="lg:px-36 lg:py-10 md:px-20 md:py-10 px-5 py-10">
        <div className="border border-gray-100 flex justify-between rounded-[40px] px-3 h-14 md:h-20 lg:h-20 pt-[7px] pb-[7px] md:pb-0 lg:pb-0 md:pt-[12px] lg:pt-[12px] shadow-md bg-white dark:bg-black dark:border-none dark:shadow-white">
          <Link
            href="/admin"
            className="pt-2 md:pt-[14px] lg:pt-[14px] border rounded-full md:h-14 md:w-14 lg:w-14 lg:h-14 w-10 h-10  text-center bg-gray-600 cursor-pointer"
          >
            <p className="text-white font-bold">Logo</p>
          </Link>
          <div className="pt-2">
            <div className="hidden md:flex lg:flex gap-4 lg:gap-16 py-2 overflow-hidden">
              <p
                onClick={toggleToAppointments}
                className="hover:text-primary-500 cursor-pointer overflow-hidden"
              >
                Apointments
              </p>
              <p
                onClick={toggleToQueries}
                className="hover:text-primary-500 cursor-pointer overflow-hidden"
              >
                Queries
              </p>
              <div>
                <Theme />
              </div>
            </div>
          </div>
          <div
            onClick={() => setShowModal(true)}
            className="hidden md:block lg:block border font-bold w-[100px] h-14 py-2 bg-primary-500 pt-[14px] rounded-[40px] text-center text-white cursor-pointer hover:bg-primary-300"
          >
            Logout
          </div>
          <div className="md:hidden lg:hidden">
            {open ? (
              <div
                onClick={() => setOpen(!open)}
                className="w-14 h-14 px-3 pt-1"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="30"
                  height="30"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="css-i6dzq1"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </div>
            ) : (
              <div
                onClick={() => setOpen(!open)}
                className="w-14 h-14 px-3 pt-1"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="30"
                  height="30"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="css-i6dzq1"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </div>
            )}
          </div>
        </div>
        {!open && (
          <div className="flex justify-center pt-1 ">
            <div className="w-[70%] md:hidden lg:hidden font-semibold bg-white shadow-md border dark:bg-gray-800 dark:shadow-white text-center py-3 rounded-lg">
              <div className="flex justify-end pr-5">
                <Theme />
              </div>
              <div className="mb-2">
                <p onClick={appointmentHandler}
                >
                    Appointments
                </p>
              </div>
              <div className="mb-2">
                <p onClick={queryHandler}
                >
                  Queries
              </p>
              </div>
              <div>
                <Link
                  onClick={handleLogout}
                  href=""
                  className="flex justify-center"
                >
                  <div className="border font-bold w-[100px] h-10 py-2 bg-primary-500 rounded-[40px] text-center text-white cursor-pointer hover:bg-primary-300">
                    Logout
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AdminNavbar;
