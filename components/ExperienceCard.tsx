import React from 'react'
import { motion } from 'framer-motion';
import { Experience } from '../typings';
import Image from 'next/image';

type Props = {
  experience: Experience;
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className='flex flex-col rounded-md md:rounded-lg items-center space-y-3 md:space-y-7 flex-shrink-0 w-[280px] xs:w-[320px] sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#242424] p-3 md:p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200'>
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          transition={{ duration: 1.2}}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{once: true }}
          className='relative w-[40px] h-[40px] md:w-[80px] md:h-[80px] flex items-center justify-center rounded-full xl:w-[200px] xl:h-[200px]'
        >
          <Image
              src ={experience.companyImage}
              alt='Image Illustration'
              placeholder='blur'
          />
        </motion.div>
        <div className='px-0 md:px-10'>
          <h4 className='text-2xl md:text-4xl'>{experience.jobTitle}</h4>
          <p className='font-bold text-lg md:text-2xl mt-1'>{experience.company}</p>
          <div className='flex space-x-5 my-5'>
            {experience.technologies.map((technology, i) => (
              <Image
                key={i}
                className='h-10 w-10'
                src={technology.image}
                placeholder='blur'
                width={28}
                height={28}
              />
            ))}
          </div>
          <p className='uppercase py-5 text-gray-300'>
            {new Date(experience.dateStarted).toDateString()} - {" "} {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
          </p>

          <ul className='list-disc space-y-5 ml-5 text-md md:text-lg'>
            {experience.points.map((point, i) => (
              <li className='md:w-4/5 sm:w-5/6 w-full' key={i}>{point}</li>
            ))}
          </ul>
        </div>
    </article>
  )
}

export default ExperienceCard
