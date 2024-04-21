import { Section } from "@/components/Section";
import Image from "next/image";
import React, { useRef } from "react";
import { curve } from "../../public/assets";
const heroBackground = "/assets/hero/hero-background-blurred.jpg";
import Button from "@/components/Button";
import {
  BackgroundCircles,
  BottomLine,
  Gradient,
} from "../components/design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { heroIcons } from "@/constants";
import FloatingNotification from "@/components/FloatingNotification";
import Link from "next/link";
import { CompanyLogos } from "@/components/CompanyLogos";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <Image
        src={heroBackground}
        alt="background-image"
        className="w-full -mt-[20rem] rounded-2xl z-0 absolute"
        width={1440}
        height={1800}
      />
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-2">
            <br />
            {/* Passionate Full Stack */}
            <span className="inline-block relative">
              Hugo Delattre
              {/* <Image
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-1"
                alt="underline"
                width={624}
                height={28}
              /> */}
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto text-2xl">
            <span className="inline-block relative">
              Passionate Full Stack Developer
              <Image
                src={curve}
                className="absolute top-full left-0 w-full"
                alt="underline"
                width={624}
                height={28}
              />
            </span>
          </p>
          <Button href="/#contact" className="mt-8">
            Learn more about me
          </Button>
          <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
              <div className="relative bg-n-8 rounded-[1rem]">
                <div className="rounded-t-[0.9rem]">
                  <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                    <img
                      src="https://halo.wiki.gallery/images/0/00/HInf_Coverart_Large_No_Logo.jpg"
                      className="w-full rounded-2xl 
                      scale-[1.3] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[0%]
                      "
                      width={1440}
                      height={1800}
                      alt="hero-section-image"
                    />

                    <ScrollParallax isAbsolutelyPositioned>
                      <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                        {heroIcons.map((icon, index) => (
                          <li className="p-5" key={index}>
                            <img src={icon} alt={icon} width={24} height={25} />
                          </li>
                        ))}
                      </ul>
                    </ScrollParallax>

                    <ScrollParallax isAbsolutelyPositioned>
                      <FloatingNotification
                        className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                        title="I'm currently available for freelance work 👌"
                        subtitle="Seems like you're in luck!"
                        imgSrc="https://play-lh.googleusercontent.com/pCYfqB1v-c9Phmvjxji_v37Lf1l59fg1pIy17PztwmS2yoRvGtNAgHZlOHQf0AQo_MZv"
                        imgAlt="malt-logo"
                        link="https://www.malt.fr/"
                      />
                    </ScrollParallax>
                  </div>
                </div>
              </div>
              <BackgroundCircles />
            </div>
            <CompanyLogos className="hidden relative z-10 mt-20 md:block" />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
