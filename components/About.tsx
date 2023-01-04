import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-14 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
        <motion.img 
           initial={{
               x: -200
           }}
           whileInView={{
               x: 0
           }}
           viewport={{once: true}}
           src="https://www.linkpicture.com/q/Snapchat-1769588424.jpg"
           alt="AMD'S IMAGE" 
        />
    </div>
  )
}

export default About