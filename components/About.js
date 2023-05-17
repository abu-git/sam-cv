import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <>
        <div name="about"></div>
        <div className='px-8 md:px-12 py-10 bg-amber-50 text-black dark:bg-black dark:text-white grid grid-cols-1 md:grid-cols-2 items-center'>
            <motion.h3 
              initial={{x:30, opacity: 0}}
              whileInView={{x:0, opacity: 1}}
              transition={{delay: 0.7}}
              className='text-4xl font-semibold text-center'>About Me</motion.h3>

            <section className='mt-4 md:mt-0 lg:pr-32'>
                <motion.p
                  initial={{x:-30, opacity: 0}}
                  whileInView={{x:0, opacity: 1}}
                  transition={{delay: 0.8}}
                  className='text-2xl mb-4 lg:mb-8'>I am an African developer aiming to make my mark in the digital space. I spend most of my time on creative pursuits and this usually involves me writing code. I enjoy the process and I am proud of the person I have become and still becoming.</motion.p>

                <motion.p 
                  initial={{x:-30, opacity: 0}}
                  whileInView={{x:0, opacity: 1}}
                  transition={{delay: 1}}
                  className='text-2xl mb-4 lg:mb-8'>I am an avid JavaScript enthusiast and my current frontend framework of choice is Next.js. I usually combine this with a knowledge of TailwindCSS to create my designs. These are some of the tools I used to build this web application.</motion.p>

                <motion.p 
                  initial={{x:-30, opacity: 0}}
                  whileInView={{x:0, opacity: 1}}
                  transition={{delay: 1.2}}
                  className='text-2xl'>I also learn French in my spare time and have been doing so for a while now. &quot;Je lis un peu de francais&quot;.</motion.p>
            </section>
        </div>
    </>
    
  )
}

export default About