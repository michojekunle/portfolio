import React from 'react'
import { motion } from 'framer-motion';
import image from '../public/favicon.ico';

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article>
        <motion.img 
            initial={{ y: -200, opacity: 0 }}
            transition={{ duration: 1.2}}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{once: true }}
            src ='https://images.unsplash.com/photo-1672923949373-8d078081e8bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60'
            alt='Image Illustration'
            className='w-22 h-22 object-center object-cover rounded-full xl:w-[200px]'
        /> 
    </article>
  )
}

export default ExperienceCard