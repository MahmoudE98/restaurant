import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-[1240px] mx-auto p-8 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.091215244164!2d-122.41941548468174!3d37.774929779759614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809cabbc3f7b%3A0xc123456789abcdef!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
          width="100%"
          height="100%"
          className="border-0 rounded-xl h-96 md:h-full"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className='flex-1'>
        <h1 className='text-xl font-bold mb-2 text-cyan-500'>Contact Us</h1>
        <form className='flex flex-col gap-4'>
            <input 
            type="text"
            placeholder='Name'
            className='rounded-2xl p-2 border-2 border-gray-300'>

            </input>
            <input 
            type="text"
            placeholder='Email'
            className='rounded-2xl p-2 border-2 border-gray-300'>

            </input>
            <textarea
            placeholder='Message'
            className='rounded-2xl p-2 border-2 border-gray-300 h-32'>

            </textarea>
            <button className='border-red-50 bg-amber-600 p-2 rounded-full font-semibold text-white w-full'>Message Us</button>
        </form>
      </div>
    </div>
  )
}

export default Contact