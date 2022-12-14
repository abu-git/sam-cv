import React from 'react'

function About() {
  return (
    <>
        <div name="about"></div>
        <div className='px-8 md:px-12 py-9 bg-amber-50 text-black dark:bg-black dark:text-white grid grid-cols-1 md:grid-cols-2 items-center'>
            <h3 className='text-4xl font-semibold text-center'>About Me</h3>
            <section className='mt-4 md:mt-0'>
                <p className='text-2xl mb-4'>I am an African developer aiming to make my mark in the digital space. I spend most of my time on creative pursuits and this usually involves me writing code. I enjoy the process and I am proud of the person I have become and still becoming.</p>

                <p className='text-2xl mb-4'>I am an avid JavaScript enthusiast and my current frontend framework of choice is Next.js. I usually combine this with a knowledge of TailwindCSS to create my designs. These are some of the tools I used to build this web application.</p>

                <p className='text-2xl'>I also learn French in my spare time and have been doing so for a while now. &quot;Je lis un peu de francais&quot;.</p>
            </section>
        </div>
    </>
    
  )
}

export default About