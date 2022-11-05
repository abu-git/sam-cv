import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function Navigation() {
    //sidebar state
    const [showSideBar, setShowSideBar] = useState(false)

    //dark theme config
    const { systemTheme, theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    //theme changer config
    const renderThemeChanger = () => {
        if(!mounted) return null

        const currentTheme = theme === 'system' ? systemTheme : theme

        if(currentTheme === 'dark'){
            return(
                <SunIcon className="w-7 h-7 hover:fill-yellow-500" role="button" onClick={() => setTheme('light')} /> 
            )
        }else{
            return(
                <MoonIcon className="w-7 h-7 hover:fill-stone-900" role="button" onClick={() => setTheme('dark')} />
            )
        }
    }

    return (
        <div className='px-10 py-4 rounded shadow-md bg-amber-50 text-black dark:bg-black dark:text-white fixed top-0 z-10 w-full'>
            {/* Large Screen navigation */}
            <nav className='flex justify-between items-center'>
                <Link to='home' spy={true} smooth={true} offset={-60} duration={500} delay={500}>
                    <div className='flex items-center cursor-pointer'>
                        <div className='ripple-nav'>
                            <Image 
                                src='/samLogo.png'
                                width={27}
                                height={27}
                                alt='Samuel Abu Logo'
                            />
                        </div>
                        <h4 className='ml-2 font-extrabold text-[21px]'>Samuel Abu</h4>
                    </div>
                </Link>

                <ul className='hidden lg:flex justify-between items-center w-2/3 text-[20px]'>
                    <Link to='home' spy={true} smooth={true} offset={-60} duration={500} delay={500}>
                        <li className='cursor-pointer'>Home</li>
                    </Link>
                    <Link to='about' spy={true} smooth={true} offset={-60} duration={500} delay={500}>
                        <li className='cursor-pointer'>About</li>
                    </Link>
                    <Link to='education' spy={true} smooth={true} offset={-60} duration={500} delay={500}>
                        <li className='cursor-pointer'>Education</li>
                    </Link>
                    <Link to='projects' spy={true} smooth={true} offset={-60} duration={500} delay={500}>
                        <li className='cursor-pointer'>Projects</li>
                    </Link>
                    <li className='cursor-pointer'>Contact</li>
                </ul>

                {renderThemeChanger()}

                <button onClick={() => setShowSideBar(!showSideBar)} className='lg:hidden'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </button>
            </nav>

            {/* Smaller devices navigation */}
            <div className={`top-0 right-0 w-[380px] bg-lime-100 text-black dark:bg-teal-900 dark:text-white p-10 pl-20 fixed h-full z-40 ease-in-out duration-300 ${showSideBar ? "translate-x-0" : "translate-x-full"}`}>
                <nav>
                    <div className='flex justify-end'>
                        <button onClick={() => setShowSideBar(!showSideBar)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <ul className='text-center py-8 text-[27px]'>
                        <Link onClick={() => setShowSideBar(!showSideBar)} to='home' spy={true} smooth={true} offset={-60} duration={500} delay={500}>
                            <li className='py-2 cursor-pointer'>Home</li>
                        </Link>
                        <Link onClick={() => setShowSideBar(!showSideBar)} to='about' spy={true} smooth={true} offset={-60} duration={500} delay={500}>
                            <li className='py-2 cursor-pointer'>About</li>
                        </Link>
                        <Link onClick={() => setShowSideBar(!showSideBar)} to='education' spy={true} smooth={true} offset={-60} duration={500} delay={500}>
                            <li className='py-2 cursor-pointer'>Education</li>
                        </Link>
                        <Link onClick={() => setShowSideBar(!showSideBar)} to='projects' spy={true} smooth={true} offset={-60} duration={500} delay={500}>
                            <li className='py-2 cursor-pointer'>Projects</li>
                        </Link>
                        <li className='py-2 cursor-pointer'>Contact</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navigation