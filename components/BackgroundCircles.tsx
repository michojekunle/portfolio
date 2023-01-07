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
        className=' relative flex items-center justify-center'>
        <div className='absolute border border-[#333333] mt-52 animate-ping rounded-full w-[200px] h-[200px]'/>
        <div className='absolute border border-[#333333] mt-52 animate-ping rounded-full w-[300px] h-[300px]'/>
        <div className='absolute border border-[#333333] mt-52 animate-ping rounded-full w-[500px] h-[500px]'/>
        <div className='absolute border border-[#333333] mt-52 animate-pulse rounded-full w-[650px] h-[650px] opacity-20'/>
        <div className='absolute border border-[#333333] mt-52 rounded-full w-32 h-32'/>
    </motion.div>

  )
}

export default BackgroundCircles