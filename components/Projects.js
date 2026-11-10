'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

function Projects() {
    const webProjects = [
        { name: 'Sammani Consult', desc: 'Catfish Farm', href: 'https://www.sammaniconsult.com/', img: '/sammani.jpg' },
        { name: 'Remo', desc: 'Researcher and Analyst', href: 'https://www.remomogatosi.com/', img: '/remo.jpg' },
        { name: 'TD Inspections', desc: 'A home inspections company.', href: 'https://www.td-inspections.com/', img: '/tdinspections.jpg' },
        { name: 'Tase Design', desc: 'A design company.', href: 'https://tase-design.vercel.app/', img: '/tasedesign.jpg' },
        { name: 'tunesketch', desc: 'African Music Blog.', href: 'https://www.tunesketch.com/', img: '/tunesketch.jpg' },
        { name: 'iamMHP', desc: 'A musician catalogue.', href: 'https://iammhp.vercel.app/', img: '/iammhp.jpg' },
        { name: 'BigBoyEllis', desc: 'A musician website.', href: 'https://www.bigboyellis.com', img: '/bigboyellis.jpg' },
        { name: 'Potiphar', desc: 'Digital Marketing Business.', href: 'https://potiphar.vercel.app/', img: '/potiphar.jpg' },
        { name: 'Tashako Mobile', desc: 'Fictional tech retail business.', href: 'https://tashakomobile.vercel.app/', img: '/tashako.jpg' },
    ]

    return (
        <>
            <div id="projects"></div>
            <div className='bg-amber-100 text-black dark:bg-stone-900 dark:text-white px-10 md:px-20 lg:px-24 py-9'>
                               
                <motion.h3 
                    initial={{y:30, opacity: 0}}
                    whileInView={{y:0, opacity: 1}}
                    transition={{delay: 0.5}}
                    viewport={{ once: true }}
                    className='text-3xl font-semibold text-center pt-10 lg:pt-16 pb-3 underline underline-offset-8'>Mobile Development Projects</motion.h3>

                {/* tunesketch app */}
                <main className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-8 md:gap-20'>
                    <motion.div 
                        initial={{y:-30, opacity: 0}}
                        whileInView={{y:0, opacity: 1}}
                        viewport={{ once: true }}
                        transition={{delay: 0.5}}
                        className='flex items-center justify-center lg:justify-end'>
                        <div className='flex flex-col items-center'>
                            <h5 className='text-3xl font-bold'>tunesketch</h5>
                            <p className='text-xl pt-1 text-center'>A music promotions app for Africans in Africa and the whole Diaspora</p>
                            <p className='text-md pt-3 text-center'>Available for Android devices</p>
                            <div className='pt-5'>
                                <a href='https://play.google.com/store/apps/details?id=com.abu.sammie.tunesketch18' target='_blank' rel='noreferrer' className="hover:opacity-80 transition-opacity outline-none focus:outline-none">
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
                        viewport={{ once: true }}
                        className='lg:w-96 mx-auto'>
                        <Image
                            height={1920}
                            width={921}
                            alt="tunesketch android app"
                            src='/tunesketch-portrait.png'
                            className="w-full h-auto"
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
                            viewport={{ once: true }}
                            className='lg:w-96 mx-auto'>
                            <Image
                                height={1920}
                                width={921}
                                alt="intelect africa android app"
                                src='/ia-portrait.png'
                                className="w-full h-auto"
                            />
                        </motion.div>
                    </div>
                    
                    <motion.div 
                        initial={{y:-30, opacity: 0}}
                        whileInView={{y:0, opacity: 1}}
                        transition={{delay: 0.5}}
                        viewport={{ once: true }}
                        className='flex items-center justify-center lg:justify-start order-1 lg:order-2'>
                        <div className='flex flex-col items-center lg:pr-44'>
                            <h5 className='text-3xl font-bold'>Intelect Africa</h5>
                            <p className='text-xl pt-1 text-center'>An African-centered hub to inform and inspire Africa&apos;s future using compelling narratives.</p>
                            <p className='text-md pt-3 text-center'>Available for Android devices</p>
                            <div className='pt-5'>
                                <a href='https://play.google.com/store/apps/details?id=com.abu.sammie.intelectafrica' target='_blank' rel='noreferrer' className="hover:opacity-80 transition-opacity outline-none focus:outline-none">
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
                    viewport={{ once: true }}
                    className='text-3xl font-semibold text-center pt-10 lg:pt-16 pb-3 underline underline-offset-8'>Web Development Projects</motion.h3>


                <main className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12'>
                    {webProjects.map((project) => (
                        <a key={project.name} 
                            target='_blank' 
                            href={project.href} 
                            rel='noreferrer' 
                            className="block bg-transparent outline-none border-none ring-0 focus:outline-none focus:ring-0 group rounded-lg overflow-hidden"
                        >
                            <motion.div
                                initial={{ y: 40, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className='flex flex-col h-full bg-amber-50 dark:bg-stone-800 rounded-lg drop-shadow-md overflow-hidden outline-none border-none transition-all duration-300 group-hover:drop-shadow-xl group-hover:-translate-y-1 group-focus-visible:ring-4 group-focus-visible:ring-amber-500'
                            >
                                {/* Image Container with Overlay */}
                                <div className='relative w-full aspect-[4/3] flex items-center justify-center overflow-hidden outline-none border-none'>
                                    <Image
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        alt={project.name}
                                        src={project.img}
                                        className='object-cover object-top brightness-[0.4] group-hover:scale-105 transition-transform duration-500 outline-none border-none'
                                    />
                                    <span className='absolute z-10 font-bold text-3xl lg:text-4xl text-white px-5 text-center w-full drop-shadow-md outline-none border-none'>
                                        {project.name}
                                    </span>
                                </div>
                                
                                {/* Text Container */}
                                <div className='flex flex-col flex-grow justify-between bg-amber-50 dark:bg-black outline-none border-none'>
                                    <span className='text-lg md:text-xl px-4 py-4 text-center outline-none border-none'>
                                        {project.desc}
                                    </span>
                                    <div className='flex justify-center items-center py-4 text-sm lg:text-md tracking-wider text-stone-500 dark:text-stone-400 border-t border-stone-200 dark:border-stone-700 outline-none'>
                                        <span className="outline-none border-none">VIEW WEBSITE</span>
                                        <span className="outline-none border-none">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform outline-none border-none">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </a>
                    ))}                    
                </main>
            </div>
        </>
        
    )
}

export default Projects