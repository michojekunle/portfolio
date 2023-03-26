import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {}

const WorkExperience = (props: Props) => {
  return (
    <div className='h-screen flex relative w-full overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center'>
            Experience
        </h3>

        <motion.div 
             initial={{
                x: -200,
                opacity: 0
              }}
              transition={{
                duration: 1.2
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{once: true }}
            className=''
        >
            <ExperienceCard/>
            <ExperienceCard/>
            <ExperienceCard/>
            <ExperienceCard/>
        </motion.div>
    </div>
  )
}

export default WorkExperience