import Image from "next/image";
import HeaderSection from "@/components/header";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
      <>
        <div className={'px-14'}>
            <HeaderSection/>
            <HeroSection/>

        </div>

      </>
  );
}
