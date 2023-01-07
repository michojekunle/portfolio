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
        
        <div className="relative rounded-full mx-auto object-cover w-[120px] h-[120px] overflow-hidden">
          <Image 
              src="https://images.unsplash.com/photo-1672923949373-8d078081e8bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" 
              alt="AMD'S IMAGE"
              layout='fill'
          />
        </div>
        <div>
          <h4 className='text-4xl font-semibold'>Here is a Little Background</h4>
        </div>

    </div>
  )
}

export default About