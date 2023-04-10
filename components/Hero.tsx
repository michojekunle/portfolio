import React from 'react'
import Image from 'next/image'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import fvc from '../public/favicon.ico'

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
        <img
            src="https://lh3.googleusercontent.com/a/AEdFTp6XqeUUuwvuJAjAF9m7j0EJ4un74cbbkOY0Vu0zoA=s96-c-rg-br100" 
            alt="AMD'S IMAGE"
            className="relative rounded-full mx-auto object-cover w-32 h-32"        
        />

        <div>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]' >Software Engineer</h2>
            <h1 className="text-5xl lg:text-6xl font-semibold px-10 text-center max-w-[550px]">
                <span className="mt-3">{text}</span>
                <Cursor cursorColor="#F7A52A"/>
            </h1>
        </div>
        <div className="pt-5 z-10">
            <Link href='#about'><button className='heroButtons'>About</button></Link>
            <Link href='#experience'><button className='heroButtons'>Experience</button></Link>
            <Link href='#skills'><button className='heroButtons'>Skills</button></Link>
            <Link href='#projects'><button className='heroButtons'>Projects</button></Link>
        </div>
    </div>
  )
}

export default Hero
