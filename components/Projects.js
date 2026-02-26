import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function Projects() {
  return (
    <>
        <div name="projects"></div>
        <div className='bg-amber-100 text-black dark:bg-stone-900 dark:text-white px-10 md:px-20 lg:px-24 py-9'>
            {/*<motion.h3 
                initial={{y:-30, opacity: 0}}
                whileInView={{y:0, opacity: 1}}
                transition={{delay: 0.5}}
                className='text-4xl font-semibold text-center'>Projects</motion.h3>*/}

            
            <motion.h3 
                initial={{y:30, opacity: 0}}
                whileInView={{y:0, opacity: 1}}
                transition={{delay: 0.5}}
                className='text-3xl font-semibold text-center pt-10 lg:pt-16 pb-3 underline underline-offset-8'>Mobile Development Projects</motion.h3>

            {/* tunesketch app */}
            <main className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-8 md:gap-20'>
                <motion.div 
                    initial={{y:-30, opacity: 0}}
                    whileInView={{y:0, opacity: 1}}
                    transition={{delay: 0.5}}
                    className='flex items-center justify-center lg:justify-end'>
                    <div className='flex flex-col items-center'>
                        <h5 className='text-3xl font-bold'>tunesketch</h5>
                        <p className='text-xl pt-1 text-center'>A music promotions app for Africans in Africa and the whole Diaspora</p>
                        <p className='text-md pt-3 text-center'>Available for Android devices</p>
                        <div className='pt-5'>
                            <a href='https://play.google.com/store/apps/details?id=com.abu.sammie.tunesketch18' target='_blank' rel='noreferrer'>
                                <Image
                                    height={47}
                                    width={149}
                                    src="/googleplay.png"
                                    alt="Google Play png"
                                />
                            </a>
                        </div>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{y:30, opacity: 0}}
                    whileInView={{y:0, opacity: 1}}
                    transition={{delay: 0.5}}
                    className='lg:w-96'>
                    <Image
                        height={1920}
                        width={921}
                        alt="tunesketch android app"
                        src='/tunesketch-portrait.png'
                    />
                </motion.div>
            </main>

            {/* Intelect Africa app */}
            <main className='mt-10 lg:mt-20 grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-8 md:gap-20'>
                <div className='flex lg:justify-end order-2 lg:order-1'>
                    <motion.div 
                        initial={{y:30, opacity: 0}}
                        whileInView={{y:0, opacity: 1}}
                        transition={{delay: 0.5}}
                        className='lg:w-96'>
                        <Image
                            height={1920}
                            width={921}
                            alt="intelect africa android app"
                            src='/ia-portrait.png'
                        />
                    </motion.div>
                </div>
                
                <motion.div 
                    initial={{y:-30, opacity: 0}}
                    whileInView={{y:0, opacity: 1}}
                    transition={{delay: 0.5}}
                    className='flex items-center justify-center lg:justify-start order-1 lg:order-2'>
                    <div className='flex flex-col items-center lg:pr-44'>
                        <h5 className='text-3xl font-bold'>Intelect Africa</h5>
                        <p className='text-xl pt-1 text-center'>An African-centered hub to inform and inspire Africa&apos;s future using compelling narratives.</p>
                        <p className='text-md pt-3 text-center'>Available for Android devices</p>
                        <div className='pt-5'>
                            <a href='https://play.google.com/store/apps/details?id=com.abu.sammie.intelectafrica' target='_blank' rel='noreferrer'>
                                <Image
                                    height={47}
                                    width={149}
                                    src="/googleplay.png"
                                    alt="Google Play png"
                                />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </main>

            <motion.h3 
                initial={{y:-30, opacity: 0}}
                whileInView={{y:0, opacity: 1}}
                transition={{delay: 0.5}}
                className='text-3xl font-semibold text-center pt-10 lg:pt-16 pb-3 underline underline-offset-8'>Web Development Projects</motion.h3>


            <main className='mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-20'>
                <a target='_blank' href='https://www.remomogatosi.com/' rel='noreferrer'>
                    <motion.div 
                        initial={{y:40, opacity: 0}}
                        whileInView={{y:0, opacity: 1}}
                        transition={{delay: 0.7}}
                        className='flex flex-col cursor-pointer bg-amber-50 dark:bg-black rounded drop-shadow-lg overflow-hidden'>
                        <div className='relative'>
                            <Image 
                                width={433}
                                height={433}
                                alt="Remo Mogatosi"
                                src="/remo.jpg"
                                className='brightness-[0.2] w-full'
                            />
                            <div className='absolute -mt-36 md:-mt-40 w-full'>
                                <h4 className='brightness-100 font-bold text-4xl text-white px-5 text-center'>Remo</h4>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <span className='text-lg px-3 py-2 text-center'>
                                Researcher and Analyst
                            </span>
                            <button className='flex justify-center items-center pt-9 pb-4 pl-3 text-md lg:text-lg text-gray-500 dark:text-gray-500'>
                                <h4>VIEW WEBSITE</h4>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pl-2 w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </motion.div>
                </a>

                <a target='_blank' href='https://www.td-inspections.com/' rel='noreferrer'>
                    <motion.div 
                        initial={{y:40, opacity: 0}}
                        whileInView={{y:0, opacity: 1}}
                        transition={{delay: 0.8}}
                        className='flex flex-col cursor-pointer bg-amber-50 dark:bg-black rounded drop-shadow-lg overflow-hidden '>
                        <div className='relative'>
                            <Image 
                                width={433}
                                height={433}
                                alt="TD Inspections"
                                src="/tdinspections.jpg"
                                className='brightness-[0.2] w-full'
                            />
                            <div className='absolute -mt-36 md:-mt-40 w-full'>
                                <h4 className='brightness-100 font-bold text-4xl text-white px-5 text-center'>TD Inspections</h4>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <span className='text-lg px-3 py-2 text-center'>
                                A home inspections company.
                            </span>
                            <button className='flex justify-center items-center pt-9 pb-4 pl-3 text-md lg:text-lg text-gray-500 dark:text-gray-500'>
                                <h4>VIEW WEBSITE</h4>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pl-2 w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </motion.div>
                </a>

                <a target='_blank' href='https://tase-design.vercel.app/' rel='noreferrer'>
                    <motion.div 
                        initial={{y:40, opacity: 0}}
                        whileInView={{y:0, opacity: 1}}
                        transition={{delay: 0.9}}
                        className='flex flex-col cursor-pointer bg-amber-50 dark:bg-black rounded drop-shadow-lg overflow-hidden '>
                        <div className='relative'>
                            <Image 
                                width={433}
                                height={433}
                                alt="Tase Design"
                                src="/tasedesign.jpg"
                                className='brightness-[0.4] w-full'
                            />
                            <div className='absolute -mt-36 md:-mt-40 w-full'>
                                <h4 className='brightness-100 font-bold text-4xl text-white px-5 text-center'>Tase Design</h4>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <span className='text-lg px-3 py-2 text-center'>
                                A design company.
                            </span>
                            <button className='flex justify-center items-center pt-9 pb-4 pl-3 text-md lg:text-lg text-gray-500 dark:text-gray-500'>
                                <h4>VIEW WEBSITE</h4>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pl-2 w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </motion.div>
                </a>

                <a target='_blank' href='https://www.tunesketch.com/' rel='noreferrer'>
                    <motion.div 
                        initial={{y:40, opacity: 0}}
                        whileInView={{y:0, opacity: 1}}
                        transition={{delay: 0.7}}
                        className='flex flex-col cursor-pointer bg-amber-50 dark:bg-black rounded drop-shadow-lg overflow-hidden '>
                        <div className='relative'>
                            <Image 
                                width={433}
                                height={433}
                                alt="tunesketch"
                                src="/tunesketch.jpg"
                                className='brightness-[0.2] w-full'
                            />
                            <div className='absolute -mt-36 md:-mt-40 w-full'>
                                <h4 className='brightness-100 font-bold text-4xl text-white px-5 text-center'>tunesketch</h4>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <span className='text-lg px-3 py-2 text-center'>
                                African Music Blog.
                            </span>
                            <button className='flex justify-center items-center pt-9 pb-4 pl-3 text-md lg:text-lg text-gray-500 dark:text-gray-500'>
                                <h4>VIEW WEBSITE</h4>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pl-2 w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </motion.div>
                </a>

                <a target='_blank' href='https://iammhp.vercel.app/' rel='noreferrer'>
                    <motion.div 
                        initial={{y:40, opacity: 0}}
                        whileInView={{y:0, opacity: 1}}
                        transition={{delay: 0.8}}
                        className='flex flex-col cursor-pointer bg-amber-50 dark:bg-black rounded drop-shadow-lg overflow-hidden '>
                        <div className='relative'>
                            <Image 
                                width={433}
                                height={433}
                                alt="iamMHP"
                                src="/iammhp.jpg"
                                className='brightness-[0.2] w-full'
                            />
                            <div className='absolute -mt-36 md:-mt-40 w-full'>
                                <h4 className='brightness-100 font-bold text-4xl text-white px-5 text-center'>iamMHP</h4>
                            </div>
                        </div>
                        
                        <div className='flex flex-col justify-between'>
                            <span className='text-lg px-3 py-2 text-center'>
                                A musician catalogue.
                            </span>
                            <button className='flex justify-center items-center pt-9 pb-4 pl-3 text-md lg:text-lg text-gray-500 dark:text-gray-500'>
                                <h4>VIEW WEBSITE</h4>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pl-2 w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </motion.div>
                </a>
                
                <a target='_blank' href='https://www.bigboyellis.com' rel='noreferrer'>
                    <motion.div 
                        initial={{y:40, opacity: 0}}
                        whileInView={{y:0, opacity: 1}}
                        transition={{delay: 0.9}}
                        className='flex flex-col cursor-pointer bg-amber-50 dark:bg-black rounded drop-shadow-lg overflow-hidden '>
                        <div className='relative'>
                            <Image 
                                width={433}
                                height={433}
                                alt="bigboyellis"
                                src="/bigboyellis.jpg"
                                className='brightness-[0.2] w-full'
                            />
                            <div className='absolute -mt-36 md:-mt-40 w-full'>
                                <h4 className='brightness-100 font-bold text-4xl text-white px-5 text-center'>BigBoyEllis</h4>
                            </div>
                        </div>
                        
                        <div className='flex flex-col justify-between'>
                            <span className='text-lg px-3 py-2 text-center'>
                                A musician website.
                            </span>
                            <button className='flex justify-center items-center pt-9 pb-4 pl-3 text-md lg:text-lg text-gray-500 dark:text-gray-500'>
                                <h4>VIEW WEBSITE</h4>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pl-2 w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </motion.div>   
                </a>

                <a target='_blank' href='https://potiphar.vercel.app/' rel='noreferrer'>
                    <motion.div 
                        initial={{y:40, opacity: 0}}
                        whileInView={{y:0, opacity: 1}}
                        transition={{delay: 0.8}}
                        className='flex flex-col cursor-pointer bg-amber-50 dark:bg-black rounded drop-shadow-lg overflow-hidden '>
                        <div className='relative'>
                            <Image 
                                width={433}
                                height={433}
                                alt="potiphar"
                                src="/potiphar.jpg"
                                className='brightness-[0.2] w-full'
                            />
                            <div className='absolute -mt-36 md:-mt-40 w-full'>
                                <h4 className='brightness-100 font-bold text-4xl text-white px-5 text-center'>Potiphar</h4>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <span className='text-lg px-3 py-2 text-center'>
                                Digital Marketing Business.
                            </span>
                            <button className='flex justify-center items-center pt-9 pb-4 pl-3 text-md lg:text-lg text-gray-500 dark:text-gray-500'>
                                <h4>VIEW WEBSITE</h4>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pl-2 w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </span>
                            </button>
                        </div>                      
                    </motion.div>
                </a>

                <a target='_blank' href='https://tashakomobile.vercel.app/' rel='noreferrer'>
                    <motion.div 
                        initial={{y:40, opacity: 0}}
                        whileInView={{y:0, opacity: 1}}
                        transition={{delay: 0.9}}
                        className='flex flex-col cursor-pointer bg-amber-50 dark:bg-black rounded drop-shadow-lg overflow-hidden '>
                        <div className='relative'>
                            <Image 
                                width={433}
                                height={433}
                                alt="tashako mobile"
                                src="/tashako.jpg"
                                className='brightness-[0.2] w-full'
                            />
                            <div className='absolute -mt-36 md:-mt-40 w-full'>
                                <h4 className='brightness-100 font-bold text-4xl text-white px-5 text-center'>Tashako Mobile</h4>
                            </div>
                        </div>
                        
                        <div className='flex flex-col justify-between'>
                            <span className='text-lg px-3 py-2 text-center'>
                                Fictional tech retail business.
                            </span>
                            <button className='flex justify-center items-center pt-9 pb-4 pl-3 text-md lg:text-lg text-gray-500 dark:text-gray-500'>
                                <h4>VIEW WEBSITE</h4>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pl-2 w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </span>
                            </button>
                        </div>        
                    </motion.div>
                </a>
                

                <a target='_blank' href='https://mahbuubmetals.vercel.app' rel='noreferrer'>
                    <motion.div 
                        initial={{y:40, opacity: 0}}
                        whileInView={{y:0, opacity: 1}}
                        transition={{delay: 0.7}}
                        className='flex flex-col cursor-pointer bg-amber-50 dark:bg-black rounded drop-shadow-lg overflow-hidden '>
                        <div className='relative'>
                            <Image 
                                width={433}
                                height={433}
                                alt="mahbuub"
                                src="/mahbuub.jpg"
                                className='brightness-[0.2] w-full'
                            />
                            <div className='absolute -mt-36 md:-mt-40 w-full'>
                                <h4 className='brightness-100 font-bold text-4xl text-white px-5 text-center'>Mahbuub Metals</h4>
                            </div>
                        </div>
                        
                        <div className='flex flex-col justify-between'>
                            <span className='text-lg px-3 py-2 text-center'>
                               Eco-friendly recycling business.
                            </span>
                            <button className='flex justify-center items-center pt-9 pb-4 pl-3 text-md lg:text-lg text-gray-500 dark:text-gray-500'>
                                <h4>VIEW WEBSITE</h4>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pl-2 w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </motion.div>
                </a>
                
            </main>
        </div>
    </>
    
  )
}

export default Projects
