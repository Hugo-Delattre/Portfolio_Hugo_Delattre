import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import { skills } from "@/constants/skills";

import Arrow from "../../public/assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../../public/assets/svg/ClipPath";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";
import Button from "@/components/Button";

const Skills = () => {
  //TODO Clicking on 'See more' opens a dialog with more details of my competencies. For example, for front-end, I could show that I'm proficient/advanced level in React, Next.js, TailwindCSS, ReactQuery, ReactHookForm, Zod, etc, and that I have solid foundations/fundamental skills in Angular.
  return (
    <Section id="skills" className="overflow-hidden px-8">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="My dev skills..."
          subtitle="...that will make your web project a success 🚀"
        />
      </div>
      <div className="flex flex-wrap gap-10 lg:mb-10 justify-center items-start lg:mx-[5rem] xl:mx-[10rem] scale-90 lg:scale-100 -mt-6 lg:-mt-2">
        {skills.map((item) => (
          <div
            key={item.id}
            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
            style={{ backgroundImage: `url(${item.backgroundUrl})` }}
          >
            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] ">
              <h5 className="h5 mb-5">{item.title}</h5>
              <p className="body-2 mb-6 text-n-3">{item.text}</p>
              {item.mainTechnologies?.length > 1 && (
                <div
                  className={`flex items-center mt-auto backdrop-blur cursor-pointer rounded-2xl bg-n-9/40 hover:bg-n-9/50 border-[1.5px] border-n-1/10 hover:border-n-1/20 transition-all duration-300 p-3`}
                >
                  {item.mainTechnologies.map((techno) => (
                    <TooltipProvider key={techno.name}>
                      <Tooltip delayDuration={25}>
                        <TooltipTrigger>
                          <img
                            key={techno.name}
                            src={techno.iconUrl}
                            width={48}
                            height={48}
                            alt={item.title}
                            className="mr-2"
                          />
                        </TooltipTrigger>
                        <TooltipContent>{techno.name}</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}

                  {/* <Drawer> */}
                  {/* <DrawerTrigger asChild> */}
                  {/* <div className="flex justify-end items-center ml-auto"> */}
                  <p
                    className={
                      "ml-auto text-xs font-bold text-n-1 tracking-wider"
                    }
                  >
                    See more
                  </p>
                  <Arrow />
                </div>
                // </DrawerTrigger>
                // <DrawerContent>
                // <DrawerHeader>
                // <DrawerTitle>Compétences avancées</DrawerTitle>
                // <DrawerDescription>
                // React, Next.js, TailwindCSS, ReactQuery,
                // ReactHookForm, Zod, Sass, Shadcn, MaterialUI,
                // Storybook, Figma, HTML/CSS/JavaScript
                // </DrawerDescription>
                // <DrawerTitle>Compétences intermédiaires</DrawerTitle>
                // <DrawerDescription>
                // Angular, Refine, Cypress
                // </DrawerDescription>
                // </DrawerHeader>
                // <DrawerFooter>
                // <DrawerClose>
                // <Button>Close</Button>
                // </DrawerClose>
                // </DrawerFooter>
                // </DrawerContent>
                // </Drawer>
                // </div>
              )}
            </div>
            {item.light && <GradientLight />}
            <div
              className="absolute inset-0.5 bg-n-8"
              style={{ clipPath: "url(#benefits)" }}
            >
              {/* <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    width={380}
                    height={362}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  ></img>
                )}
              </div> */}
            </div>
            <ClipPath />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
