import { useAuth } from '@/context/AuthContext'
import React from 'react'

function Appointments() {
  const { currentUser }: any = useAuth()
  console.log(currentUser);
  return (
    <div>home</div>
  )
}

export default Appointments