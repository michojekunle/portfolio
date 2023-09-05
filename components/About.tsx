import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import { PageInfo } from '../typings'

type Props = {
  pageInfo: PageInfo;
}

const About = ({ pageInfo }: Props) => {

  return (
    <motion.div
      initial={{ opacity:0 }}
      whileInView={{ opacity:1 }}
      transition={{duration: 1.5}}
      className='flex flex-col relative min-h-screen text-center md:text-left md:flex-row max-w-7xl px-14 py-8 justify-evenly mx-auto items-center'

 >
        <h3 className='uppercase md:tracking-[20px] text-gray-500 text-2xl'>
            About
        </h3>
        <motion.div
          initial={{
            x: -200,
            opacity: 0
          }}
          transition={{
            duration: 1.2
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          viewport={{once: true }}
          className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full md:rounded-lg md:w-64 md:h-92 xl:w-[500px] xl:h-[600px] object-cover overflow-hidden"
        >
          <Image
              src={pageInfo.profilePic}
              alt="AMD'S IMAGE"
              placeholder='blur'
              layout='responsive'
          />
        </motion.div>
        <motion.div
          initial={{
            x: 200,
            opacity: 0
          }}
          transition={{
            delay: 0.2,
            duration: 1.2
          }}
          whileInView={{
            opacity: 1,
            x: 0
          }}
          viewport={{once: true }}
          className='space-y-10 px-0 md:px-10'
        >
          <h4 className='text-2xl md:text-4xl font-semibold'>
            Here is a <span className='underline decoration-[#f7A34a]'>Little</span> Background
          </h4>
          <p className='leading-[24px] md:text-lg sm:text-md text-base'>{pageInfo?.backgroundInformation}</p>
        </motion.div>

    </motion.div>
  )
}

export default About
