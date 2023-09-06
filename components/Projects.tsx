import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import  { motion } from 'framer-motion';
import { Project } from '../typings';


type Props = {
  projects: Project[];
}

const Projects = ({ projects }: Props) => {

  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className='h-screen relative flex flex-col items-center justify-center'
    >
      <h3 className='uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-2xl text-center'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-rounded-[12px] scrollbar-track-gray-400/20 scrollbar-thumb-[#F7A52A]/80'>
        {projects.map((project, idx) => (
          <div key={idx} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-11 md:p-20 lg:p-44 h-screen'>
            <motion.div
              initial={{
                y: -300,
                opacity: 0
              }} 
              transition={{duration: 1.5}}
              whileInView={{
                y: 0,
                opacity: 1
              }}
              viewport={{once: true}}
              className="max-h-[350px] md:max-h-[400px] w-[300px] md:w-[480px] lg:w-[580px] cursor-pointer"
              onClick={() => window.open(`${project.linkToBuild}`)}
            >
              <Image
                src={project.image}
                alt='image two'
                placeholder='blur'
              />
            </motion.div>
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-xl sm:text-2xl md:text-4xl font-semibold w-full'>
                <a href={project.linkToBuild} className='underline decoration-[#F7A52A]/50 w-full'>Case Study {idx + 1} of {projects.length}</a>: {project?.title} 
              </h4>
              <div className='flex items-center space-x-2 justify-center'>
                {project?.technologies.map((technology, i) => <Image className='h-10 w-10' key={i} src={technology?.image} alt="technology" placeholder='blur' layout="responsive" width={28} height={28}/>)}
              </div>

              <p className='text-md opacity-75 md:text-lg text-center md:text-left'>{project?.summary}</p>
            </div>

          </div>
        ))}
      </div>
      <div className="w-full absolute top-50 bg-[#F7A52A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects
