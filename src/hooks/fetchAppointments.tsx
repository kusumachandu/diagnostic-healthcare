import { db } from '@/config/firebase-config';
import { useAuth } from '@/context/AuthContext';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react'

function useFetchAppointments() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null|string>(null);
  const [appointments, setAppointments] = useState<any>(null);

  const { currentUser }: any = useAuth()

  useEffect(() => {
    async function fetchAppointments() {
      try {
        const docRef = collection(db, 'appointments')
        const data = await getDocs(docRef)
        setAppointments(data.docs.map((doc) => ({ ...doc.data() })))
      } catch (error: any) {
        console.log(error);
        setError('Failed to load appointments');
      } finally {
        setLoading(false);
      }
    }

    fetchAppointments();
  }, [])
  return { loading, error, appointments }
}

export default useFetchAppointments;
