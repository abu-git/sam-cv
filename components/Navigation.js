'use client'
import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'

const SECTIONS = ['home', 'about', 'education', 'projects', 'contact']

function Navigation() {
  const [showSideBar, setShowSideBar] = useState(false)
  const sidebarRef = useRef(null)
  const menuButtonRef = useRef(null)

  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Compute current theme once, in component scope (fixes the ReferenceError)
  const currentTheme = theme === 'system' ? systemTheme : theme

  // Close sidebar on Escape
  useEffect(() => {
    if (!showSideBar) return
    const handleKey = (e) => {
      if (e.key === 'Escape') setShowSideBar(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [showSideBar])

  // Close sidebar on outside click
  useEffect(() => {
    if (!showSideBar) return
    const handleClick = (e) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(e.target)
      ) {
        setShowSideBar(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [showSideBar])

  // Lock body scroll while sidebar is open
  useEffect(() => {
    if (showSideBar) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [showSideBar])

  const renderThemeChanger = () => {
    // Avoid hydration mismatch: render nothing until client is mounted
    if (!mounted) {
      return <div className='w-7 h-7' aria-hidden='true' />
    }

    const isDark = currentTheme === 'dark'

    return (
      <button
        type='button'
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        className='rounded p-1 hover:bg-amber-100 dark:hover:bg-stone-800 focus:outline focus:outline-2 focus:outline-offset-2'
      >
        {isDark ? (
          <SunIcon className='w-7 h-7 hover:fill-yellow-500' />
        ) : (
          <MoonIcon className='w-7 h-7 hover:fill-stone-900' />
        )}
      </button>
    )
  }

  return (
    <div className='px-10 py-4 rounded shadow-md bg-amber-50 text-black dark:bg-black dark:text-white fixed top-0 z-10 w-full'>
      {/* Large Screen navigation */}
      <nav className='flex justify-between items-center'>
        <a href='#home' aria-label='Back to top' className='flex items-center'>
          <div className='ripple-nav'>
            <Image
              src='/samLogo.png'
              width={27}
              height={27}
              alt='Samuel Abu Logo'
            />
          </div>
          <h4 className='ml-2 font-extrabold text-[21px]'>Samuel Abu</h4>
        </a>

        <ul className='hidden lg:flex justify-between items-center w-2/3 text-[20px]'>
          {SECTIONS.map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className='cursor-pointer hover:opacity-70 focus:outline focus:outline-2 focus:outline-offset-4 rounded'
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Single theme toggle */}
        {renderThemeChanger()}

        <button
          ref={menuButtonRef}
          type='button'
          onClick={() => setShowSideBar((v) => !v)}
          aria-label={showSideBar ? 'Close menu' : 'Open menu'}
          aria-expanded={showSideBar}
          aria-controls='mobile-sidebar'
          className='lg:hidden rounded p-1 focus:outline focus:outline-2 focus:outline-offset-2'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </nav>

      {/* Smaller devices navigation */}
      <div
        id='mobile-sidebar'
        ref={sidebarRef}
        className={`top-0 right-0 w-[380px] max-w-full bg-lime-100 text-black dark:bg-teal-900 dark:text-white p-10 pl-20 fixed h-full z-40 ease-in-out duration-300 ${
          showSideBar ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!showSideBar}
      >
        <nav>
          <div className='flex justify-end'>
            <button
              type='button'
              onClick={() => setShowSideBar(false)}
              aria-label='Close menu'
              className='rounded p-1 focus:outline focus:outline-2 focus:outline-offset-2'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6 cursor-pointer'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>

          <ul className='text-center py-8 text-[27px]'>
            {SECTIONS.map((section) => (
              <li key={section} className='py-2'>
                <a
                  href={`#${section}`}
                  onClick={() => setShowSideBar(false)}
                  className='block cursor-pointer hover:opacity-70 focus:outline focus:outline-2 focus:outline-offset-4 rounded'
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navigation