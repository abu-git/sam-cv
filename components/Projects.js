import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function Projects() {
  return (
    <>
        <div name="projects"></div>
        <div className='bg-amber-50 text-black dark:bg-black dark:text-white px-10 md:px-20 lg:px-24 py-9'>
            <motion.h3 
                initial={{y:-30, opacity: 0}}
                whileInView={{y:0, opacity: 1}}
                transition={{delay: 0.5}}
                className='text-4xl font-semibold text-center'>Projects</motion.h3>
            <main className='mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-20'>
                <a target='_blank' href='https://www.remomogatosi.com/' rel='noreferrer'>
                    <motion.div 
                        initial={{y:40, opacity: 0}}
                        whileInView={{y:0, opacity: 1}}
                        transition={{delay: 0.7}}
                        className='flex flex-col cursor-pointer bg-amber-100 dark:bg-stone-800 rounded drop-shadow-lg overflow-hidden'>
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
                            <button className='flex justify-center pt-9 pb-4 pl-3 text-md lg:text-lg text-gray-500 dark:text-gray-500'>
                                <h4>VIEW APP</h4>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pl-2 pb-1 w-7 h-7">
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
                        className='flex flex-col cursor-pointer bg-amber-100 dark:bg-stone-800 rounded drop-shadow-lg overflow-hidden '>
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
                            <button className='flex justify-center pt-9 pb-4 pl-3 text-md lg:text-lg text-gray-500 dark:text-gray-500'>
                                <h4>VIEW APP</h4>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pl-2 pb-1 w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </motion.div>
                </a>

                <a target='_blank' href='https://www.tasedesign.com/' rel='noreferrer'>
                    <motion.div 
                        initial={{y:40, opacity: 0}}
                        whileInView={{y:0, opacity: 1}}
                        transition={{delay: 0.9}}
                        className='flex flex-col cursor-pointer bg-amber-100 dark:bg-stone-800 rounded drop-shadow-lg overflow-hidden '>
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
                            <button className='flex justify-center pt-9 pb-4 pl-3 text-md lg:text-lg text-gray-500 dark:text-gray-500'>
                                <h4>VIEW APP</h4>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pl-2 pb-1 w-7 h-7">
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
                        className='flex flex-col cursor-pointer bg-amber-100 dark:bg-stone-800 rounded drop-shadow-lg overflow-hidden '>
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
                            <button className='flex justify-center pt-9 pb-4 pl-3 text-md lg:text-lg text-gray-500 dark:text-gray-500'>
                                <h4>VIEW APP</h4>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pl-2 pb-1 w-7 h-7">
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
                        className='flex flex-col cursor-pointer bg-amber-100 dark:bg-stone-800 rounded drop-shadow-lg overflow-hidden '>
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
                            <button className='flex justify-center pt-9 pb-4 pl-3 text-md lg:text-lg text-gray-500 dark:text-gray-500'>
                                <h4>VIEW APP</h4>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pl-2 pb-1 w-7 h-7">
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
                        className='flex flex-col cursor-pointer bg-amber-100 dark:bg-stone-800 rounded drop-shadow-lg overflow-hidden '>
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
                            <button className='flex justify-center pt-9 pb-4 pl-3 text-md lg:text-lg text-gray-500 dark:text-gray-500'>
                                <h4>VIEW APP</h4>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pl-2 pb-1 w-7 h-7">
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
                        className='flex flex-col cursor-pointer bg-amber-100 dark:bg-stone-800 rounded drop-shadow-lg overflow-hidden '>
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
                            <button className='flex justify-center pt-9 pb-4 pl-3 text-md lg:text-lg text-gray-500 dark:text-gray-500'>
                                <h4>VIEW APP</h4>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pl-2 pb-1 w-7 h-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </motion.div>
                </a>
                
                <a target='_blank' href='https://www.iammhp.com' rel='noreferrer'>
                    <motion.div 
                        initial={{y:40, opacity: 0}}
                        whileInView={{y:0, opacity: 1}}
                        transition={{delay: 0.8}}
                        className='flex flex-col cursor-pointer bg-amber-100 dark:bg-stone-800 rounded drop-shadow-lg overflow-hidden '>
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
                            <button className='flex justify-center pt-9 pb-4 pl-3 text-md lg:text-lg text-gray-500 dark:text-gray-500'>
                                <h4>VIEW APP</h4>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pl-2 pb-1 w-7 h-7">
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
                        className='flex flex-col cursor-pointer bg-amber-100 dark:bg-stone-800 rounded drop-shadow-lg overflow-hidden '>
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
                            <button className='flex justify-center pt-9 pb-4 pl-3 text-md lg:text-lg text-gray-500 dark:text-gray-500'>
                                <h4>VIEW APP</h4>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="pl-2 pb-1 w-7 h-7">
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