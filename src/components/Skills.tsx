import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import { benefits } from "@/constants";

import Arrow from "../../public/assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";

const Skills = () => {
  //TODO Show that i'm more advanced in front and back, that I am in DevOps, Web3 and UI/UX. Cards could have different sizes.
  //TODO Clicking on 'See more' opens a dialog with more details of my competencies. For example, for front-end, I could show that I'm proficient/advanced level in React, Next.js, TailwindCSS, ReactQuery, ReactHookForm, Zod, etc, and that I have solid foundations/fundamental skills in Angular.
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="My dev skills..."
          subtitle="...that will make your web project a success 🚀"
        />
      </div>
      <div className="flex flex-wrap gap-10 mb-10 justify-center">
        {benefits.map((item) => (
          <div
            key={item.id}
            className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
            style={{ backgroundImage: `url(${item.backgroundUrl})` }}
          >
            <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
              <h5 className="h5 mb-5">{item.title}</h5>
              <p className="body-2 mb-6 text-n-3">{item.text}</p>
              {item.iconUrl.length > 1 && (
                <div className="flex items-center mt-auto backdrop-blur rounded-2xl bg-n-9/40 border-[1.5px] border-n-1/10 p-3 radius">
                  {item.iconUrl.map((icon) => (
                    <img
                      key={icon}
                      src={icon}
                      width={48}
                      height={48}
                      alt={item.title}
                      className="mr-2"
                    />
                  ))}

                  <p className="ml-auto text-xs font-bold text-n-1 tracking-wider">
                    See more
                  </p>
                  <Arrow />
                </div>
              )}
            </div>
            {item.light && <GradientLight />}
            {/* <div
              className="absolute inset-0.5 bg-n-8"
              style={{ clipPath: "url(#benefits)" }}
            >
              <div>
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    width={380}
                    height={362}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  ></img>
                )}
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
