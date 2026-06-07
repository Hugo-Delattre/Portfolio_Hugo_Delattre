export interface Skill {
  id: string;
  title: string;
  text: string;
  backgroundUrl: string;
  mainTechnologies: Array<{ iconUrl: string; name: string }>;
  advancedSeeMore: string;
  intermediateSeeMore: string;
  imageUrl?: string;
  light?: boolean;
}

export const skills: Skill[] = [
  {
    id: "0",
    title: "Front-end development",
    text: "Bringing expertise in crafting engaging, accessible and user-friendly interfaces, using TypeScript, React and its modern ecosystem.",
    backgroundUrl: "assets/benefits/card-1.svg",
    mainTechnologies: [
      {
        iconUrl: "https://www.svgrepo.com/show/349540/typescript.svg",
        name: "TypeScript",
      },
      {
        iconUrl:
          "https://res.cloudinary.com/dxaqv2hww/image/upload/v1720969915/react_naqfpx.svg",
        name: "React",
      },
      {
        iconUrl:
          "https://res.cloudinary.com/dxaqv2hww/image/upload/v1720969869/next-js_hzggqd.png",
        name: "Next.js",
      },
    ],
    advancedSeeMore:
      "HTML/CSS/JavaScript, TypeScript, React, Next.js, ReactQuery, RHF, Zod, Sass, Tailwind, Shadcn, MUI, Storybook",
    intermediateSeeMore: "Angular (with Signals)",
  },
  {
    id: "1",
    title: "Back-end development",
    text: "Proficient in building robust APIs and scalable backend architectures. I easily transition between Python with Flask, Java with Spring Boot, and Node.js.",
    backgroundUrl: "assets/benefits/card-4.svg",
    mainTechnologies: [
      {
        iconUrl: "assets/logos/java.svg",
        name: "Java / Spring Boot",
      },
      {
        iconUrl: "https://www.svgrepo.com/show/452091/python.svg",
        name: "Python",
      },
      {
        iconUrl: "assets/logos/postgresql.svg",
        name: "PostgreSQL",
      },
    ],
    advancedSeeMore:
      "Java / Spring Boot, Node.js / NestJS, Python / Flask, PostgreSQL, REST APIs, Swagger",
    intermediateSeeMore: "",
    imageUrl: "assets/logos/java.svg",
    light: true,
  },
  {
    id: "2",
    title: "Cloud engineering",
    text: "Designing and implementing scalable cloud architectures, optimized for performance, high availability, and cost efficiency.",
    backgroundUrl: "assets/benefits/card-3.svg",
    mainTechnologies: [
      {
        iconUrl: "assets/logos/aws-white.svg",
        name: "AWS",
      },
      {
        iconUrl: "https://www.svgrepo.com/show/448221/docker.svg",
        name: "Docker",
      },
      {
        iconUrl: "assets/logos/terraform.svg",
        name: "Terraform",
      },
    ],
    advancedSeeMore: "AWS (S3, Lambda, Glue, EC2), Docker, Terraform, ClickHouse, data compression, cost-optimization",
    intermediateSeeMore: "Kubernetes, GCP, AI Integration (LLM APIs, RAG, ...)",
    imageUrl: "assets/logos/aws-white.svg",
    light: true,
  },
  {
    id: "3",
    title: "Collaboration",
    text: "I'm confident with the tools and workflows needed to work efficiently in a team, as well as bringing attentive listening to deeply understand the needs of my clients and managers.",
    backgroundUrl: "assets/benefits/card-2.svg",
    mainTechnologies: [
      {
        iconUrl: "https://www.svgrepo.com/show/448226/gitlab.svg",
        name: "GitLab",
      },
      {
        iconUrl: "assets/logos/github.svg",
        name: "GitHub",
      },
    ],
    advancedSeeMore: "Git, GitHub, GitLab, Jira, Slack, Trello",
    intermediateSeeMore: "Jenkins",
    imageUrl: "https://www.svgrepo.com/show/448226/gitlab.svg",
  },
];
