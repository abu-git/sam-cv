import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <div className='bg-amber-50 text-black dark:bg-black dark:text-white px-8 py-10'>
        <div className='flex justify-center'>
            <a target="_blank" href="https://www.linkedin.com/in/abu-samuel/" rel="noreferrer">
                <Image
                    src="/LinkedIn-1.png"
                    width={40}
                    height={40}
                    alt="linkedIn"
                />
            </a>
            
            <a target="_blank" href="https://twitter.com/reachMHP" rel="noreferrer">
                <Image
                    src="/Twitter-1.png"
                    width={40}
                    height={40}
                    alt="twitter"
                    className='ml-2'
                /> 
            </a>
            
            <a target="_blank" href="https://www.facebook.com/profile.php?id=1150817536" rel="noreferrer">
                <Image
                    src="/Facebook-1.png"
                    width={40}
                    height={40}
                    alt="facebook"
                    className='ml-2'
                />
            </a>
            
            <a target="_blank" href='https://www.instagram.com/mhp_samuel/' rel='noreferrer'>
                <Image
                    src="/Instagram-1.png"
                    width={40}
                    height={40}
                    alt="twitter"
                    className='ml-2'
                />  
            </a>
            
        </div>
        <h3 className='text-lg font-light text-center mt-7'>2022 Design by Samuel Abu</h3>
    </div>
  )
}

export default Footer