import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div 
        initial={{
            opacity: 0
        }}
        animate={{
            scale: [1, 2, 2, 3, 1],
            opacity: [0.1, 0.2, 0.4, 0.8, 1.0],
        }}
        transition = {{
            duration: 2.5,
        }}
        className=' relative flex items-center justify-center sm:block hidden'>
        <div className='absolute border border-[#333333] mt-52 animate-ping rounded-full lg:w-[250px] lg:h-[250px] md:w-[200px] md:h-[200px] sm:'/>
        <div className='absolute border border-[#333333] mt-52 animate-pulse opacity-100 md:opacity-0 rounded-full w-[180px] h-[180px] md:w-[280px] md:h-[280px] '/>
        <div className='absolute border border-[#333333] mt-52 animate-ping rounded-full w-[300px] h-[300px] opacity-0  md:opacity-100'/>
        <div className='absolute border border-[#333333] mt-52 animate-ping rounded-full w-[500px] h-[500px] opacity-0 md:opacity-100'/>
        <div className='absolute border border-[#333333] mt-52 animate-pulse rounded-full w-[650px] h-[650px] opacity-0 md:opacity-20'/>
        <div className='absolute border border-[#333333] mt-52 animate-pulse rounded-full w-32 h-32'/>
    </motion.div>

  )
}

export default BackgroundCircles