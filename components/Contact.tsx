import React from 'react'

type Props = {}

function Contact({}: Props) {
  return (
    <div className='min-h-screen relative flex flex-col text-center md:text-left max-w-7xl md:flex-row px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center'>
          contact
        </h3>
        <div className="flex flex-col space-y-10">
          <h4 className='text-4xl font-semibold text-center '>
            I havs got just what you need
            <span className='underline decoration-[#F7ABBA]/50 '>Let's Talk</span>
          </h4>
          <div className=''>

          </div>
        </div>
    </div>
  )
}

export default Contact