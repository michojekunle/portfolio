import React from 'react'
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
        <h1>
            <span>{text}</span>
            <Cursor cursorColor="#F7A52A"/>
        </h1>
    </div>
  )
}

export default Hero
