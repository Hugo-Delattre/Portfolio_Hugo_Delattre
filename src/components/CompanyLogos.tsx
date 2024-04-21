import { companyLogos } from "@/constants";

export type CompanyLogosProps = {
  className: string;
};

export const CompanyLogos = ({ className }: CompanyLogosProps) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        My work and I are trusted by
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            key={index}
            className="flex items-center justify-center flex-1 h-[8.5rem]"
          >
            <img
              src={logo}
              alt={logo}
              width={100}
              height={100}
              className="filter brightness-0 invert"
            />
          </li>
        ))}
        <li className="flex items-center justify-center flex-1 h-[8.5rem]">
          And more...
        </li>
      </ul>
    </div>
  );
};
