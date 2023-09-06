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
      <h3 className='uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-2xl text-center mt-11'>
        skills
      </h3>
      <h3 className='mt-5 uppercase tracking-[3px] text-gray-500 text-sm text-center'>Hover over a skill for current proficiency</h3>    
      <motion.div className='mt-11 relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 items-center'>
        <div className='flex flex-wrap gap-3 md:gap-5 mt-11 w-full md:w-[400px]'>
          {skills.slice(0, skills.length/2).map((skill, i) => (
            <Skill key={i} skill={skill}/>
          ))}

          {skills.slice(skills.length/2, skills.length).map((skill, i) => (
            <Skill key={i} skill={skill} directionLeft/>
          ))} 
        </div>
      </motion.div>
    </div>
  )
}

export default Skills
