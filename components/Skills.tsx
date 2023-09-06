import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { Skill as SkillType } from '../typings';

type Props = {
  skills: SkillType[];
}

const Skills = ({ skills }: Props) => {
  return (
    <div className='w-full'>
      <h3 className='uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl text-center mt-11'>
        skills
      </h3>
      <h3 className='mt-5 mb-11 uppercase tracking-[3px] text-gray-500 text-sm text-center'>Hover over a skill for current proficiency</h3>    
      <motion.div className='relative flex flex-col text-center md:text-left xl:flex-row w-full md:max-w-[2000px] xl:px-10 py-11 justify-center xl:space-y-0 items-center'>
        <div className='flex flex-wrap justify-center items-center gap-3 md:gap-5 mt-11 px-4 w-full md:w-[600px]'>
          {skills.map((skill, i) => (
            <Skill key={i} skill={skill}/>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

export default Skills
