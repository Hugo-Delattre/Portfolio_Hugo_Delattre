import FloatingNotification from "@/components/FloatingNotification";
import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import EmblaCarousel from "@/components/carousel/Carousel";
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
      <Heading title="Reviews" tag="Time for the" className="md:text-center" />
      <Carousel className="flex justify-center align-center gap-4 mx-[8rem]">
        <CarouselContent className="flex w-full justify-between">
          {testimonials.map((testimonial: testimonialProps) => (
            <CarouselItem
              key={testimonial.id}
              className="flex w-full basis-1/1 md:basis-1/2 xl:basis-1/3 justify-center"
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
        </CarouselContent>
        <CarouselPrevious className="lg:hidden" />
        <CarouselNext className="lg:hidden" />
      </Carousel>
      {/* <div className="flex w-[30rem] h-[10rem] items-center p-4 pr-6 bg-n-9/40 backdrop-blur border-[1.5px] border-n-1/10 rounded-2xl gap-[0.85rem] z-1">
        <img
          width="50"
          height="50"
          alt="Profile Picture"
          src="https://media.licdn.com/dms/image/D4E03AQFdmnNJukHhlg/profile-displayphoto-shrink_800_800/0/1680446348126?e=1719446400&v=beta&t=TCbdnbapku5_Jmt-4wv6lKPV4rq6cT0dBil1RnM-7OM"
          className="rounded-xl"
        />
        <div className="flex-1">
          <p className="mb-[0.05rem] text-sm text-left">
            Here will be a review of my work by previous client in the form of a
            carousel.
          </p>
          <div className="flex items-center justify-between">
            <div className="text-xs text-n-3 text-left">Par X manager</div>
          </div>
        </div>
      </div> */}

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
