import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'
import { Skill as SkillType } from '../typings';

type Props = {
  skills: SkillType[];
}

const Skills = ({ skills }: Props) => {
  return (
    <motion.div className='relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 items-center'>
      <h3 className='absolute z-40 top-10 uppercase tracking-[20px] text-gray-500 text-2xl text-center'>
        skills
      </h3>
      <h3 className='absolute top-20 uppercase tracking-[3px] text-gray-500 text-sm text-center'>Hover over a skill for current proficiency</h3>    
      <div className='flex flex-wrap gap-5 mt-36 w-full sm:max-w-[320px] md:max-w-[400px]'>
        {skills.slice(0, skills.length/2).map((skill, i) => (
          <Skill key={i} skill={skill}/>
        ))}

        {skills.slice(skills.length/2, skills.length).map((skill, i) => (
          <Skill key={i} skill={skill} directionLeft/>
        ))} 
      </div>
    </motion.div>
  )
}

export default Skills
