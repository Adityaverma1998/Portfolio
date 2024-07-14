"use client"
import Image from "next/image";
import HeaderSection from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services";
import AboutMeSection from "@/components/about-me";
import PortfolioSection from "@/components/portfolio";
import ContactMeSection from "@/components/contact-me";
import FooterSection from "@/components/footer";
import { Element } from 'react-scroll';

export default function Home() {
  return (
      <>
        <div className={'px-4 md:px-14'}>
            <HeaderSection/>

            <Element name="home" className="element">
                <HeroSection/>
            </Element>

            <Element name="services" className="element">
                <ServicesSection/>
            </Element>

            <Element name="about" className="element">
                <AboutMeSection/>

            </Element>

            <Element name="portfolio" className="element">
                <PortfolioSection/>

            </Element>

            <Element name="contact" className="element">
                <ContactMeSection/>

            </Element>



        </div>
          <FooterSection/>

      </>
  );
}
