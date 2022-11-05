import React from 'react'
import Image from 'next/image'
import kit9 from '../public/kit9.svg'

function Landing() {
  return (
    <>
        <div name="home"></div>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-16 pb-9 px-10 bg-amber-100 dark:bg-stone-900'>
            <div className='flex justify-center h-80'>
                <Image src={kit9} alt="Sam landing svg" width={430} height={330} />
            </div>
            <div className='md:px-10'>
                <h2 className='font-extrabold text-5xl md:text-6xl text-center text-black dark:text-white'>Developer and Creative</h2>
            </div>
        </div>

    </>
    
  )
}

export default Landing