import { db } from '@/config/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react'

function useFetchQueries() {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null|string>(null);
  const [queries, setQueries] = useState<any>(null);

  useEffect(() => {
    async function fetchQueries() {
      try {
        const docRef = collection(db, 'queries')
        const data = await getDocs(docRef)
        setQueries(data.docs.map((doc) => ({ ...doc.data() })))
      } catch (error: any) {
        console.log(error);
        setError('Failed to load queries');
      } finally {
        setLoading(false);
      }
    }

    fetchQueries();

  }, [])
  return { loading, error, queries }
}

export default useFetchQueries;
