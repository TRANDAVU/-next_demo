// import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/open-iconic-bootstrap.min.css'
import '@/styles/animate.css'
// import '@/styles/owl.carousel.min.css'
import '@/styles/magnific-popup.css'
import '@/styles/aos.css'
import '@/styles/ionicons.min.css'
// import '@/styles/bootstrap-datepicker.css'
import '@/styles/jquery.timepicker.css'
import '@/styles/flaticon.css'
import '@/styles/icomoon.css'
import '@/styles/style.css'
import React from 'react'
import { useRouter } from 'next/router';
import NextNProgress from 'nextjs-progressbar';
import type { AppProps } from 'next/app'
import LoadingSpinner from './components/LoadingSpinner';
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const loading = router.route !== router.asPath;

  return (
    // <>
    //   <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
    //   <Component {...pageProps} />
    // </>
    <div>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Component {...pageProps} />
      )}
    </div>
  );
}
