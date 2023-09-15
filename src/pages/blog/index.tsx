import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navigation from "../components/navigate";
import Footer from "../components/footer";
import BlogTitleComponent from "./component/blog_title";

import BlogComponent from "./component/blog";
const inter = Inter({ subsets: ["latin"] });

export default function Blog() {
    return (
        <div>
            <Head>
                <title>Blog</title>
            </Head>
            <Navigation />
            <BlogTitleComponent />
            <BlogComponent />
            <Footer />
        </div>
    );
}
