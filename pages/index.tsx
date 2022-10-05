import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>AMD || Portfolio</title>
        <meta name="description" content="A personal Website for AMD" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/michojekunle" target="_blank" rel="noreferrer"> Michael </a> Portfolio!
        </h1>
      </main>
    </div>
  )
}

export default Home
