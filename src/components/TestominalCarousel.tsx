import React, { useState, useEffect } from "react";
import FloatingNotification from "@/components/FloatingNotification";
import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import { CirclePlus } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";

import { testimonials } from "@/constants/testimonials";
import { useLanguage } from "@/lib/LanguageContext";
export type testimonialProps = {
  id: string;
  review: string;
  author: string;
  position: string;
  company: string;
  relatedJob: string;
  imgUrl: string;
  reviewSecondPart?: string;
};

export type TestominalCarouselProps = {
  isLarge?: boolean;
};

export const TestominalCarousel = ({
  isLarge = true,
}: TestominalCarouselProps) => {
  const { t, language } = useLanguage();
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const currentTestimonial = testimonials[currentIndex];
    if (!currentTestimonial) return;

    // Get total text length (review + optional reviewSecondPart)
    const translatedReview = t(currentTestimonial.review);
    const translatedSecondPart = currentTestimonial.reviewSecondPart ? t(currentTestimonial.reviewSecondPart) : "";
    const totalLength = translatedReview.length + translatedSecondPart.length;

    // Dynamic delay: base 3500ms + 30ms per character
    const delay = Math.max(3500, 3000 + totalLength * 30);

    const timer = setTimeout(() => {
      api.scrollNext();
    }, delay);

    return () => clearTimeout(timer);
  }, [api, currentIndex, language]);

  return (
    <Carousel
      opts={{ loop: true }}
      setApi={setApi}
      className={`flex ${
        isLarge
          ? "mx-[8rem] xl:mx-[20rem] xl:transform xl:scale-110 justify-center gap-4 align-center"
          : "justify-start -mb-4 -mt-4 align-top"
      } `}
    >
      <CarouselContent className="flex w-full justify-between ">
        {testimonials.map((testimonial: testimonialProps) => (
          <CarouselItem
            key={testimonial.id}
            className={`flex w-full ${
              isLarge
                ? "justify-center self-center"
                : "justify-center self-center"
            } `}
          >
            <div
              className={`flex flex-col justify-around  bg-n-12/40 hover:bg-n-12/50 transition-all backdrop-blur border-[1.5px] border-n-1/10 rounded-2xl gap-[0.85rem] z-1 ${
                isLarge
                  ? "w-[30rem] h-[13rem] p-[2rem] pr-6"
                  : " min-w-[27rem] p-[1.5rem]"
              }`}
            >
              <p className="italic font-thin text-sm">
                {t(testimonial.review)}
                {testimonial.reviewSecondPart && (
                  <>
                    <br />
                    {t(testimonial.reviewSecondPart)}
                  </>
                )}
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
                    {t(testimonial.position)} at {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
        {/* <CarouselItem className="flex w-full h-full justify-center self-center">
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
        </CarouselItem> */}
      </CarouselContent>
      {isLarge && <CarouselPrevious />}
      {isLarge && <CarouselNext />}
    </Carousel>
  );
};
