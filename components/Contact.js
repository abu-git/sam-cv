import React, { useState } from 'react'
import validator from 'validator'

function Contact() {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    //Form validation error state
    const [errors, setErrors] = useState({})

    //success and failure states
    const [success, setSuccess] = useState(false)
    const [failure, setFailure] = useState(false)

    const handleValidation = () => {
        let tempErrors = {}
        let isValid = true //default

        if(validator.isEmpty(name)){
            tempErrors['name'] = true
            isValid = false
        }else if(validator.isEmpty(message)){
            tempErrors['message'] = true
            isValid = false
        }

        setErrors({...tempErrors})
        console.log('errors', errors)
        return isValid
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let isValid = handleValidation()
    }
    
    return (
    <>
        <div name="contact"></div>
        <div className='bg-amber-100 text-black dark:bg-stone-900 dark:text-white px-10 py-9'>
            <h3 className='text-3xl font-semibold text-center'>Contact</h3>

            <div className='flex justify-center mx-6 mt-9'>
                <form onSubmit={handleSubmit} className='w-96'>
                    <div className='mb-6'>
                        {errors?.name && (
                            <p className='text-red-500 my-2'>Name cannot be empty</p>
                        )}
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)} 
                            className="appearance-none bg-transparent border-b-2 border-slate-400 w-full text-black dark:text-white mr-3 py-1 px-2 text-xl focus:outline-none focus:border-black dark:focus:border-amber-100" placeholder="Jane Doe" aria-label="Full name"/>
                    </div>
                    <div className='mb-6'>
                        {errors?.message && (
                            <p className='text-red-500 mt-1'>Message cannot be empty</p>
                        )}
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)} 
                            rows="8" 
                            className="appearance-none bg-transparent border-b-2 border-slate-400 w-full text-black dark:text-white text-xl mr-3 py-1 px-2 focus:outline-none focus:border-black dark:focus:border-amber-100" type="text" placeholder="Your message..." aria-label="Message" />
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