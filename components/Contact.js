'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    // Form validation error state
    const [errors, setErrors] = useState({})

    // Loading & feedback states
    const [isSending, setIsSending] = useState(false)
    const [success, setSuccess] = useState(false)
    const [failure, setFailure] = useState(false)

    const handleValidation = () => {
        const tempErrors = {}
        let isValid = true

        if (!name.trim()) {
            tempErrors.name = true
            isValid = false
        }
        if (!email.trim()) {
            tempErrors.email = true
            isValid = false
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            tempErrors.emailValid = true
            isValid = false
        }
        if (!message.trim()) {
            tempErrors.message = true
            isValid = false
        }

        setErrors(tempErrors)
        return isValid
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // Reset previous feedback
        setSuccess(false)
        setFailure(false)

        const isValid = handleValidation()
        if (!isValid) return

        setIsSending(true)

        try {
            const res = await fetch('/api/contact', {
                body: JSON.stringify({ name, email, message }),
                headers: { 'Content-Type': 'application/json' },
                method: 'POST',
            })

            const data = await res.json()

            if (!res.ok || data.status !== 'Ok') {
                console.error('Send failed:', data)
                setFailure(true)
            } else {
                setSuccess(true)
                // Clear the form on success
                setName('')
                setEmail('')
                setMessage('')
            }
        } catch (err) {
            console.error('Network error:', err)
            setFailure(true)
        } finally {
            setIsSending(false)
        }
    }

    return (
        <>
            <div id="contact"></div>
            <div className='bg-amber-100 text-black dark:bg-stone-900 dark:text-white px-10 py-9'>
                <motion.h3
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className='text-4xl font-semibold text-center'
                >
                    Contact Me
                </motion.h3>

                <motion.h4
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className='mt-10 text-xl text-center'
                >
                    you can drop me a message right here.
                </motion.h4>

                <div className='flex justify-center mx-6 mt-14'>
                    <motion.form
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        viewport={{ once: true }}
                        onSubmit={handleSubmit}
                        className='w-96'
                    >
                        <div className='mb-6'>
                            {errors?.name && (
                                <p className='text-red-500 my-2'>Name cannot be empty</p>
                            )}
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                disabled={isSending}
                                className="appearance-none bg-transparent border-b-2 border-slate-400 w-full text-black dark:text-white mr-3 py-1 px-2 text-xl focus:outline-none focus:border-black dark:focus:border-amber-100 disabled:opacity-50"
                                placeholder="Your Name"
                                aria-label="Full name"
                            />
                        </div>
                        <div className='mb-6'>
                            {errors?.email && (
                                <p className='text-red-500 my-2'>Email cannot be empty</p>
                            )}
                            {errors?.emailValid && (
                                <p className='text-red-500 my-2'>Please use valid email address</p>
                            )}
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={isSending}
                                className="appearance-none bg-transparent border-b-2 border-slate-400 w-full text-black dark:text-white mr-3 py-1 px-2 text-xl focus:outline-none focus:border-black dark:focus:border-amber-100 disabled:opacity-50"
                                placeholder="Your Email"
                                aria-label="Email"
                            />
                        </div>
                        <div className='mb-6'>
                            {errors?.message && (
                                <p className='text-red-500 mt-1'>Message cannot be empty</p>
                            )}
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                disabled={isSending}
                                rows="8"
                                className="appearance-none bg-transparent border-b-2 border-slate-400 w-full text-black dark:text-white text-xl mr-3 py-1 px-2 focus:outline-none focus:border-black dark:focus:border-amber-100 disabled:opacity-50"
                                placeholder="Your message..."
                                aria-label="Message"
                            />
                        </div>

                        {success && <p className='text-green-500 my-2 text-center'>Your Message has been sent!</p>}
                        {failure && <p className='text-red-500 my-2 text-center'>There is probably a network issue. Please try again later!</p>}

                        <div className='mb-4 flex justify-center'>
                            <button
                                type="submit"
                                disabled={isSending}
                                className='bg-stone-800 hover:bg-black dark:bg-amber-50 dark:hover:bg-amber-100 shadow-md hover:shadow-lg shadow-cyan-500/60 hover:shadow-purple-500/70 border-2 border-black text-white dark:text-black text-semibold text-lg py-1 px-2 rounded disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-md flex items-center gap-2'
                            >
                                {isSending ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    'Send Message!'
                                )}
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </>
    )
}

export default Contact