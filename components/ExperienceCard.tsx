import React from 'react'
import { motion } from 'framer-motion';
import image from '../public/favicon.ico';

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#242424] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200'>
        <motion.img 
            initial={{ y: -200, opacity: 0 }}
            transition={{ duration: 1.2}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once: true }}
            src ='https://images.unsplash.com/photo-1672923949373-8d078081e8bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60'
            alt='Image Illustration'
            className='w-22 h-22 object-center object-cover rounded-full xl:w-[200px] xl:h-[200px]'
        /> 
        <div className='px-0 md:px-10'>
          <h4 className='text-4xl'>CEO PapaFam</h4>
          <p className='font-bold text-2xl mt-1'>PapaFam</p>
          <div className='flex space-x-2 my-5'>
            {/*Tech Used  */}
            {/*Tech Used  */}
            {/*Tech Used  */}
            {/*Tech Used  */}
          </div> 
          <p className='upercase py-5 text-gray-300'>Started Work ... - Ended ...</p>
          <ul className='list-disc space-y-5 ml-5 text-lg'>
            <li>Summary Points Summary Points Summary Points Summary Points</li>
            <li>Summary Points Summary Points Summary Points Summary Points</li>
            <li>Summary Points Summary Points Summary Points Summary Points</li>
            <li>Summary Points Summary Points Summary Points Summary Points</li>
            <li>Summary Points Summary Points Summary Points Summary Points</li>
          </ul>
        </div>
    </article>
  )
}

export default ExperienceCard