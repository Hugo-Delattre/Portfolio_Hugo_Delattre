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
import { useLanguage } from "@/lib/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useLanguage();
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-screen pointer-events-none z-40">
        <ScrollParallax isAbsolutelyPositioned strength={0.07}>
          <FloatingNotification
            className="overflow-hidden hidden lg:flex lg:absolute right-[2.5rem] lg:bottom-[2.5rem] w-[22rem] z-40 scale-[1] pointer-events-auto"
            title={t("hero_available")}
            subtitle={t("hero_available_sub")}
            imgSrc="https://res.cloudinary.com/dxaqv2hww/image/upload/v1720969103/malt_logo_vnbq3d.png"
            imgAlt="malt-logo"
            link="https://www.malt.fr/profile/hugodelattre"
          />
        </ScrollParallax>
      </div>
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
    </>
  );
}
