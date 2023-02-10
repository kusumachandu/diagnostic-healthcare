import ContactsCard from '@/components/widgets/ContactsCard'
import { db } from '@/config/firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

function Queries() {
  const [queries, setQueries] = useState<any>([])
  const queriesCollectionRef = collection(db, 'queries')

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const data = await getDocs(queriesCollectionRef)
        setQueries(data.docs.map((doc) => ({ ...doc.data() })))
        if(queries.length > 0) {
          queries.map((query: any) => {
            setQueries([query, ...query]);
          })
        }
      } catch (error) {
        console.log(error);
      }
      
    }
    fetchQueries()
  },[])

  return (
    <div>
        <ContactsCard messages={queries} />
    </div>
  )
}

export default Queries