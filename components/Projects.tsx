import React from 'react'

type Props = {}

const Projects = (props: Props) => {
  return (
    <div className='min-h-screen relative'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center'>
        Projects
      </h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden '>

      </div>
      <div className="w-full absolute top-[30px]bg-[#F7ABBA]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  )
}

export default Projects