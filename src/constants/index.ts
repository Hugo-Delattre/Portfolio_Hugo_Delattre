import {
  file02,
  homeSmile,
  notification2,
  notification3,
  notification4,
  plusSquare,
  roadmap3,
  searchMd,
} from "../../public/assets/index";

export const navigation = [
  {
    id: "0",
    title: "My skills",
    url: "#skills",
  },

  {
    id: "1",
    title: "My work",
    url: "#work",
  },
  {
    id: "2",
    title: "About me",
    url: "#about",
  },
  {
    id: "3",
    title: "References",
    url: "#references",
  },
  {
    id: "4",
    title: "Hiring",
    url: "#hiring",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  "https://res.cloudinary.com/dxaqv2hww/image/upload/v1720966861/picsprod_logo_yd6k7g.png",
  "https://res.cloudinary.com/dxaqv2hww/image/upload/v1720968658/hipolito-logo_vct3xv.png",
  // "https://res.cloudinary.com/dxaqv2hww/image/upload/v1720968986/arte-studio-logo_ewjb5j.png",
  "https://res.cloudinary.com/dxaqv2hww/image/upload/v1720966861/arte_logo_sgdpsm.png",
  "https://res.cloudinary.com/dxaqv2hww/image/upload/v1720968879/reworld-media-logo_le1i4o.png",
];

//TODO An idea could be to reduce the size of the cards and to add a "see more" button to see the full list of projects.
export const projects = [
  {
    id: "0",
    title: "ARTE Boutique",
    text: "Plateforme e-commerce VOD d'ARTE. J'ai travaillé sur le front-end (Next, Tailwind) et le back office (React, Refine, MUI). Je me suis également penché sur l'architecture du back-end (Spring Boot).",
    date: "2024",
    status: "done",
    ticketsSolved: 26,
    imageUrl:
      "https://res.cloudinary.com/dxaqv2hww/image/upload/v1720967722/arte-boutique-logo-w-min_vczuid.png",
    colorful: true,
    width: 160,
  },
  {
    id: "1",
    title: "Educ'ARTE | ARTE Campus",
    text: "Plateforme éducative d'ARTE. J'y ai principalement travaillé sur de l'intégration de composants, développement du front-end (Next, Storybook, Sass), et développement du back office, ainsi que sur l'accessibilité et l'internationalisation (fr/en/de).",
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
    id: "2",
    title: "ARTE Kino",
    text: "Festival de cinéma soutenu par ARTE et Chanel. J'y ai contribué sur des tickets de maintenance du front-end et back office.",
    date: "May 2023",
    status: "done",
    ticketsSolved: 8,
    imageUrl:
      "https://res.cloudinary.com/dxaqv2hww/image/upload/v1720966861/arte-kino-logo-min_cbwbrk.png",
    width: 120,
    className: "mt-4 mb-5",
  },
  {
    id: "3",
    title: "Open source contributions",
    text: "I like to do some open source contributions on my free time, it trains my ability to quickly being able to collaborate on a new codebase. I've contributed to TailwindCSS, Tanstack and Storybook repositories.",
    date: "May 2023",
    status: "none",
    ticketsSolved: 0,
    imageUrl:
      "https://res.cloudinary.com/dxaqv2hww/image/upload/v1720969285/github_logo_bkmpkv.png",
    width: 80,
    className: "mb-2",
  },
  {
    id: "4",
    title: "Audiovisual work",
    text: "Before my web development career, I worked in the audiovisual field on various projects such as editing documentaries for ARTE, music video and ads for Hipolito, shooting events films for PicsProd, and much more as a freelancer.",
    date: "2019-2022",
    status: "none",
    ticketsSolved: 0,
    imageUrl:
      "https://res.cloudinary.com/dxaqv2hww/image/upload/v1720970041/clap_roxqjc.svg",
    width: 80,
    className: "mb-2",
  },
];

export const collabContent = [
  {
    id: "0",
    title: "Technical Expertise",
    text: "Specialized in web development, I'm efficient adding productivity in both front-end and back-end sides of your project. I'm constantly keeping me up to date with technologies and best practices.",
  },
  {
    id: "1",
    title: "Great collaboration and communication",
    text: "Involved and passionate, I work closely with my clients and team members to ensure project success. I'm also friendly and easy to work with.",
  },
  {
    id: "2",
    title: "100% of successful past experiences!",
    // text: "The feedback of my clients and managers have always been great. Check it out below!",
  },
];

export const benefits = [
  {
    id: "0",
    title: "Front-end development",
    text: "Bringing expertise in crafting engaging, accessible and user-friendly interfaces, using TypeScript and its modern frameworks and libraries.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: [
      "https://www.svgrepo.com/show/349540/typescript.svg",
      "https://res.cloudinary.com/dxaqv2hww/image/upload/v1720969915/react_naqfpx.svg",
      "https://res.cloudinary.com/dxaqv2hww/image/upload/v1720969869/next-js_hzggqd.png",
    ],
    imageUrl: "https://www.svgrepo.com/show/452092/react.svg",
  },
  {
    id: "1",
    title: "Back-end development",
    text: "I'm offering advanced Java and Spring Boot skills in developing robust server logic, ensuring seamless performance and security for web applications.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: [
      "https://www.svgrepo.com/show/452234/java.svg",
      "https://www.svgrepo.com/show/354380/spring-icon.svg",
      "https://www.svgrepo.com/show/373848/mysql.svg",
    ],
    imageUrl: "https://www.svgrepo.com/show/354380/spring-icon.svg",
    light: true,
  },
  {
    id: "4",
    title: "UI/UX",
    text: "My years working in the audiovisual field gave me a sensitive eye to design that helps me implement visually appealing and intuitive interfaces.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: [
      "https://www.svgrepo.com/show/448222/figma.svg",
      "https://www.svgrepo.com/show/452149/adobe-photoshop.svg",
    ],
    imageUrl: "https://www.svgrepo.com/show/448222/figma.svg",
  },
  {
    id: "2",
    title: "Collaboration",
    text: "I'm confident with the tools and workflows needed to work efficiently in a team, as well as bringing attentive listening to deeply understand the needs of my clients and managers.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: [
      "https://www.svgrepo.com/show/448226/gitlab.svg",
      "https://www.svgrepo.com/show/448221/docker.svg",
    ],
    imageUrl: "https://www.svgrepo.com/show/448221/docker.svg",
  },
  // {
  //   id: "3",
  //   title: "Web3",
  //   text: "Passionately integrating blockchain technologies to create secure and transparent decentralized web applications (for related projects).",
  //   backgroundUrl: "assets/benefits/card-3.svg",
  //   iconUrl: [
  //     "https://www.svgrepo.com/show/373788/light-solidity.svg",
  //     "https://seeklogo.com/images/E/ethers-logo-D5B86204D8-seeklogo.com.png",
  //   ],
  //   imageUrl: "https://www.svgrepo.com/show/373788/light-solidity.svg",
  //   light: true,
  // },

  // {
  //   id: "5",
  //   title: "Soft Skills",
  //   text: "Bringing attentive listening and proactive involvement to deeply understand the needs of my clients / manager / lead tech, in order to deliver the best solutions.",
  //   backgroundUrl: "assets/benefits/card-6.svg",
  //   iconUrl: [""],
  //   imageUrl: "",
  // },
];

export const testimonials = [
  {
    id: "0",
    review: "Hugo s'est très vite intégré avec aisance.",
    reviewSecondPart: "Il est très rigoureux dans son travail.",
    author: "Angèle Le Névé",
    position: "Directrice de production",
    company: "ARTE France",
    relatedJob: "Video editor for 2 years",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3541/3541871.png",
  },
  {
    id: "1",
    review:
      "Hugo est un très bon élément, très agréable. Il a su s'intégrer parfaitement dans l'entreprise et a fait preuve de beaucoup d'autonomie. Merci Hugo pour ton travail !",
    author: "Rémi Lombard",
    position: "Manager",
    company: "Picsprod",
    relatedJob: "Internship and freelance job as video editor",
    imgUrl:
      "https://res.cloudinary.com/dxaqv2hww/image/upload/v1720966861/1659973025477_jw3v7u.jpg",
  },
  {
    id: "2",
    review:
      "Nous avons été très contents d'Hugo, qui s'est très bien intégré dans notre équipe. Il nous a fourni un travail de qualité.",
    author: "Grégoire Louge",
    position: "Directeur",
    company: "Hipolito",
    relatedJob: "Intership as a video editor",
    imgUrl:
      "https://res.cloudinary.com/dxaqv2hww/image/upload/v1720967719/16197122890542_mpp3j5.jpg",
  },
];

export const socials = [
  {
    id: "0",
    title: "GitHub",
    iconUrl:
      "https://res.cloudinary.com/dxaqv2hww/image/upload/v1720969285/github_logo_bkmpkv.png",
    url: "https://github.com/Hugo-Delattre",
  },
  {
    id: "1",
    title: "LinkedIn",
    iconUrl: "https://cdn-icons-png.flaticon.com/256/174/174857.png",
    url: "https://www.linkedin.com/in/hugodelattre/",
  },
  {
    id: "2",
    title: "Malt",
    iconUrl:
      "https://play-lh.googleusercontent.com/pCYfqB1v-c9Phmvjxji_v37Lf1l59fg1pIy17PztwmS2yoRvGtNAgHZlOHQf0AQo_MZv",
    url: "https://www.linkedin.com/in/hugodelattre/",
  },
];
