import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div className='relative flex flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 items-center'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center'>
        skills
      </h3>
      <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm text-center'>Hover over a skill for current proficiency</h3>    
      <div className='grid grid-cols-4 gap-5'>
        <Skill directionLeft={false}/>
        <Skill directionLeft={false}/>
        <Skill directionLeft={false}/>
        <Skill directionLeft={false}/>
        <Skill directionLeft={false}/>
        <Skill directionLeft={false}/>
        <Skill directionLeft={false}/>
        <Skill directionLeft={false}/>
        <Skill directionLeft={true}/>
        <Skill directionLeft={true}/>
        <Skill directionLeft={true}/>
        <Skill directionLeft={true}/>
        <Skill directionLeft={true}/>
        <Skill directionLeft={true}/>
        <Skill directionLeft={true}/>
        <Skill directionLeft={true}/>   
      </div>
    </motion.div>
  )
}

export default Skills