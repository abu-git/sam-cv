import React, { useState } from 'react'
import validator from 'validator'

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
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
        }else if(validator.isEmpty(email)){
            tempErrors['email'] = true
            isValid = false
        }else if(validator.isEmail(email) === false){
            tempErrors['emailValid'] = true
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

        if(isValid){
            
        }
    }
    
    return (
    <>
        <div name="contact"></div>
        <div className='bg-amber-100 text-black dark:bg-stone-900 dark:text-white px-10 py-9'>
            <h3 className='text-4xl font-semibold text-center'>Contact</h3>

            <div className='flex justify-center mt-6'>
                <span className='mt-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                </span>
                <h4 className='text-2xl font-normal text-center ml-2'>+27 83 245 9000</h4>
            </div>

            <h4 className='mt-10 text-xl text-center'>or you can drop me a message right here.</h4>

            

            <div className='flex justify-center mx-6 mt-14'>
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
                        {errors?.email && (
                            <p className='text-red-500 my-2'>Email cannot be empty</p>
                        )}
                        {errors?.emailValid && (
                            <p className='text-red-500 my-2'>Please use valid email address</p>
                        )}
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} 
                            className="appearance-none bg-transparent border-b-2 border-slate-400 w-full text-black dark:text-white mr-3 py-1 px-2 text-xl focus:outline-none focus:border-black dark:focus:border-amber-100" placeholder="janedoe@example.com" aria-label="Full name"/>
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