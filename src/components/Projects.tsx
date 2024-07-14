import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import { projects } from "@/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tagline } from "@/components/Tagline";
import Image from "next/image";

export type ProjectsProps = {};

export const Projects = (props: ProjectsProps) => {
  return (
    <Section id="work" crosses className="overflow-hidden">
      <div className="container md:pb-10">
        <Heading
          title="Contributions..."
          subtitle="...and projects I've worked on 🛠️"
        />

        <Tabs
          defaultValue="dev-pro"
          className="w-full flex flex-col justify-center"
        >
          <TabsList className="rounded-xl w-[39.5rem] flex justify-center">
            <TabsTrigger value="dev-pro" className="rounded-lg">
              Profesional & open source contributions
            </TabsTrigger>
            <TabsTrigger
              value="dev-open-source"
              className="rounded-lg"
            ></TabsTrigger>
            <TabsTrigger value="dev-personal" className="rounded-lg">
              Personal & student projects
            </TabsTrigger>
          </TabsList>
          <TabsContent value="dev-pro">
            <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem] ">
              {projects.map((project) => {
                const status =
                  project.status === "done" ? "Done" : "In progress";
                return (
                  <div
                    key={project.id}
                    className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                      project.colorful ? "bg-conic-gradient" : "bg-n-5"
                    }`}
                  >
                    <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-12">
                      <div className="absolute top-0 left-0 max-w-full">
                        <Image
                          src="/assets/grid.png"
                          className="w-full"
                          width={550}
                          height={550}
                          alt="Grid"
                        />
                      </div>
                      <div className="relative z-1">
                        <div className="absolute right-2 flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                          {/* <Tagline>{project.date}</Tagline> */}
                          {project.ticketsSolved > 0 && (
                            <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                              <Image
                                src={
                                  project.status === "done"
                                    ? "/assets/check-02.svg"
                                    : "/assets/loading-01.svg"
                                }
                                className="mr-2.5"
                                width={16}
                                height={16}
                                alt={status}
                              />
                              <div className="tagline">
                                {project.ticketsSolved} tickets résolus
                              </div>
                            </div>
                          )}
                        </div>
                        {/* <div className="mb-10 -my-20 -mx-15"> */}
                        <div className="flex flex-row">
                          <Image
                            src={project.imageUrl}
                            className={project.className}
                            width={project.width}
                            height={100}
                            alt={project.title}
                          />
                          {/* {project.secondaryImageUrl && (
                            <Image
                              src={project.secondaryImageUrl}
                              width={140}
                              height={100}
                              alt={project.title}
                            />
                          )} */}
                        </div>
                      </div>
                      {/* <h4 className="mt-6 h4 mb-4">{project.title}</h4> */}
                      <p className="body-2 text-n-3 mt-4">{project.text}</p>
                    </div>
                    {/* </div> */}
                  </div>
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="dev-open">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </Section>
  );
};
