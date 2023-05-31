import React from 'react'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import { PageInfo } from '../typings'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import Image from 'next/image'

type Props = {
    pageInfo: PageInfo;
}

const Hero = ({ pageInfo }: Props) => {
    const [text, count] = useTypewriter({
        words: [
            `Hi, The Name's ${pageInfo?.name}`,
            "Guy-who-loves-Smiles.tsx",
            "<ButLovesToCodeMore />"
        ],
        loop: true,
        delaySpeed: 2000
    })
  return (
    <div className='min-h-screen flex flex-col justify-center items-center space-y-5 md:space-y-8 overflow-hidden text-center'>
        <BackgroundCircles/>
        <div className="relative w-32 h-32 md:mt-0 md:w-36 md:h-36">
            <Image
                src={pageInfo.heroImage}
                alt="AMD'S IMAGE"
                className="relative rounded-full mx-auto object-cover"
                layout="fill"
            />
        </div>

        <div className='text-center'>
            <h2 className='text-[9px] sm:text-xs md:text-sm uppercase text-gray-500 pb-2 tracking-[8px] md:tracking-[15px] leading-8' >{pageInfo.role}</h2>
            <h1 className="text-2xl sm:text-4xl z-10 md:text-5xl lg:text-6xl font-semibold px-10 text-center md:max-w-[550px]">
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
