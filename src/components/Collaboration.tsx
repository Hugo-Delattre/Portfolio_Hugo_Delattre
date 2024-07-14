import Button from "@/components/Button";
import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import { collabContent } from "@/constants";
import Image from "next/image";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import { TestominalCarousel } from "@/components/TestominalCarousel";

export type CollaborationProps = {};

export const Collaboration = (props: CollaborationProps) => {
  return (
    <Section id="about" className="crosses">
      <div className="container lg:flex">
        <div className="max-w-[35rem]">
          <Heading
            className="md:max-w-md lg:max-w-2xl"
            title="About me..."
            subtitle="...and why you might choose me as your next team member 🙂"
          />
          <ul className="max-w-[22rem} mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <Image
                    src="/assets/check.svg"
                    width={24}
                    height={24}
                    alt="check"
                  />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
            <div className="relative">
              <TestominalCarousel isLarge={false} />
            </div>
          </ul>
          {/* <Button>Check reviews of my work / Discover more about me</Button>
           */}
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-1">
          <p className="body-2 mb-4 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto"></p>
          <div className="relative left-1/2 flex w-[20rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[14rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <Image
                    src="/assets/collaboration/hugo-delattre-profile-picture.jpg"
                    width={800}
                    height={800}
                    alt="Hugo Delattre profile picture"
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
            {/* <ul>
              <li
                className={`absolute top-[6rem] left-1/2 h-1/2 -ml-[11rem] origin-bottom text-xxl`}
                style={{ fontSize: "3rem" }}
              >
                <div
                  className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7  border border-n-1/15 rounded-xl`}
                >
                  👋🚀🤝
                </div>
              </li>
            </ul> */}
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};
