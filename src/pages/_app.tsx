// import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/open-iconic-bootstrap.min.css'
import '@/styles/animate.css'
import '@/styles/magnific-popup.css'
import '@/styles/aos.css'
import '@/styles/ionicons.min.css'
import '@/styles/jquery.timepicker.css'
import '@/styles/flaticon.css'
import '@/styles/icomoon.css'
import '@/styles/style.css'
import React from 'react'
import NextNProgress from 'nextjs-progressbar';
import type { AppProps } from 'next/app'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      <Component {...pageProps} />
    </>
  );
}
