import { Section } from "@/components/Section";
import Image from "next/image";
import React from "react";
import { curve } from "../../public/assets";
const heroBackground = "/assets/hero/hero-background-blurred.jpg";
import Button from "@/components/Button";

const Hero = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative">
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
                <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]">
                  <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                    <img
                      src="https://halo.wiki.gallery/images/0/00/HInf_Coverart_Large_No_Logo.jpg"
                      className="w-full"
                      width={1440}
                      height={1800}
                      alt="hero-section-image"
                    />
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src={heroBackground}
                  alt="background-image"
                  className="w-full"
                  width={1440}
                  height={1800}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
