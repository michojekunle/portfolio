import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';

type Props = {
  experiences: Experience[]
}

const WorkExperience = ({ experiences }: Props) => {
  return (
    <div className='w-full'>
      <h3 className='uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-2xl text-center'>
          Experience
      </h3>
      <div className='min-h-screen flex relative w-full overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center '>

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
              className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-rounded-[12px] scrollbar-track-gray-400/20 scrollbar-thumb-[#F7A52A]/80'
          >
              {experiences.map((experience, i) => <ExperienceCard key={i} experience={experience}/>)}
          </motion.div>
      </div>
    </div>
  )
}

export default WorkExperience
