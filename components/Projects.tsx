import React from 'react'
import  { motion } from 'framer-motion';

type Props = {}

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5]; 
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className='h-screen relative flex items-center justify-center'
    >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7A52A]/80'>
        {projects.map((project, idx) => (
          <div key={project} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-444 h-screen'>
            <motion.img
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
              src="https://images.unsplash.com/photo-1672923949373-8d078081e8bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" 
              alt='image two'
            />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold'>
                <span className='underline decoration-[#F7A52A]/50 '>Case Study {idx + 1} of {projects.length}</span>: UPS CLONE 
              </h4>
              <p className='text-lg text-center md:text-left'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque 
                dicta quis cupiditate. Voluptatibus fugiat eum quo aperiam asperiores 
                sint pariatur accusantium perspiciatis dicta, unde alias praesentium 
                laborum. Ea.
              </p>
            </div>

          </div>
        ))}
      </div>
      <div className="w-full absolute top-50 bg-[#F7A52A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects