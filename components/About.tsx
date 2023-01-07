import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-14 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
        <motion.div
          initial={{
            x: -900,
            opacity: 0
          }}
          transition={{
            duration:  0.5
          }}
          whileInView={{
              x: 0,
              opacity: 1
          }}
          // viewport={{once: true}}
        >
          <img 
            // className='mb-0 md:mb-0 w-56 h-56 rounded-full md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] border-2'
            src="https://unsplash.com/photos/LXI5kqCdEcE"
            alt="AMD'S IMAGE"
          />
        </motion.div>
    </div>
  )
}

export default About