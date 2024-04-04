import Image from "next/image";
import { Inter } from "next/font/google";
import ButtonGradient from "../../public/assets//svg/ButtonGradient";
import Button from "@/components/Button";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Button className="mt-10" href="#login">
          Something
        </Button>
      </div>
      <ButtonGradient />

      <Header />
    </>
  );
}
