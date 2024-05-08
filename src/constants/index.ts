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
  "https://cdn.discordapp.com/attachments/1156577116889034857/1231565391457812520/picsprod_logo.png?ex=66376ba6&is=6624f6a6&hm=a8ece1b0cd729a1dbd5d99adb22415369220ff7ba3d95b18f5b5175dac4eae8e&",
  "https://www.ecoprod.com/images/membres/2371/_thumb1/hipolito-logo.png",
  // "https://www.arte-studio.fr/wp-content/uploads/2018/04/cropped-ARTE-Studio-logo-noir-2.png",
  "https://www.arte.tv/sites/corporate/wp-content/themes/arte-entreprise/img/arte_logo.png",
  "https://www.reworldmedia.com/wp-content/uploads/2020/03/logo_rm_new_fb.png",
];

export const projects = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: "https://images.alphacoders.com/117/1177950.jpg",
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
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
    title: "100% of successful past experiences",
    text: "The feedback of my clients and managers have always been great. Check it out below!",
  },
];

export const benefits = [
  {
    id: "0",
    title: "Front-end development",
    text: "Bringing expertise in crafting engaging and user-friendly interfaces, using TypeScript and its modern frameworks and libraries.",
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
    id: "2",
    title: "DevOps",
    text: "Proficiency hosting and deploying projects on the web, as well as integrating CI/CD for efficient software delivery.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: [
      "https://www.svgrepo.com/show/448226/gitlab.svg",
      "https://www.svgrepo.com/show/448221/docker.svg",
    ],
    imageUrl: "https://www.svgrepo.com/show/448221/docker.svg",
  },
  {
    id: "3",
    title: "Web3",
    text: "Passionately integrating blockchain technologies to create secure and transparent decentralized web applications (for related projects).",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: [
      "https://www.svgrepo.com/show/373788/light-solidity.svg",
      "https://seeklogo.com/images/E/ethers-logo-D5B86204D8-seeklogo.com.png",
    ],
    imageUrl: "https://www.svgrepo.com/show/373788/light-solidity.svg",
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
    id: "5",
    title: "Soft Skills",
    text: "Bringing attentive listening and proactive involvement to deeply understand the needs of my clients / manager / lead tech, in order to deliver the best solutions.",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: [""],
    imageUrl: "",
  },
];

export const testimonials = [
  {
    id: "0",
    review:
      "Hugo s'est très vite intégré avec aisance. Il est très rigoureux dans son travail.",
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
