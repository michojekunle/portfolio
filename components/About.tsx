import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-14 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
        
        <div
           
          className="relative rounded-full mx-auto border object-cover w-[120px] h-[120px]"                 
        >
          <Image 
              src="https://www.linkpicture.com/q/Snapchat-1769588424.jpg" 
              alt="AMD'S IMAGE"
              layout='fill'
          />
        </div>
    </div>
  )
}

export default About