import AdminNavbar from '@/components/layouts/AdminNavbar';
import AppointmentsLayout from '@/components/layouts/AppointmentsLayout';
import Login from '@/components/layouts/Login';
import Queries from '@/components/layouts/Queries';
import config from '@/config/next-seo.config';
import { useAuth } from '@/context/AuthContext'
import { NextSeo } from 'next-seo';
import { useState } from 'react';

export default function Admin() {
  // const [isLoggedIn, setIsLoggedIn] = useState('false');
  const { currentUser }: any = useAuth();
  const [isAppointments, setIsAppointments] = useState(true);
  console.log(isAppointments);

  const SEO = {
    title: 'admin',
  }

  const toggleToAppointments = () => {
    setIsAppointments(true)
  }
  
  const toggleToQueries = () => {
    setIsAppointments(false)
  }

  return (
    <>
      <NextSeo {...SEO} />
      {!currentUser && <Login />}
      {currentUser && (
        <div className='bg-slate-200 dark:bg-black'>
        <AdminNavbar toggleToQueries={toggleToQueries} toggleToAppointments={toggleToAppointments} />
        {isAppointments ? <AppointmentsLayout /> : <Queries />}
        </div>
      )}    
    </>
  )
}
