import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import { projects } from "@/constants";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { check2, loading1 } from "../../public/assets";
import grid from "../../public/assets/grid.png";
import { Tagline } from "@/components/Tagline";

export type ProjectsProps = {};

export const Projects = (props: ProjectsProps) => {
  return (
    <Section id="work" crosses className="overflow-hidden">
      <div className="container md:pb-10">
        <Heading
          title="Contributions..."
          subtitle="...and projects I've worked on 🛠️"
        />

        <Tabs defaultValue="dev-pro" className="w-full">
          <TabsList className="rounded-xl w-[38rem] flex justify-around">
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
            <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
              {projects.map((project) => {
                const status =
                  project.status === "done" ? "Done" : "In progress";
                return (
                  <div
                    key={project.id}
                    className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                      project.colorful ? "bg-conic-gradient" : "bg-n-6"
                    }`}
                  >
                    <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                      <div className="absolute top-0 left-0 max-w-full">
                        <img
                          src={grid}
                          alt=""
                          className="w-full"
                          width={550}
                          height={550}
                          alt="Grid"
                        />
                      </div>
                      <div className="relative z-1">
                        <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                          <Tagline>{project.date}</Tagline>
                          <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                            <img
                              src={
                                project.status === "done" ? check2 : loading1
                              }
                              className="mr-2.5"
                              width={16}
                              height={16}
                              alt={status}
                            />
                            <div className="tagline">{status}</div>
                          </div>
                          <div className="mb-10 -my-10 -mx-15">
                            <img
                              src={project.imageUrl}
                              className="w-full"
                              width={630}
                              height={420}
                              alt={project.title}
                            />
                          </div>
                          <h4 className="h4 mb-4">{project.title}</h4>
                          <p className="body-2 text-n-4">{project.text}</p>
                        </div>
                      </div>
                    </div>
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
