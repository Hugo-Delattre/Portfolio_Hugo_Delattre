import Image from "next/image";
import { Inter } from "next/font/google";
import ButtonGradient from "../../public/assets//svg/ButtonGradient";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

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
    </>
  );
}
