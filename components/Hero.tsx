import React from 'react'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import fvc from '../public/favicon.ico'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {
    pageInfo: PageInfo;
}

const Hero = ({ pageInfo }: Props) => {
    const [text, count] = useTypewriter({
        words: [
            `Hi, The Name's ${pageInfo?.name}`,
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
            src={urlFor(pageInfo.heroImage).url()}
            alt="AMD'S IMAGE"
            className="relative rounded-full mx-auto object-cover w-36 h-36"        
        />

        <div>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]' >{pageInfo.role}</h2>
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
