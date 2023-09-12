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
                
            </Head>
            <Navigation />
            <HomeSlide />
            <Footer />

        </div>
    )

}
