import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import About from '../components/About'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

import { socials, skills, pageInfo, projects, experiences } from'../data';


const Home = () => {
  return (
    <div className="bg-[#242424] text-white h-screen snap snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-thin scrollbar-rounded-[12px] scrollbar-track-gray-400/20 scrollbar-thumb-[#F7A52A]/80" style={{scrollBehavior: 'smooth'}}>
      
      {/* Header */}
      <Header socials={socials}/>

      {/* Hero Section */}
      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      {/* About Section */}
      <section id='about' className='snap-start'>
        <About pageInfo={pageInfo}/>
      </section>

      {/* Experience Section */}
      <section id='experience' className='snap-center'>
         <WorkExperience experiences={experiences}/>
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills skills={skills}/>
      </section>

      {/* Projects */}
      <section id='projects' className='snap-center'>
        <Projects projects={projects}/>
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <Contact pageInfo={pageInfo} />
      </section>

      <Link href='#hero'>
        <div className="sticky bottom-5 cursor-pointer left-2/4 -translate-x-2/4 rounded-full w-[45px] h-[45px] flex items-center justify-center animate-pulse  text-[#f7a52a] bg-slate-700/50">
          <i className="fas fa-arrow-up text-[16px] mt-[5px]"></i>
        </div>
      </Link>
    </div>
  )
}

export default Home;
