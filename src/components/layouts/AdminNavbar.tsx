import Link from 'next/link'
import React, { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import Modal from './Modal';

function AdminNavbar({ toggleToAppointments, toggleToQueries }: any) {

  const [showModal, setShowModal] = useState(false);
  const {logout}:any = useAuth();

  const handleLogout = () => {
    logout();
  }

  return (
    <>
    { showModal && (
      <Modal 
        onClose={() => setShowModal(false)} 
        show={showModal}
        handleLogout={handleLogout}
      >
          Are you sure you want to logout ?? 
      </Modal>)}
    <div className="lg:px-36 lg:py-10 md:px-20 md:py-10 px-5 py-10 ">
      <div className="border border-gray-100 flex justify-between rounded-[40px] px-3 h-20 pt-[12px] shadow-md bg-white">
        <Link
          href="/admin"
          className="pt-[14px] border rounded-full h-14 w-14  text-center bg-gray-600 cursor-pointer"
        >
          <p className="text-white font-bold">Logo</p>
        </Link>
        <div className="pt-2">
          <div className="flex gap-4 lg:gap-16 py-2 overflow-hidden">
              <p onClick={toggleToAppointments} className="hover:text-primary-500 cursor-pointer overflow-hidden">
                Apointments
              </p>
              <p onClick={toggleToQueries} className="hover:text-primary-500 cursor-pointer overflow-hidden">
                Queries
              </p>
          </div>
        </div>
          <div onClick={() => setShowModal(true)} className="border font-bold w-[100px] h-14 py-2 bg-primary-500 pt-[14px] rounded-[40px] text-center text-white cursor-pointer hover:bg-primary-300">
            Logout
          </div>
      </div>
    </div>
    </>
  )
}

export default AdminNavbar
