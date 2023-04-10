import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import About from '../components/About'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'


const Home: NextPage = () => {
   
  return (
    <div className="bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7A52A]/80">
      <Head>
        <title>AMD || Portfolio</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>

      <Header/>

      {/* Hero Section */}
      <section id='hero' className='snap-start'>
        <Hero/>
      </section>


      {/* About Section */}
      <section id='about' className='snap-center'>
        <About/>
      </section>


      {/* Experience Section */}
      <section id='experience' className='snap-center'>
         <WorkExperience />
      </section>

      {/* Skills */}
      <section id='skills' className='snap-start'>
        <Skills/>
      </section>

      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects/>
      </section>

      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <Contact/>
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full  flex items-center justify-center'>
          <div className="rounded-full w-28 h-28 flex items-center justify-center animate-pulse  text-[#f7a52a] bg-slate-700/50">
            <i className="fas fa-arrow-up text-4xl"></i>
          </div>
        </footer>
      </Link>

    </div>
  )
}

export default Home
