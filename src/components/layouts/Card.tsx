import React from 'react'

function Card() {


  return (
    <div className='border w-[350px] m-auto py-10 rounded-lg shadow-md bg-white'>
        <div className='text-center'>
            <p className='font-bold py-2'>hello here is your first question</p>
            <p>how are you feeling now</p>
        </div>
        <div className='flex justify-around pt-5 text-center'>
            <div className='w-10 h-10 rounded-full bg-red-200  cursor-pointer' >
                <p className='mt-2'>1</p>
            </div>
            <div className='w-10 h-10 rounded-full bg-orange-200 cursor-pointer'>
                <p className='mt-2'>2</p>
            </div>
            <div className='w-10 h-10 rounded-full bg-yellow-200 cursor-pointer'>
                <p className='mt-2'>3</p>
            </div>
            <div className='w-10 h-10 rounded-full bg-green-200 cursor-pointer'>
                <p className='mt-2'>4</p>
            </div>
            <div className='w-10 h-10 rounded-full bg-green-400 cursor-pointer'>
                <p className='mt-2'>5</p>
            </div>
        </div>
    </div>
  )
}

export default Card