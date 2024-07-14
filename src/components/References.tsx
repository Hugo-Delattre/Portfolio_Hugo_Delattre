import FloatingNotification from "@/components/FloatingNotification";
import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import { CirclePlus } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { title } from "process";

import { testimonials } from "@/constants/testimonials";
import { TestominalCarousel } from "@/components/TestominalCarousel";
export type testimonialProps = {
  id: string;
  review: string;
  author: string;
  position: string;
  company: string;
  relatedJob: string;
  imgUrl: string;
};

export type ReferencesProps = {};

export const References = (props: ReferencesProps) => {
  return (
    <Section id="references-2" className="overflow-hidden">
      <Heading title="Testimonials" tag=" " className="md:text-center" />
      <TestominalCarousel />

      <div className="container relative z-2 ">
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
