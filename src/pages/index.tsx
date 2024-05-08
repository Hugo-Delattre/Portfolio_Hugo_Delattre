import Image from "next/image";
import { Inter } from "next/font/google";
import ButtonGradient from "../../public/assets//svg/ButtonGradient";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Collaboration } from "@/components/Collaboration";
import { References } from "@/components/References";
import FloatingNotification from "@/components/FloatingNotification";
import { ScrollParallax } from "react-just-parallax";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
      </div>
      <ButtonGradient />
      <Skills />
      <Projects />
      <Collaboration />
      {/* <References /> */}
      <ScrollParallax isAbsolutelyPositioned>
        <FloatingNotification
          className="overflow-hidden fixed right-[2.5rem] bottom-[2.5rem] w-[18rem] xl:flex z-2 scale-[1]"
          title="I'm currently available for freelance work 👌"
          subtitle="Seems like you're in luck!"
          imgSrc="https://play-lh.googleusercontent.com/pCYfqB1v-c9Phmvjxji_v37Lf1l59fg1pIy17PztwmS2yoRvGtNAgHZlOHQf0AQo_MZv"
          imgAlt="malt-logo"
          link="https://www.malt.fr/"
        />
      </ScrollParallax>
    </>
  );
}
