import React from 'react'
import Image from 'next/image'

function Projects() {
  return (
    <>
        <div name="projects"></div>
        <div className='bg-amber-50 text-black dark:bg-black dark:text-white px-10 md:px-14 py-9'>
            <h3 className='text-3xl font-semibold text-center'>Projects</h3>
            <main className='mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14'>
                <div className='flex flex-col cursor-pointer bg-amber-100 dark:bg-stone-800 rounded drop-shadow-lg overflow-hidden'>
                    <div className='relative'>
                        <Image 
                            width={433}
                            height={433}
                            alt="potiphar"
                            src="/potiphar.jpg"
                            className='brightness-[0.2]'
                        />
                        <div className='absolute -mt-36 md:-mt-48 w-full'>
                            <h4 className='brightness-100 font-bold text-4xl text-white px-5 text-center'>Potiphar</h4>
                        </div>
                    </div>
                    <span className='text-lg px-3 py-2 text-justify'>
                        Multi Page web application for a branding and digital marketing business.
                    </span>
                </div>

                <div className='flex flex-col cursor-pointer bg-amber-100 dark:bg-stone-800 rounded drop-shadow-lg overflow-hidden'>
                    <div className='relative'>
                        <Image 
                            width={433}
                            height={433}
                            alt="mahbuub"
                            src="/mahbuub.jpg"
                            className='brightness-[0.2]'
                        />
                        <div className='absolute -mt-36 md:-mt-48 w-full'>
                            <h4 className='brightness-100 font-bold text-4xl text-white px-5 text-center'>Mahbuub Metals</h4>
                        </div>
                    </div>
                    <span className='text-lg px-3 py-2 text-justify'>
                        Single Page web application for an eco-friendly recycling business.
                    </span>
                </div>

                <div className='flex flex-col cursor-pointer bg-amber-100 dark:bg-stone-800 rounded drop-shadow-lg overflow-hidden'>
                    <div className='relative'>
                        <Image 
                            width={433}
                            height={433}
                            alt="iamMHP"
                            src="/iammhp.jpg"
                            className='brightness-[0.2]'
                        />
                        <div className='absolute -mt-36 md:-mt-48 w-full'>
                            <h4 className='brightness-100 font-bold text-4xl text-white px-5 text-center'>iamMHP</h4>
                        </div>
                    </div>
                    <span className='text-lg px-3 py-2 text-justify'>
                        Multi Page web application for a musician catalogue.
                    </span>
                </div>

                <div className='flex flex-col cursor-pointer bg-amber-100 dark:bg-stone-800 rounded drop-shadow-lg overflow-hidden'>
                    <div className='relative'>
                        <Image 
                            width={433}
                            height={433}
                            alt="bigboyellis"
                            src="/bigboyellis.jpg"
                            className='brightness-[0.2]'
                        />
                        <div className='absolute -mt-36 md:-mt-48 w-full'>
                            <h4 className='brightness-100 font-bold text-4xl text-white px-5 text-center'>BigBoyEllis</h4>
                        </div>
                    </div>
                    <span className='text-lg px-3 py-2 text-justify'>
                        Single Page web application for a musician.
                    </span>
                </div>

                <div className='flex flex-col cursor-pointer bg-amber-100 dark:bg-stone-800 rounded drop-shadow-lg overflow-hidden'>
                    <div className='relative'>
                        <Image 
                            width={433}
                            height={433}
                            alt="tashako mobile"
                            src="/tashako.jpg"
                            className='brightness-[0.2]'
                        />
                        <div className='absolute -mt-36 md:-mt-48 w-full'>
                            <h4 className='brightness-100 font-bold text-4xl text-white px-5 text-center'>Tashako Mobile</h4>
                        </div>
                    </div>
                    <span className='text-lg px-3 py-2 text-justify'>
                        Single Page web application demo for a tech retail business.
                    </span>
                </div>

                <div className='flex flex-col cursor-pointer bg-amber-100 dark:bg-stone-800 rounded drop-shadow-lg overflow-hidden'>
                    <div className='relative'>
                        <Image 
                            width={433}
                            height={433}
                            alt="okuta computer systems"
                            src="/okuta.jpg"
                            className='brightness-[0.2]'
                        />
                        <div className='absolute -mt-36 md:-mt-48 w-full'>
                            <h4 className='brightness-100 font-bold text-4xl text-white px-5 text-center'>Okuta Computer Systems</h4>
                        </div>
                    </div>
                    <span className='text-lg px-3 py-2 text-justify'>
                        Multi Page web application demo for a tech business.
                    </span>
                </div>
            </main>
        </div>
    </>
    
  )
}

export default Projects