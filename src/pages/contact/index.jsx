import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navigation from "../components/navigate";
import Footer from "../components/footer";
import ContactTitleComponent from "../contact/component/contact_title";

import ContactComponent from "../contact/component/contact";
const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
    return (
        <div>
            <Head>
                <title>Contact</title>
            </Head>
            <Navigation />
            <ContactTitleComponent />
            <ContactComponent />
            <Footer />
        </div>
    );
}
