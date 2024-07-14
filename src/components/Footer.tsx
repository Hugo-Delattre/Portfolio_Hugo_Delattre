import { Section } from "@/components/Section";
import { socials } from "@/constants/socials";

export type FooterProps = {};

export const Footer = (props: FooterProps) => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-n-4 lg:block">
          Interested in my profile? Feel free to contact me on Malt, LinkedIn,
          or at <span className="font-bold">hugodelattre.dev@gmail.com</span>
        </p>
        <ul className="flex gap-5 flex-wrap">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img
                width={16}
                height={16}
                src={social.iconUrl}
                alt={social.title}
              />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};
