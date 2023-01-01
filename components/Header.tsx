import React from 'react';
import { SocialIcon } from 'react-social-icons'



const Header = () => {
  return (
    <header>
      {/* Social Icons */}
      <div>
        <SocialIcon 
          url='https://github.com/michojekunle'
          // fgColor='grey'
          // bgColor='yellow'
        />
        <SocialIcon 
          url='https://www.instagram.com/amd_mich/'
          // fgColor='grey'
          // bgColor='yellow'
        />
        <SocialIcon 
          url='https://twitter.com/MichaelOjekunl2'
          // fgColor='grey'
          // bgColor='yellow'
        />
        <SocialIcon 
          url='https://www.linkedin.com/in/michael-ojekunle-651a8a232/'
          // fgColor='grey'
          // bgColor='yellow'
        />
      </div>
    </header>
  )
}

export default Header
