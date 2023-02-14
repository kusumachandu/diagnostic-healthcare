import ContactsCard from '@/components/widgets/ContactsCard'
import useFetchQueries from '@/hooks/fetchQueries'
import React from 'react'
import SampleContact from '../widgets/SampleContact';
import Loading from './Loading';

function Queries() {
  const { queries, loading, error } = useFetchQueries();

  if (loading) {
    return <Loading />
  }

  return (
    <div>
        {queries && <ContactsCard messages={queries} />}
        {/* <SampleContact /> */}
    </div>
  )
}

export default Queries