import { Inter } from 'next/font/google'
import Navigation from './components/navigate'
import Footer from './components/footer'
import Head from 'next/head'
import Slide from './components/index/Slide'
import AboutComponent from './components/index/about'
import AboutComponentV2 from './components/index/about_v2'
import TimeComponent from './components/index/time'
import ServiceComponent from './components/index/service'
import MenuComponent from './components/index/menu'
import ManagerComponent from './components/index/manager'
import BookTicketsComponent from './components/index/book_tickets'
import CustomerComponent from './components/index/customer'
import BlogComponent from './components/index/blog'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <Navigation />
            <Slide />
            <AboutComponent />
            <AboutComponentV2 />
            <TimeComponent />
            <ServiceComponent />
            <MenuComponent />
            <ManagerComponent />
            <BookTicketsComponent />
            <CustomerComponent />
            <BlogComponent />
            <Footer />
        </div>
    )

}
