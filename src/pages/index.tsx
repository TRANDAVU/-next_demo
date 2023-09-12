import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navigation from './layouts/navigate'
import Footer from './layouts/footer'
import Head from 'next/head'
import HomeSlide from './component/home/home-slide'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <div>
            <Head>
                <title>Home</title>
                <script src="../../js/jquery.min.js" async></script>
                <script src="../../js/jquery-migrate-3.0.1.min.js" async></script>
                <script src="../../js/popper.min.js" async></script>
                <script src="../../js/bootstrap.min.js" async></script>
                <script src="../../js/jquery.easing.1.3.js" async></script>
                <script src="../../js/jquery.waypoints.min.js" async></script>
                <script src="../../js/jquery.stellar.min.js" async></script>
                <script src="../../js/owl.carousel.min.js" async></script>
                <script src="../../js/jquery.magnific-popup.min.js" async></script>
                <script src="../../js/aos.js" async></script>
                <script src="../../js/jquery.animateNumber.min.js" async></script>
                <script src="../../js/bootstrap-datepicker.js" async></script>
                <script src="../../js/jquery.timepicker.min.js" async></script>
                <script src="../../js/scrollax.min.js" async></script>
                <script src="../../js/main.js" async></script>
                
            </Head>
            <Navigation />
            <HomeSlide />
            <Footer />

        </div>
    )

}
