import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function Footer() {
  return (
    <div className='bg-amber-50 text-black dark:bg-black dark:text-white px-8 py-10'>
        <div className='flex justify-center'>
            <a target="_blank" href="https://www.linkedin.com/in/abu-samuel/" rel="noreferrer">
                <motion.div
                    initial={{y:-30, opacity: 0}}
                    whileInView={{y:0, opacity: 1}}
                    transition={{delay: 0.5}}
                >
                    <Image
                        src="/LinkedIn-1.png"
                        width={40}
                        height={40}
                        alt="linkedIn"
                    />
                </motion.div>
                
            </a>
            
            <a target="_blank" href="https://twitter.com/reachMHP" rel="noreferrer">
                <motion.div
                    initial={{y:-30, opacity: 0}}
                    whileInView={{y:0, opacity: 1}}
                    transition={{delay: 0.6}}  
                >
                    <Image
                        src="/Twitter-1.png"
                        width={40}
                        height={40}
                        alt="twitter"
                        className='ml-2'
                    /> 
                </motion.div>
                
            </a>
            
            <a target="_blank" href="https://www.facebook.com/profile.php?id=1150817536" rel="noreferrer">
                <motion.div
                    initial={{y:-30, opacity: 0}}
                    whileInView={{y:0, opacity: 1}}
                    transition={{delay: 0.7}} 
                >
                    <Image
                        src="/Facebook-1.png"
                        width={40}
                        height={40}
                        alt="facebook"
                        className='ml-2'
                    />
                </motion.div>
                
            </a>
            
            <a target="_blank" href='https://www.instagram.com/mhp_samuel/' rel='noreferrer'>
                <motion.div
                    initial={{y:-30, opacity: 0}}
                    whileInView={{y:0, opacity: 1}}
                    transition={{delay: 0.8}}
                >
                    <Image
                        src="/Instagram-1.png"
                        width={40}
                        height={40}
                        alt="twitter"
                        className='ml-2'
                    /> 
                </motion.div>
                 
            </a>
            
        </div>
        <motion.h3 
            initial={{y:30, opacity: 0}}
            whileInView={{y:0, opacity: 1}}
            transition={{delay: 1.0}}
            className='text-lg font-light text-center mt-7'>Design by Samuel Abu</motion.h3>
    </div>
  )
}

export default Footer