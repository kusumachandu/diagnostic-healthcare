import React from 'react'
import { Dna } from 'react-loader-spinner'

function Loading() {
  return (
    <div className='w-full flex justify-center mt-40'>
      <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
    
  )
}

export default Loading
