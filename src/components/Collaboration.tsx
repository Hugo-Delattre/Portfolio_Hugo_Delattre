import Button from "@/components/Button";
import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import { collabContent } from "@/constants";

export type CollaborationProps = {};

export const Collaboration = (props: CollaborationProps) => {
  //TODO Add a modal when clicking on "discover more about me" that will display an animated (cf lottie)
  return (
    <Section className="crosses">
      <div className="container lg:flex">
        <div className="max-w-[35rem]">
          <Heading
            className="md:max-w-md lg:max-w-2xl"
            title="About me..."
            subtitle="...and why you might choose me as your next team member 😉"
          />
          <ul className="max-w-[22rem} mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img
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
          </ul>
          <Button>Check reviews of my work / Discover more about me</Button>
        </div>
        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-4 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            Hello
          </p>
          <div className="relative lft-1/2 flex w-[22rem] aspect-square border border-n-6 rounder-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full"></div>
          </div>
        </div>
      </div>
    </Section>
  );
};
