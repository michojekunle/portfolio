import '../styles/globals.css'
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
   <>
      <Head>
        <title>Michael Ojekunle || @midev</title>
        <meta name="description" content='Michael Ojekunle || Full Stack Developer || Frontend Engineer' />
        <meta property="og:title" content='Michael Ojekunle' />
        <meta property="og:description" content='Learn more about Michael Ojekunle || Full Stack Developer || Frontend Engineer' />
        <meta property="og:url" content='https://midev.vercel.app' />
        <meta property="og:type" content="website" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </Head>
    <Component {...pageProps} />
    <Analytics/>
   </> 
  )
}

export default MyApp
