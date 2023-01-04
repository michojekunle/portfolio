import React from 'react'
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

const Hero = (props: Props) => {
    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Michael Ojekunle",
            "Guy-who-loves-Cofee.tsx",
            "<ButLovesToCodeMore />"
        ],
        loop: true,
        delaySpeed: 2000
    })
  return (
    <div className='h-screen flex flex-col justify-center items-center space-y-8 overflow-hidden text-center'>
        <BackgroundCircles/>
        <Image 
            className="relative rounded-full mx-auto border"
            src="https://avatars.githubusercontent.com/u/90222287?v=4"
            alt="AMD'S IMAGE"
            width="32"
            height="32"
            layout='responsive'
        />

        <img 
            className="relative rounded-full mx-auto h-32 w-32 object-cover"
            src="https://lh3.googleusercontent.com/a/AEdFTp6XqeUUuwvuJAjAF9m7j0EJ4un74cbbkOY0Vu0zoA=s96-c-rg-br100" 
            alt="AMD'S IMAGE" 
        />
        <div>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]' >Software Engineer</h2>
            <h1>
                <span>{text}</span>
                <Cursor cursorColor="#F7A52A"/>
            </h1>
        </div>
    </div>
  )
}

export default Hero
