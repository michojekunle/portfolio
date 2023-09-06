import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    directionLeft?: boolean;
    skill: Skill;
}

const Skill = ({ directionLeft, skill }: Props) => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        if (window.innerWidth < 700) {
            setIsMobile(true);
        }
    }, []);
  return (
    <motion.div 
        className='group relative flex cursor-pointer'
        initial={{
            x: isMobile ? 0 : (directionLeft ? -200 : 200),
            opacity: isMobile ? 1 : 0
        }}
        transition={{duration:1}}
        whileInView={{opacity:1, x:0}}
    >
        <div className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24'>
            <Image
                src={skill.image}
                alt='soft work'
                placeholder='blur'
                className='cursor-pointer rounded-full object-fill w-16 h-16 md:w-20 md:h-20 filter group-hover:grayscale transition duration-300 ease-in-out bg-slate-800'
            />
        </div>

        <div className='absolute opacity-0 group-hover:opacity-80 duration-300 ease-out'>
            <div className='flex flex-col items-center justify-center group-hover:bg-slate-900 h-16 w-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full z-0'>
                <p className='font-medium text-gray-100 md:text-[9px] text-[7px] text-center uppercase tracking-widest opacity-100 w-full'>{skill.title}</p>
                <p className='font-bold text-gray-100 opacity-100 text-2xl'>{skill.progress}%</p>
            </div>
        </div>
    </motion.div>
  )
}

export default Skill
