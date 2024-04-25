import { Tagline } from "@/components/Tagline";

export type HeadingProps = {
  className?: string;
  title: string;
  subtitle?: string;
  tag?: string;
};

export const Heading = ({ className, title, subtitle, tag }: HeadingProps) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}
    >
      {tag && <Tagline className="mb-4 md:justify-center">{tag}</Tagline>}
      {title && <h2 className="h2">{title}</h2>}
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};
