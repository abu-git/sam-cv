import React from 'react'
import Image from 'next/image'
import kit9 from '../public/kit9.svg'
import { motion } from 'framer-motion'

function Landing() {
  return (
    <>
        <div name="home"></div>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-16 pb-9 px-10 bg-amber-100 dark:bg-stone-900'>
            <div className='flex justify-center items-center h-80 lg:h-[30rem]'>
                <motion.div
                  initial={{x:-30, opacity: 0}}
                  whileInView={{x:0, opacity: 1}}
                  transition={{delay: 0.5}}
                >
                  <Image src={kit9} alt="Sam landing svg" width={470} height={370} />
                </motion.div>
            </div>
            <div className='md:px-10'>
                <motion.h2
                  initial={{x:30, opacity: 0}}
                  whileInView={{x:0, opacity: 1}}
                  transition={{delay: 0.5}} 
                  className='font-extrabold text-5xl md:text-6xl text-center text-black dark:text-white'>Developer and Creative</motion.h2>
            </div>
        </div>

    </>
    
  )
}

export default Landing