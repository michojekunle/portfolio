import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft: boolean
}

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className='group  relative flex cursor-pointer'>
        <motion.img
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0
            }}
            transition={{duration:1}}
            whileInView={{opacity:1, x:0}}
            src="https://images.unsplash.com/photo-1672923949373-8d078081e8bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
            alt='soft work'
            className='cursor-pointer rounded-full border border-gray-300 object-cover w-24 h-24 md:w-32 md:h-32 filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 duration-300 ease-out'>
            <div className='flex items-center justify-center group-hover:bg-white h-24 w-24 md:w-32 md:h-32 rounded-full z-0'>
                <p className='font-bold text-black opacity-100 text-3xl'>100%</p>
            </div>
        </div>
        
    </div>
  )
}

export default Skill