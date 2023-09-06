import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import { PageInfo } from '../typings'

type Props = {
  pageInfo: PageInfo;
}

const About = ({ pageInfo }: Props) => {

  return (
    <div className='w-full'>
      <h3 className='uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-xl md:text-2xl text-center w-full mt-11'>
         About
      </h3>
      <motion.div
        initial={{ opacity:0 }}
        whileInView={{ opacity:1 }}
        transition={{duration: 1.5}}
        className='flex flex-col relative h-screen max-h-[650px] text-center md:text-left md:flex-row max-w-7xl px-14 py-8 justify-evenly mx-auto items-center w-full'
      >
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
            className="relative my-8 w-44 h-44 sm:w-56 sm:h-56 rounded-full md:rounded-lg md:w-64 md:h-92 xl:w-[500px] xl:h-[600px] object-cover overflow-hidden"
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
            className='md:space-y-10 px-4 md:px-10 w-full'
          >
            <h4 className='mt-5 md:mt-0 text-md md:text-4xl font-semibold opacity-75 w-full mb-4'>
              Here is a <span className='underline decoration-[#f7A34a]'>Little</span> Background
            </h4>
            <p className='leading-[25px] md:leading-[35px] md:text-lg sm:text-md text-xs opacity-50 w-full'>{pageInfo?.backgroundInformation}</p>
          </motion.div>
      </motion.div>
    </div>
  )
}

export default About
