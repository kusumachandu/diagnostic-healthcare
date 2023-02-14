import React from 'react'

function SampleContact({query} : any) {

    console.log(query)

  return (
    <div>
        <div className='border rounded-lg mb-4 shadow-gray-500 md:mb-4 md:shadow-gray-500  px-4 dark:bg-gray-900 bg-gray-200 shadow-md hover:shadow-xl hover:shadow-gray-500 hover:scale-105 duration-300'>
            <div className='flex lg:gap-2'>
                <div className='px-4 py-2'>
                    <p className='font-bold text-2xl'>Aug</p>
                    <p className='font-semibold text-center'>03</p>
                    <p className='font-thin text-center'>2023</p>
                </div>
                <div className='h-[93px] w-[1px] dark:bg-gray-300 bg-gray-400'></div>
                <div className='md:flex lg:flex lg:w-[85%] lg:justify-between md:w-[85%] justify-between'>
                    <div className='lg:py-2 md:py-2 md:px-4 px-4 lg:px-4 mt-3 lg:mt-0 dark:text-slate-200 lg:w-[60%]'>
                        <p className='font-bold lg:mb-2 md:mb-2 lg:text-2xl md:text-xl max-[1024px]:max-w-[150px]'>{query.name}</p>
                        <p className='lg:mt-4 max-[280px]:w-[130px] max-[420px]:w-[225px] min-[1024px]:max-w-[130px] max-[360px]:w-[150px] break-words lg:min-w-[125%]'>{query.email}</p>

                    </div>
                    <div className='dark:text-slate-200'>
                        <p className='px-4 lg:mt-3 md:mt-4'>{query.mobile}</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-[2px] dark:bg-gray-300 bg-gray-400'></div>
            <div className='px-5 max-[280px]:px-[2px] mt-2 mb-2'>
                <p className='font-bold dark:text-gray-300 mb-3 '>Note</p>
                <div className='border rounded-md px-1 py-2 bg-slate-100'>
                    <p className='text-gray-700'>{query.message}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SampleContact