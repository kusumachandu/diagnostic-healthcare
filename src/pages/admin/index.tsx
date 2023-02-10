import AdminNavbar from '@/components/layouts/AdminNavbar';
import AppointmentsLayout from '@/components/layouts/AppointmentsLayout';
import Login from '@/components/layouts/Login';
import Queries from '@/components/layouts/Queries';
import { useAuth } from '@/context/AuthContext'
import { useState } from 'react';

export default function Admin() {
  // const [isLoggedIn, setIsLoggedIn] = useState('false');
  const { currentUser }: any = useAuth();
  const [isAppointments, setIsAppointments] = useState(true);
  console.log(isAppointments);

  const toggleToAppointments = () => {
    setIsAppointments(true)
  }
  
  const toggleToQueries = () => {
    setIsAppointments(false)
  }

  return (
    <>
      {!currentUser && <Login />}
      {currentUser && (
        <>
        <AdminNavbar toggleToQueries={toggleToQueries} toggleToAppointments={toggleToAppointments} />
        {isAppointments ? <AppointmentsLayout /> : <Queries />}
        </>
      )}    
    </>
  )
}
