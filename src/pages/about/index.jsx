import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navigation from "../components/navigate";
import Footer from "../components/footer";
import AboutTitleComponent from "../about/component/title_about";
import AboutComponentV2 from "../components/index/about_v2";
import TimeComponent from "../components/index/time";
import ServiceComponent from "../components/index/service";
import MenuComponent from "../components/index/menu";
import BookTicketsComponent from "../components/index/book_tickets";
import CustomerComponent from "../components/index/customer";
const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Navigation />
      <AboutTitleComponent />
      <AboutComponentV2 />
      <TimeComponent />
      <ServiceComponent />
      <MenuComponent />
      <BookTicketsComponent />
      <CustomerComponent />
      <Footer />
    </div>
  );
}
