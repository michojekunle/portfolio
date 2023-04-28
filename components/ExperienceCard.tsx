import React from 'react'
import { motion } from 'framer-motion';
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  experience: Experience;
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[320px] sm:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#242424] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200'>
        <motion.img 
            initial={{ y: -200, opacity: 0 }}
            transition={{ duration: 1.2}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once: true }}
            src ={urlFor(experience.companyImage).url()}
            alt='Image Illustration'
            className='w-[80px] h-[80px] object-center object-contain rounded-full xl:w-[200px] xl:h-[200px]'
        /> 
        <div className='px-0 md:px-10'>
          <h4 className='text-4xl'>{experience.jobTitle}</h4>
          <p className='font-bold text-2xl mt-1'>{experience.company}</p>
          <div className='flex space-x-2 my-5'>
            {experience.technologies.map(technology => (
              <img 
                key={technology._id}
                className='h-10 w-10'
                src={urlFor(technology.image).url()}
              />
            ))}
          </div> 
          <p className='upercase py-5 text-gray-300'>
            {new Date(experience.dateStarted).toDateString()} - {" "} {experience.isCurrentlyWorkingHere ? "Present" : new Date(experience.dateEnded).toDateString()}
          </p>

          <ul className='list-disc space-y-5 ml-5 text-lg'>
            {experience.points.map((point, i) => (
              <li className='md:w-4/5 sm:w-5/6 w-full' key={i}>{point}</li>
            ))}
          </ul>
        </div>
    </article>
  )
}

export default ExperienceCard