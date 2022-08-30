import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Hero from "../components/Hero";
import SectionA from "../components/SectionA";
import SectionB from "../components/SectionB";
import SectionC from "../components/SectionC";
import SectionD from "../components/SectionD";
import Footer from "../components/Footer";
import Mymodal from "../components/Mymodal";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>SpaceX 2.0</title>
        <meta name="description" content="A clone of SpaceX website by PM" />
        <link rel="icon" href="/logo.ico" />
      </Head>

      <section className="h-screen bg-[url('/img/section-a.webp')] bg-center bg-cover">
        <Header />
        <Hero />
        <Mymodal />
      </section>

      <SectionA />
      <SectionB />
      <SectionC />
      <SectionD />
      <Footer />
    </div>
  );
}
