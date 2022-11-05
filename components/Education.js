import React from 'react'
import Image from 'next/image'

function Education() {
  return (
    <>
        <div name="education"></div>
        <div className='px-8 md:px-14 py-9 bg-amber-100 text-black dark:bg-stone-900 dark:text-white'>
            <h3 className='text-4xl font-semibold text-center'>Education</h3>
            <main className='mt-7 grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div className='w-full overflow-hidden rounded-lg shadow-lg flex bg-amber-50 dark:bg-stone-700'>
                    <div className='w-1/3'>
                        <Image 
                            src="/hyperion.png"
                            alt="Udss logo"
                            width={300}
                            height={300}
                        />
                    </div>
                    <section className='py-1 px-3 flex flex-col justify-center w-2/3'>
                        <h4 className='text-xl font-semibold leading-5 mb-1'>Full Stack Web Developer Bootcamp</h4>
                        <h3 className='text-lg leading-5'>HyperionDev CapeTown, South Africa</h3>
                    </section>
                </div>

                <div className='w-full overflow-hidden rounded-lg shadow-lg flex bg-amber-50 dark:bg-stone-700'>
                    <div className='w-1/3'>
                        <Image 
                            src="/uwcLogo.png"
                            alt="UWC logo"
                            width={300}
                            height={300}
                        />
                    </div>
                    <section className='py-1 px-3 flex flex-col justify-center w-2/3'>
                        <h4 className='text-xl font-semibold leading-5 mb-1'>Bachelor of Science in Computer Science</h4>
                        <h3 className='text-lg leading-5'>University of the Western Cape</h3>
                    </section>
                </div>
            </main>
            <div className='flex justify-center mt-9'>
                <div className='w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg flex bg-amber-50 dark:bg-stone-700'>
                    <div className='w-1/3'>
                        <Image 
                            src="/udsslogo.jpg"
                            alt="Udss logo"
                            width={300}
                            height={300}
                        />
                    </div>
                    <section className='py-1 px-3 flex flex-col justify-center w-2/3'>
                        <h4 className='text-xl font-semibold leading-5 mb-1'>Senior School Certificate (NECO)</h4>
                        <h3 className='text-lg leading-5'>UDSS Uniport, Nigeria</h3>
                    </section>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default Education