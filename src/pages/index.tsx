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
import { Footer } from "@/components/Footer";

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
      <Footer />
      <ScrollParallax isAbsolutelyPositioned>
        <FloatingNotification
          className="overflow-hidden hidden lg:fixed right-[2.5rem] lg:bottom-[2.5rem] w-[18rem] xl:flex z-[9000000] scale-[1]"
          title="I'm currently available for freelance work."
          subtitle="Seems like you're in luck 😉"
          imgSrc="https://res.cloudinary.com/dxaqv2hww/image/upload/v1720969103/malt_logo_vnbq3d.png"
          imgAlt="malt-logo"
          link="https://www.malt.fr/profile/hugodelattre"
        />
      </ScrollParallax>
    </>
  );
}
