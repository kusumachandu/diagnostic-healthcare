import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <div className="m-10">
        <div className='border border-gray flex justify-between rounded-[40px] px-3 h-20 pt-[12px] shadow-md'>
            <Link href="/" className='pt-[14px] border rounded-full h-14 w-14  text-center bg-gray-600 cursor-pointer'>
                <p className='text-white font-bold'>Logo</p>
            </Link>
            <div className='pt-2'>
                <div className='flex gap-16 py-2'>
                    <p className='hover:text-primary-500 cursor-pointer'>Home</p>
                    <p className='hover:text-primary-500 cursor-pointer'>About</p>
                    <p className='hover:text-primary-500 cursor-pointer'>Blog</p>
                    <p className='hover:text-primary-500 cursor-pointer'>Contact</p>
                </div>
            </div>
            <div className='border font-bold w-[100px] h-14 py-2 bg-primary-500 pt-[14px] rounded-[40px] text-center text-white cursor-pointer hover:bg-primary-300'>
                Book
            </div>
        </div>
    </div>
  )
}

export default Navbar