import React, { useState } from 'react'

function Contact() {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    
    return (
    <>
        <div name="contact"></div>
        <div className='bg-amber-100 text-black dark:bg-stone-900 dark:text-white px-10 py-9'>
            <h3 className='text-3xl font-semibold text-center'>Contact</h3>

            <div className='flex justify-center mx-6 mt-9'>
                <form className='w-96'>
                    <div className='mb-6'>
                        <input className="appearance-none bg-transparent border-b-2 border-slate-400 w-full text-purple-500 mr-3 py-1 px-2 leading-tight focus:outline-none focus:border-black dark:focus:border-amber-100" type="text" placeholder="Jane Doe" aria-label="Full name"/>
                    </div>
                    <div className='mb-6'>
                        <textarea rows="8" className="appearance-none bg-transparent border-b-2 border-slate-400 w-full text-purple-500 mr-3 py-1 px-2 leading-tight focus:outline-none focus:border-black dark:focus:border-amber-100" type="text" placeholder="Your message..." aria-label="Full name" />
                    </div>
                    <div className='mb-4 flex justify-end'>
                        <button className='bg-stone-800 hover:bg-black dark:bg-amber-50 dark:hover:bg-amber-100 shadow-md hover:shadow-lg shadow-cyan-500/60 hover:shadow-purple-500/70 border-2 border-black text-white dark:text-black text-semibold text-lg py-1 px-2 rounded'>Send Message!</button>
                    </div>
                </form>
            </div>
        </div>  
    </>
  )
}

export default Contact