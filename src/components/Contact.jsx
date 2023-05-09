import React from 'react'

const Contact = () => {

  return (
   <main name="Contact" className='w-full bg-gradient-to-b from-black via-black to-gray-900 pt-[100px] pb-[200px]'>
    <section className='px-[20px]  md:px-[60px] lg:px-[100px] flex flex-col '>
    <div>
        <h1 className='inline max-[640px]:text-3xl sm:text-[40px] md:text-[40px] font-bold text-white border-b-4 border-gray-500 '>Contact</h1>
        <p className='text-white mt-10 text-[20px] max-[640px]:text-[19px]'>Submit the form below to get in touch with me</p>
    </div>
        
    <form action="https://getform.io/f/fd9ba6b9-0b73-48b7-99f0-ed1fb275c42b" method="POST" className='flex flex-col mt-10  xl:w-[50%]'>
        <label className='text-blue-500 text-[19px]' htmlFor="username">Name</label>
        <input name="name" id="username" type="text" placeholder="Enter Your Name" className='mt-2 mb-10 text-white border text-[18px] border-slate-500 w-[100%] px-4 py-3 rounded-md outline-none bg-transparent' />

        <label className='text-blue-500 text-[19px]' htmlFor="email">Email</label>
        <input name="email" id="email" type="email" placeholder="Enter Your mail" className='mt-2 mb-10 text-white border text-[18px]  border-slate-500 w-[100%] px-4 py-3 rounded-md outline-none bg-transparent ' />
        
        <label className='text-blue-500 text-[19px]' htmlFor="message">Context</label>
        <textarea name="message" rows="10" id="message" type="email" placeholder="Enter Your message" className='mt-2 mb-10 text-white border text-[18px] border-slate-500 w-[100%] px-4 py-3 rounded-md outline-none bg-transparent'></textarea>
     
        <button className='flex items-center w-[120px] hover:shadow-md hover:shadow-cyan-500 duration-300  py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-md text-white text-[20px] justify-center'>Let's Talk</button>

    </form>
    </section>

   </main>
  )
}

export default Contact