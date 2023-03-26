import Head from 'next/head';
import React from 'react';

type Props = {}

const cv = (props: Props) => {
  return (
    <div className='bg-white p-10 max-w-[2000px] mx-auto'>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link href="https://fonts.googleapis.com/css2?family=Alkatra:wght@400;500;600;700&family=DM+Sans&family=Libre+Franklin&family=Poppins&display=swap" rel="stylesheet"/>
            <title>AMD || Resume</title>
        </Head>
        <header className="h-[300px] w-full bg-[#00A390] flex flex-col items-center justify-center gap-[40px]" >
            <h1 className='text-white text-lg uppercase text-[52px] tracking-widest'>Michael Ojekunle</h1>
            <div className='w-[150px] bg-white rounded-md h-[0.5px]'></div>
            <h2 className='tracking-[5px] text-[24px] font-bold text-white uppercase' >FRONT END DEVELOPER</h2>
        </header>
        <section className="flex flex-row items-start w-full">
            <div className="el p-10 flex-1 font['Poppins']">
                <div className="experience">
                    <h2 className="text-[#00A390] font-medium text-[32px] tracking-widest">EXPERIENCE</h2>
                    <div className="mt-8">
                        <div className="">
                            <h4 className='capitalize text-black font-medium text-[26px]'>web developer</h4>
                            <p className='text-[26px]'> <span className='text-[#00A390]'>February 2023 - Present </span> | Binatec Agency, Lagos </p>                                
                        </div>
                        <ul className='px-[60px] py-[20px] list-disc'>
                            <li className="text-[24px] ">Demonstrated Ability to manage multiple tasks while remaining adaptable and flexble.</li>
                            <li className="text-[24px] ">Committed to delivering excellent customer service while working in a fast paced environment.</li>
                            <li className="text-[24px] ">Collaborated with web content editors to facilitate website maintenance.</li>
                            <li className="text-[24px] ">Leveraging Mastery of Web Technologies such as HTML, CSS and JavaScript to build top quality code fro diverse projects.</li>
                        </ul>
                    </div>
                    <div className="mt-8">
                        <div className="">
                            <h4 className='capitalize text-black font-medium text-[26px]'>front end developer</h4>
                            <p className='text-[26px]'> <span className='text-[#00A390]'>August 2022 - October 2022 </span> | Cryptware Systems, Lagos </p>                                
                        </div>
                        <ul className='px-[60px] py-[20px] list-disc'>
                            <li className="text-[24px] ">Translated flat designs files to clean, accessible and interative user experiences.</li>
                            <li className="text-[24px] ">Collaborated with senior developers and designers to implement UI/UX designs.</li>
                            <li className="text-[24px] ">Participated in team meetings and contributed to project planning and ideation.</li>
                            <li className="text-[24px] ">Completed assigned taks tasks in a timely and efficient manner.</li>
                        </ul>
                    </div>
                    <div className="mt-8">
                        <div className="">
                            <h4 className='capitalize text-black font-medium text-[26px]'>Full Stack Web Developer trainee</h4>
                            <p className='text-[26px]'> <span className='text-[#00A390]'>May 2022 - August 2022 </span> | Catalyst Business Consult, Lagos </p>                                
                        </div>
                        <ul className='px-[60px] py-[20px] list-disc'>
                            <li className="text-[24px] ">Wrote supporting code for web applications and websites.</li>
                            <li className="text-[24px] ">Developed Databases that supported Web appliations and Web sites.</li>
                            <li className="text-[24px] ">Maintained understanding of current web technologies and programming practices through continuing education and participation inprofessional conferences and worskhops.</li>
                        </ul>
                    </div>
                </div>
                <div className="languages">
                    <h2 className='text-[#00A390] font-medium text-[32px] tracking-widest uppercase'>Languages</h2>
                    <ul className='px-[60px] py-[20px] list-disc'>
                        <li className="text-[24px] capitalize">
                            <p className="font-bold">English</p>       
                            <p className='font-medium text-[#00A390]'>Fluent</p>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="ccs w-[40%] bg-[#eee] h-[90vh] p-10 font-['Alkatra']">
                <div className="contact">
                    <h2 className='text-[#00A390] font-medium text-[32px] tracking-widest uppercase'>Contact</h2>
                    <div>
                        <div className='flex gap-4 items-center mt-11'>
                            <p className='flex text-[18px] items-center justiy-center p-4 rounded-full bg-gray-300 text-[#00A390]'><i className="fas fa-phone"></i></p>
                            <p className='text-[26px]'>234-904-515-6850</p>
                        </div>
                        <div className='flex gap-4 items-center mt-11'>
                            <p className='flex text-[18px] items-center justiy-center p-4 rounded-full bg-gray-300 text-[#00A390]'><i className="fas fa-envelope"></i></p>
                            <p className='text-[26px]'>michojekunle1@gmail.com</p>
                        </div>
                        <div className='flex gap-4 items-center mt-11'>
                            <p className='flex text-[18px] items-center justiy-center p-4 rounded-full bg-gray-300 text-[#00A390]'><i className="fas fa-map-marker"></i></p>
                            <p className='text-[26px]'>Lagos, Nigeria</p>
                        </div>

                    </div>
                </div>
                <div className="career-obj mt-[60px]">
                    <h2 className='text-[#00A390] font-medium text-[32px] tracking-widest uppercase'>Career objective</h2>
                    <p className='text-[30px] mt-8'>
                        A driven and detail-oriented individual with a desire to use analytical and problem-solving skills
                        to meet goals. Highly organized, with a drive to exceed expectations, Ability to analyze data, develop
                        strategies, and provide solutions to complex problems. Seeking to leverage skills and knowledge to 
                        contribute to team success.
                    </p>
                </div>
                <div className="skills mt-[60px]">
                    <h2 className='text-[#00A390] font-medium text-[32px] tracking-widest uppercase'>skills</h2>
                    <ul className='px-[60px] py-[20px] list-disc'>
                        <li className="text-[28px] my-[10px]">Web Technologies: ReactJS, NextJS</li>
                        <li className="text-[28px] my-[10px]">Software Best Practices</li>
                        <li className="text-[28px] my-[10px]">Usability Understanding</li>
                        <li className="text-[28px] my-[10px]">System Maintenance</li>
                        <li className="text-[28px] my-[10px]">Web Architectture</li>
                        <li className="text-[28px] my-[10px]">Team Collaboration</li>
                        <li className="text-[28px] my-[10px]">Verbal and Written Communication</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
  )
}

export default cv;