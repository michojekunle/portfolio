import React from 'react';
import { SocialIcon } from 'react-social-icons'  //Impotring Rect-Social-Icons
import { motion } from "framer-motion" // Importing Framer motion
import Link from 'next/link'; //import next/link
import { Social } from '../typings';

type Props = {
  socials: Social[]
}

const Header = ({ socials }: Props) => {
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
        {socials.map((social) => (
          <SocialIcon
            key={social._id} 
            url={social.url}
            fgColor='grey'
            bgColor='transparent'
          />
        ))}
      </motion.div>

      <Link href='#contact'>
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
      </Link>
    </header>
  )
}

export default Header
