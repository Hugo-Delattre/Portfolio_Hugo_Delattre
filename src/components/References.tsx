import FloatingNotification from "@/components/FloatingNotification";
import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import Image from "next/image";

export type ReferencesProps = {};

export const References = (props: ReferencesProps) => {
  return (
    <Section className="overflow-hidden">
      <Heading
        title="Reviews"
        tag="Now it's time for my"
        className="md:text-center"
      />
      {/* <FloatingNotification
        className="w-[18rem]"
        title="I'm currently available for freelance work 👌"
        subtitle="Seems like you're in luck!"
        imgSrc="https://play-lh.googleusercontent.com/pCYfqB1v-c9Phmvjxji_v37Lf1l59fg1pIy17PztwmS2yoRvGtNAgHZlOHQf0AQo_MZv"
        imgAlt="malt-logo"
        link="https://www.malt.fr/"
      /> */}
      <div className="flex align-center justify-center">
        <div className="flex w-[24rem] h-[8rem] items-center mt-auto backdrop-blur rounded-2xl bg-n-9/40 border-[1.5px] border-n-1/10 p-3 radius">
          <div className="flex-1">
            <p className="mb-[0.05rem] text-sm text-left">
              Here will be a review of my work by previous client in the form of
              a carousel.
            </p>
            <div className="flex items-center justify-between">
              <div className={"text-xs text-n-3 text-left"}>Par X manager</div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <Image
            src="/assets/pricing/stars.svg"
            className="w-full"
            alt="stars"
            width={950}
            height={400}
          />
        </div>
      </div>
      <div className="relative"></div>
    </Section>
  );
};
