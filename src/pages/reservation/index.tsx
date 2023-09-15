import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navigation from "../components/navigate";
import Footer from "../components/footer";
import ReservationTitleComponent from "./component/reservation_title";

import ReservationComponent from "./component/reservation";
const inter = Inter({ subsets: ["latin"] });

export default function Reservation() {
    return (
        <div>
            <Head>
                <title>Reservation</title>
            </Head>
            <Navigation />
            <ReservationTitleComponent />
            <ReservationComponent />
            <Footer />
        </div>
    );
}
