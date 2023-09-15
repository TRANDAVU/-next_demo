import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navigation from "../components/navigate";
import Footer from "../components/footer";
import MenuTitleComponent from "../menu/component/title_menu";

import TabsComponent from "../menu/component/tab";
const inter = Inter({ subsets: ["latin"] });

export default function Menu() {
    return (
        <div>
            <Head>
                <title>Menu</title>
            </Head>
            <Navigation />
            <MenuTitleComponent />
            <TabsComponent />
            <Footer />
        </div>
    );
}
