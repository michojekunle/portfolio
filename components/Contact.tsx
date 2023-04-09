import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
  name: string,
  email: string,
  subject: string,
  message: string
};

type Props = {}

function Contact({}: Props) {
  const { 
    register,
    handleSubmit 
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:michojekunle1@gmail.com?subject=${formData.subject}&body=Hi my Name is ${formData.name}, ${formData.message} [${formData.email}]`
  }

  return (
    <div className='min-h-screen relative flex flex-col text-center md:text-left max-w-7xl md:flex-row px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center'>
          contact
        </h3>
        <div className="flex flex-col space-y-10">
          <h4 className='text-4xl font-semibold text-center '>
            I havs got just what you need
            <span className='underline decoration-[#F7ABBA]/50 '>Lets Talk</span>
          </h4>
          <div className='space-y-10'>
            <div className='flex items-center space-x-5'>
              <PhoneIcon className='text-[#F7ABBA] h-7 w-7 animate-pulse'/>
              <p className='text-2xl'>+234 904 515 6850 </p>
            </div>

            <div className='flex items-center space-x-5'>
              <EnvelopeIcon className='text-[#F7ABBA] h-7 w-7 animate-pulse'/>
              <p className='text-2xl'>michojekunle1@gmail.com</p>
            </div>

            <div className='flex items-center space-x-5'>
              <MapPinIcon className='text-[#F7ABBA] h-7 w-7 animate-pulse'/>
              <p className='text-2xl'>Yaba, Lagos Nigeria.</p>
            </div>
          </div>
          <form className='flex flex-col space-y-2 w-fit mx-auto' onSubmit={handleSubmit(onSubmit)}>
            <div className='flex space-x-2'>
              <input {...register('name')} className='contactInput' placeholder='Name' type="text" />
              <input {...register('email')} className='contactInput' placeholder='Email' type="email" />
            </div>
            <input {...register('subject')} className='contactInput' placeholder='Subject' type="text" />
            <textarea {...register('message')} placeholder='Message'/>
            <button type='submit' className='text-lg py-5 px-10 rounded-md text-black font-bold bg-[#F7ABBA]'>Submit</button>
          </form>
        </div>
    </div>
  )
}

export default Contact