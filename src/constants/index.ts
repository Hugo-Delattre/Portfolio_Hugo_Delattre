import {
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  twitter,
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
  // "https://cdn.discordapp.com/attachments/1156577116889034857/1231565391457812520/picsprod_logo.png?ex=66376ba6&is=6624f6a6&hm=a8ece1b0cd729a1dbd5d99adb22415369220ff7ba3d95b18f5b5175dac4eae8e&",
  "https://www.ecoprod.com/images/membres/2371/_thumb1/hipolito-logo.png",
  // "https://www.arte-studio.fr/wp-content/uploads/2018/04/cropped-ARTE-Studio-logo-noir-2.png",
  "https://www.arte.tv/sites/corporate/wp-content/themes/arte-entreprise/img/arte_logo.png",
  "https://www.reworldmedia.com/wp-content/uploads/2020/03/logo_rm_new_fb.png",
];

//TODO Choose if I keep pro and personal projects separated, or if I keep only the bests personal projects to add them to the global projects list.
//If so it could be "Profesional contributions and side projects" and "Student and personal projects". However the list might grow (Arte Boutique, Arte Radio, Pizza Nova, ...) so it might be better to keep them separated.
//TODO An other idea could be to reduce the size of the cards and to add a "see more" button to see the full list of projects.
export const projects = [
  {
    id: "0",
    title: "Educ'ARTE | ARTE Campus",
    text: "Plateformes éducatives d'ARTE. J'y ai principalement travaillé sur de l'intégration de composants, développement du front-end, et développement de la console d'administration, et légèrement sur le back-end.",
    date: "2024",
    status: "done",
    ticketsSolved: "33",
    imageUrl:
      "https://media.discordapp.net/attachments/1017345529354666045/1237861601659457586/Logo_Educ_2023_bleu_1.png?ex=663d2ff4&is=663bde74&hm=0979bc71a399a8c30dc4d5d80ef03a67a9e8ac487c1b8eb2cfe8f238068d5ada&=&format=webp&quality=lossless&width=592&height=297",
    colorful: true,
  },
  {
    id: "1",
    title: "ARTE Kino",
    text: "Festival de cinéma soutenu par ARTE et Chanel. J'ai travaillé sur le front-end et la console d'administration.",
    date: "May 2023",
    status: "done",
    ticketsSolved: "8",
    imageUrl: "https://www.artekino.eu/static/arte-logo.png",
  },
  {
    id: "2",
    title: "Open source contributions",
    text: "I've done some open source contributions to the repositories of tailwindcss.com and tanstack.com",
    date: "May 2023",
    status: "none",
    ticketsSolved: "0",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Audiovisual work",
    text: "Before my web development career, I worked in the audiovisual field. During those years, I've worked on various projects, such as documentaries for ARTE, events films for PicProd, music video and ads for Hipolito, and much more as a freelancer.",
    date: "May 2023",
    status: "none",
    ticketsSolved: "0",
    imageUrl: roadmap3,
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
    text: "Involved and passionate, I work closely with my clients and team members to ensure project success. I'm also friendly and easy to work with!",
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
      "https://www.svgrepo.com/show/452092/react.svg",
      "https://media.discordapp.net/attachments/1156577116889034857/1231647780590846033/next-js-svgrepo-com.png?ex=6637b861&is=66254361&hm=64e62b6c3935f7541b8f9792cb9e6bd5d5c7a3a7afec6d61cc04bb53cff641ee&=&format=webp&quality=lossless&width=784&height=784",
    ],
    imageUrl: "https://www.svgrepo.com/show/452092/react.svg",
  },
  {
    id: "1",
    title: "Back-end development",
    text: "I'm offering advanced Java and Spring skills in developing robust server logic, ensuring seamless performance and security for web applications.",
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
    text: "I'm confident with the tools and workflows needed to work efficiently in a team, as well as bringing attentive listening to deeply understand the needs of my clients.",
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
      "https://media.licdn.com/dms/image/C4E03AQFTNRAPUxOpKQ/profile-displayphoto-shrink_100_100/0/1659973025477?e=1719446400&v=beta&t=8xUxpNdqPldLp58YC_8cd4br-FpJdJ7Vgvi4t6qX7RI",
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
      "https://media.licdn.com/dms/image/C4D03AQFqGMduhK9TRw/profile-displayphoto-shrink_100_100/0/1619712289054?e=1719446400&v=beta&t=cX17pw1y6_PvXnS6egu3V7rlY1ehINgy8mDv9QiQ86I",
  },
];

export const socials = [
  {
    id: "0",
    title: "GitHub",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "LinkedIn",
    iconUrl: instagram,
    url: "https://www.linkedin.com/in/hugodelattre/",
  },
];
