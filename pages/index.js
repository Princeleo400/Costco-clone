import Head from "next/head";
import Image from "next/image";
import DeliveryNav from "../components/Delivery/deliveryNav";
import Hero from "../components/Hero";
import HeroTwo from "../components/Hero2";
import HeroThree from "../components/Hero3";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Costco</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DeliveryNav home={false} />
      <Hero />
      <HeroTwo />
      <HeroThree />
    </div>
  );
}
