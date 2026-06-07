export interface Project {
  id: string;
  title: string;
  text: string;
  date: string;
  status: string;
  ticketsSolved: number;
  imageUrl: string;
  secondaryImageUrl?: string;
  colorful?: boolean;
  width: number;
  className?: string;
}

export const projects: Project[] = [
  {
    id: "0",
    title: "A350 Sensor Data Platform",
    text: "Developed new full stack features (React, Flask) handling and processing a massive influx of data with AWS serverless services, allowing to visualize sensor data from the A350 in a user-friendly interface.",
    date: "2025-2026",
    status: "done",
    ticketsSolved: 0,
    imageUrl: "/assets/logos/airbus-white.svg",
    colorful: true,
    width: 160,
    className: "mb-2",
  },
  {
    id: "1",
    title: "ARTE Boutique",
    text: "ARTE's e-commerce VOD platform. Worked on the front-end (Next, Tailwind), back-office (React, Refine, MUI), and backend architecture (Spring Boot).",
    date: "2024",
    status: "done",
    ticketsSolved: 26,
    imageUrl:
      "https://res.cloudinary.com/dxaqv2hww/image/upload/v1720967722/arte-boutique-logo-w-min_vczuid.png",
    colorful: true,
    width: 160,
  },
  {
    id: "2",
    title: "Educ'ARTE | ARTE Campus",
    text: "ARTE's educational platform. Contributed to component integration, front-end development (Next, Storybook, Sass), back-office development, web accessibility (a11y), and internationalization (FR/EN/DE).",
    date: "2024",
    status: "done",
    ticketsSolved: 33,
    imageUrl:
      "https://res.cloudinary.com/dxaqv2hww/image/upload/v1720968058/educ_arte_logo-min_mfj6el.png",
    secondaryImageUrl:
      "https://res.cloudinary.com/dxaqv2hww/image/upload/v1720974925/educ-arte-arte-campus-min_ifpdbn.png",
    colorful: false,
    width: 130,
    className: "mb-2",
  },
  {
    id: "3",
    title: "ARTE Kino",
    text: "Film festival supported by ARTE and Chanel. Contributed to front-end and back-office maintenance tickets.",
    date: "May 2023",
    status: "done",
    ticketsSolved: 8,
    imageUrl:
      "https://res.cloudinary.com/dxaqv2hww/image/upload/v1720966861/arte-kino-logo-min_cbwbrk.png",
    width: 120,
    className: "mt-2 mb-5",
  },
  {
    id: "4",
    title: "Open source contributions",
    text: "Contributing to open source in my free time to sharpen my skills. Submitted PRs to TailwindCSS, Tanstack, and Storybook repositories.",
    date: "May 2023",
    status: "none",
    ticketsSolved: 0,
    imageUrl:
      "https://res.cloudinary.com/dxaqv2hww/image/upload/v1720969285/github_logo_bkmpkv.png",
    width: 65,
    className: "mb-2",
  },
];

export const personalProjects: Project[] = [
  {
    id: "0",
    title: "GuezzGame",
    text: "Multiplayer mini-games app. Served as the front-end lead, training the team on React architecture best practices while collaborating with the back-end lead on Spring Boot development.",
    date: "2024",
    status: "done",
    ticketsSolved: 0,
    imageUrl:
      "https://res.cloudinary.com/dxaqv2hww/image/upload/v1723042544/GuezzGame_zm01ry.png",
    colorful: true,
    width: 160,
  },
  {
    id: "1",
    title: "TechMarket",
    text: "E-commerce platform built with Next.js. Features user cart management, authentication, JWT, REST API, and Stripe payments.",
    date: "2024",
    status: "done",
    ticketsSolved: 0,
    imageUrl:
      "https://res.cloudinary.com/dxaqv2hww/image/upload/v1723042545/TechMarket_ucej0n.png",
    colorful: false,
    width: 160,
  },
  {
    id: "2",
    title: "DungeonExplorer",
    text: "2D game developed in Java, inspired by early Zelda games, with a strong focus on Object-Oriented Programming (OOP) design patterns.",
    date: "2024",
    status: "done",
    ticketsSolved: 0,
    imageUrl:
      "https://res.cloudinary.com/dxaqv2hww/image/upload/v1723042997/Logo_DungeonExplorer-2_hohfio.png",
    colorful: false,
    width: 160,
  },
  {
    id: "3",
    title: "TravelSquad",
    text: "Social travel application. Acted as front-end lead and product owner within a team of 5 developers.",
    date: "2024",
    status: "done",
    ticketsSolved: 0,
    imageUrl:
      "https://res.cloudinary.com/dxaqv2hww/image/upload/v1723042260/TravelSquad_zmmk0v.png",
    colorful: false,
    width: 160,
    className: "mb-2",
  },
];
