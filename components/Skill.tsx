import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    directionLeft?: boolean;
    skill: Skill;
}

const Skill = ({ directionLeft, skill }: Props) => {
  return (
    <motion.div 
        className='group relative flex cursor-pointer'
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
        }}
        transition={{duration:1}}
        whileInView={{opacity:1, x:0}}
    >
        <img
            src={urlFor(skill.image).url()}
            alt='soft work'
            className='cursor-pointer rounded-full object-cover w-20 h-20 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out bg-slate-800'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 duration-300 ease-out'>
            <div className='flex flex-col items-center justify-center group-hover:bg-slate-900 h-20 w-20 md:w-28 md:h-28 rounded-full z-0'>
                <p className='font-medium text-gray-100 text-[10px] text-center  uppercase tracking-widest opacity-100'>{skill.title}</p>
                <p className='font-bold text-gray-100 opacity-100 text-2xl'>{skill.progress}%</p>
            </div>
        </div>
        
    </motion.div>
  )
}

export default Skill