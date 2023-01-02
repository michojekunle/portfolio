import React from 'react'

type Props = {}

const BackgroundCircles = (props: Props) => {
  return (
    <div className=' relative flex items-center justify-center'>
        <div className='absolute border [#333333] mt-52 animate-ping rounded-full w-[200px] h-[200px]'/>
        <div className='absolute border border-[#333333] mt-52 animate-ping rounded-full w-[300px] h-[300px]'/>
        <div className='absolute border border-[#333333] mt-52 animate-ping rounded-full w-[500px] h-[500px]'/>
        <div className='absolute border border-[#F7A84A] mt-52 animate-pulse rounded-full w-[650px] h-[650px] opacity-20'/>
        <div className='absolute border border-[#333333] mt-52 rounded-full w-[100px] h-[100px]'/>
    </div>

  )
}

export default BackgroundCircles