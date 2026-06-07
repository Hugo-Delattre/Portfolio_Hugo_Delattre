import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";
import { personalProjects, projects } from "@/constants/projects";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tagline } from "@/components/Tagline";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export type ProjectsProps = {};

export const Projects = (props: ProjectsProps) => {
  const { language, t } = useLanguage();
  return (
    <Section id="work" crosses className="overflow-hidden">
      <div className="container md:pb-10">
        <Heading
          title={t("projects_title")}
          subtitle={t("projects_subtitle")}
        />

        <Tabs
          defaultValue="dev-pro"
          className="w-full flex flex-col justify-center"
        >
          <TabsList className="hidden rounded-xl w-[546px] items-center gap-2 mx-auto md:flex justify-center mb-2">
            <TabsTrigger value="dev-pro" className="rounded-lg ">
              {t("projects_tab_pro")}
            </TabsTrigger>
            <TabsTrigger value="dev-personal" className="rounded-lg">
              {t("projects_tab_personal")}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="dev-pro">
            <div className="relative grid gap-6 md:grid-cols-2 md:gap-4">
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
                    <div className="relative p-8 bg-n-8  rounded-[2.4375rem] overflow-hidden xl:p-12">
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
                            <div className="hidden xl:flex items-center px-4 py-1  border rounded-lg text-white">
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
                                {project.ticketsSolved} {t("projects_tickets")}
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
                            alt={t(project.title)}
                          />
                          {/* {project.secondaryImageUrl && (
                            <Image
                              src={project.secondaryImageUrl}
                              width={140}
                              height={100}
                              alt={t(project.title)}
                            />
                          )} */}
                        </div>
                      </div>
                      {/* <h4 className="mt-6 h4 mb-4">{t(project.title)}</h4> */}
                      <p className="body-2 text-n-3 mt-4">{t(project.text)}</p>
                    </div>
                    {/* </div> */}
                  </div>
                );
              })}
            </div>
          </TabsContent>
          <TabsContent value="dev-personal">
            {" "}
            <div className="relative grid gap-6 md:grid-cols-2 md:gap-4">
              {personalProjects.map((project) => {
                const status =
                  project.status === "done" ? "Done" : "In progress";
                return (
                  <div
                    key={project.id}
                    className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                      project.colorful ? "bg-conic-gradient" : "bg-n-5"
                    }`}
                  >
                    <div className="relative p-8 bg-n-8  rounded-[2.4375rem] overflow-hidden xl:p-12">
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
                            <div className="hidden xl:flex items-center px-4 py-1  border rounded-lg text-white">
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
                                {project.ticketsSolved} {t("projects_tickets")}
                              </div>
                            </div>
                          )}
                        </div>
                        {/* <div className="mb-10 -my-20 -mx-15"> */}
                        <div className="flex flex-row">
                          <Image
                            src={project.imageUrl}
                            width={project.width}
                            height={100}
                            alt={t(project.title)}
                          />
                          {/* {project.secondaryImageUrl && (
                            <Image
                              src={project.secondaryImageUrl}
                              width={140}
                              height={100}
                              alt={t(project.title)}
                            />
                          )} */}
                        </div>
                      </div>
                      {/* <h4 className="mt-6 h4 mb-4">{t(project.title)}</h4> */}
                      <p className="body-2 text-n-3 mt-4">{t(project.text)}</p>
                    </div>
                    {/* </div> */}
                  </div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Section>
  );
};
