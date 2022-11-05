import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <div className='bg-amber-50 text-black dark:bg-black dark:text-white px-8 py-10'>
        <div className='flex justify-center'>
            <Image
                src="/LinkedIn-1.png"
                width={40}
                height={40}
                alt="linkedIn"
            />
            <Image
                src="/Twitter-1.png"
                width={40}
                height={40}
                alt="twitter"
                className='ml-2'
            /> 
            <Image
                src="/Facebook-1.png"
                width={40}
                height={40}
                alt="linkedIn"
                className='ml-2'
            />
            <Image
                src="/Instagram-1.png"
                width={40}
                height={40}
                alt="twitter"
                className='ml-2'
            />  
        </div>
        <h3 className='text-lg font-light text-center mt-7'>Design by Samuel Abu</h3>
    </div>
  )
}

export default Footer