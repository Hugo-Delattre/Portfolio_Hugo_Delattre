import { Heading } from "@/components/Heading";
import { Section } from "@/components/Section";

export type ProjectsProps = {};

export const Projects = (props: ProjectsProps) => {
  return (
    <Section id="work" crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rerm]">
          <Heading
            title="Contributions..."
            subtitle="...and projects I've worked on 🛠️"
          ></Heading>
        </div>
      </div>
    </Section>
  );
};
