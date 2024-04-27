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

export type ReferencesProps = {};

import { testimonials } from "@/constants";
export type testimonialProps = {
  id: string;
  review: string;
  author: string;
  position: string;
  company: string;
  relatedJob: string;
  imgUrl: string;
};

export const References = (props: ReferencesProps) => {
  return (
    <Section id="references" className="overflow-hidden">
      <Heading title="Testimonials" tag=" " className="md:text-center" />
      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 4500 })]}
        className="flex justify-center align-center gap-4 mx-[8rem] xl:mx-[20rem] xl:transform xl:scale-110"
      >
        <CarouselContent className="flex w-full justify-between ">
          {testimonials.map((testimonial: testimonialProps) => (
            <CarouselItem
              key={testimonial.id}
              className="flex w-full justify-center self-center"
            >
              <div className="flex flex-col justify-around w-[30rem] h-[13rem] p-[2rem] pr-6 bg-n-12/40 backdrop-blur border-[1.5px] border-n-1/10 rounded-2xl gap-[0.85rem] z-1">
                <p className="italic font-thin text-sm">
                  &quot;{testimonial.review}&quot;
                </p>

                <div className="flex text-md">
                  <img
                    width="40"
                    height="40"
                    alt="Profile Picture"
                    src={testimonial.imgUrl}
                    className="rounded-xl mr-2"
                  />
                  <div>
                    <p className="text-n-1">{testimonial.author}</p>
                    <p className="text-xs text-n-3">
                      {testimonial.position} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
          <CarouselItem className="flex w-full h-full justify-center self-center">
            <a href="https://tjtr9b8h13c.typeform.com/to/YcFI1uD0">
              <div className="flex justify-around w-[20rem] h-[9rem] p-[2rem] pr-6 bg-n-12/40 hover:bg-n-9/70 transition-all backdrop-blur border-[1.5px] border-n-1/10 rounded-2xl gap-[0.85rem] z-1">
                <CirclePlus className="w-16 h-16 text-n-1" />
                <div>
                  <p className="font-thin text-sm mb-1">
                    Hey, have you previously worked with me? 👀
                  </p>
                  <p className="font-thin text-xs text-n-3">
                    Feel free to add your review of my work by clicking here!
                  </p>
                </div>
              </div>
            </a>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

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
