import React from 'react';
import { SocialIcon } from 'react-social-icons'

type Props = {}

const Header = () => {
  return (
    <header className='flex flex-row items-center justify-between bg-[#eee] p-[20px]'>
      {/* Social Icons */}
      <div>
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
      </div>
      <div className='flex flex-row cursor-pointer items-center'>
        <SocialIcon 
          className='cursor-pointer'
          network='email'
          fgColor='grey'
          bgColor='transparent'
        />
          <p className='uppercase sm:flex hidden text-sm text-gray-100'>Get In Touch</p>
      </div>
    </header>
  )
}

export default Header
