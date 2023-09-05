import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';
import  { PageInfo } from '../typings';

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string
};

type Props = {
  pageInfo: PageInfo;
}

function Contact({ pageInfo }: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:michojekunle1@gmail.com?subject=${formData.subject}&body=Hi my Name is ${formData.name}, ${formData.message} [${formData.email}]`
  }

  return (
    <div className='min-h-screen relative flex flex-col text-center md:text-left max-w-7xl w-full md:flex-row px-10 justify-evenly mx-auto items-center'>
        <h3 className=' uppercase md:tracking-[20px] text-gray-500 text-2xl text-center'>
          contact
        </h3>
        <div className="flex flex-col space-y-6 md:space-y-10">
          <h4 className='text-lg sm:text-xl md:text-4xl font-semibold text-center '>
            I have got just what you need&nbsp;
            <span className='underline decoration-[#f7A52a]/50 '>Lets Talk</span>
          </h4>
          <div className='flex flex-col space-y-7 md:space-y-10 items-center justify-center'>
            <div className='flex items-center space-x-5'>
              <PhoneIcon className='text-[#f7A52a] w-5 h-5 md:h-7 md:w-7 animate-pulse'/>
              <p className='text-md sm:text-lg md:text-2xl'>{pageInfo.phoneNumber}</p>
            </div>

            <div className='flex items-center space-x-5'>
              <EnvelopeIcon className='text-[#f7A52a] w-5 h-5 md:h-7 md:w-7 animate-pulse'/>
              <p className='text-md sm:text-lg md:text-2xl'>{pageInfo.email}</p>
            </div>

            <div className='flex items-center space-x-5'>
              <MapPinIcon className='text-[#f7A52a] w-5 h-5 md:h-7 md:w-7 animate-pulse'/>
              <p className='text-md sm:text-lg md:text-2xl'>{pageInfo.address}</p>
            </div>
          </div>
          <form className='flex flex-col space-y-2 w-fit mx-auto' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex space-x-2 '>
              <input {...register('name')} className='contactInput' placeholder='Name' type="text" />
              <input {...register('email')} className='contactInput' placeholder='Email' type="email" />
            </div>
            <input {...register('subject')} className='contactInput' placeholder='Subject' type="text" />
            <textarea {...register('message')} className='contactInput' placeholder='Message'/>
            <button type='submit' className='text-md md:text-lg py-2 px-4 md:py-4 md:px-8 rounded-md text-black font-bold bg-[#f7A52a]'>Submit</button>
          </form>
        </div>
    </div>
  )
}

export default Contact