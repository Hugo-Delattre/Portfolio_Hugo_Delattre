import { Section } from "@/components/Section";

export type ProjectsProps = {};

export const Projects = (props: ProjectsProps) => {
  return (
    <Section id="work" crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rerm]">
          <h2 className="h2 mb-4 md:mb-8">My Carousel Work</h2>
        </div>
      </div>
    </Section>
  );
};
