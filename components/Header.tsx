import React from 'react';
import { SocialIcon } from 'react-social-icons'  //Impotring Rect-Social-Icons
import { motion } from "framer-motion" // Importing Framer motion

type Props = {}

const Header = () => {
  return (
    <header className='sticky top-0 flex flex-row items-start justify-between p-5 mx-auto max-w-7xl xl:item-center z-20'>
      {/* Social Icons */}
      <motion.div 
        initial ={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x:0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
      >
        <SocialIcon 
          url='https://github.com/michojekunle'
          fgColor='grey'
          bgColor='transparent'
        />
        <SocialIcon 
          url='https://www.instagram.com/amd_mich/'
          fgColor='grey'
          bgColor='transparent'
        />
        <SocialIcon 
          url='https://twitter.com/MichaelOjekunl2'
          fgColor='grey'
          bgColor='transparent'
        />
        <SocialIcon 
          url='https://www.linkedin.com/in/michael-ojekunle-651a8a232/'
          fgColor='grey'
          bgColor='transparent'
        />
      </motion.div>
      <motion.div 
        className='flex flex-row cursor-pointer items-center'
        initial ={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x:0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
      >
        <SocialIcon 
          className='cursor-pointer'
          network='email'
          fgColor='grey'
          bgColor='transparent'
        />
          <p className='uppercase sm:flex hidden text-sm text-gray-100'>Get In Touch</p>
      </motion.div>
    </header>
  )
}

export default Header
