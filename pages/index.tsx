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

import { PageInfo, Social, Experience, Skill, Project } from '../typings';
import { socials, skills, pageInfo, projects, experiences } from'../data';


const Home = () => {
   
  return (
    <div className="bg-[#242424] text-white h-screen overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7A52A]/80">
      <Head>
        <title>{pageInfo.name} || Portfolio</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>

      <Header socials={socials}/>

      {/* Hero Section */}
      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      {/* About Section */}
      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>

      {/* Experience Section */}
      <section id='experience' className=''>
         <WorkExperience experiences={experiences}/>
      </section>

      {/* Skills */}
      <section id='skills' className=''>
        <Skills skills={skills}/>
      </section>

      {/* Projects */}
      <section id='projects' className=''>
        <Projects projects={projects}/>
      </section>

      {/* Contact Me */}
      <section id='contact' className=''>
        <Contact pageInfo={pageInfo} />
      </section>

      <footer className='sticky bottom-5 w-full flex items-center justify-center'>
        <Link href='#hero'>
          <div className="rounded-full w-[45px] h-[45px] flex items-center justify-center animate-pulse  text-[#f7a52a] bg-slate-700/50">
            <i className="fas fa-arrow-up text-[16px] mt-[5px]"></i>
          </div>
        </Link>
      </footer>
    </div>
  )
}

export default Home;