import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
   <>
      <Head>
        
      </Head>
    <Component {...pageProps} />
    <Analytics/>
   </> 
  )
}

export default MyApp
