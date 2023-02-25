import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Link } from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Feature from "@/components/Feature";
import LogoClouds from "@/components/LogoClouds";
import CTA from "@/components/CTA";
import WorkWithUs from "@/components/WorkWithUs";
import Stat from "@/components/Stat";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Dark Inc.</title>
        <meta
          name="description"
          content="Dark Inc. is a cutting-edge software company that specializes in developing innovative products to help businesses streamline their operations and improve their bottom line. Our team of talented developers, designers, and product managers work together to create software products that are intuitive, user-friendly, and designed to meet the unique needs of each customer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <CTA />
      <Feature />
      <Stat />
      <LogoClouds />
      <WorkWithUs />
      <Footer />
    </>
  );
}
