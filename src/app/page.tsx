import Image from "next/image";
import HeaderSection from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services";

export default function Home() {
  return (
      <>
        <div className={'px-4 md:px-14'}>
            <HeaderSection/>
            <HeroSection/>
            <ServicesSection/>

        </div>

      </>
  );
}
