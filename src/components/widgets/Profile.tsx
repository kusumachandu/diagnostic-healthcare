import React from 'react'

function Profile() {
  return (
    <div className='flex gap-3'>
        <div className=''>
            <img className='w-12 h-12 rounded-full' alt="image" src="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg" />
        </div>
        <div className=''>
            <h1 className='font-bold'>Mr. Doctor's name</h1>
            <p className='font-semibold text-gray-500 text-left'>Mbbs, Frcs</p>
        </div>
    </div>
  )
}

export default Profile