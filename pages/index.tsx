import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import About from '../components/About'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'
import WorkExperience from '../components/WorkExperience'

const Home: NextPage = () => {
   
  return (
    <div className="bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-scroll ">
      <Head>
        <title>AMD || Portfolio</title>
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


      {/* Projects */}


      {/* Contact Me */}

    </div>
  )
}

export default Home
