import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../../public/assets/index";

import Gitlab from "../../public/assets/logos/programming/gitlab.svg";

import next from "../../public/assets/logos/programming/next.svg";

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
  // yourlogo,
];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
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
    imageUrl: roadmap2,
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
    text: "Specialized in web development, I'm efficient in both front-end and back-end technologies, allowing me to add productivity to both sides of your project. I'm constantly keeping me up to date with technologies, clean code principles and architectures.",
  },
  {
    id: "1",
    title: "Collaboration and Communication",
    text: "I value open communication and collaboration, working closely with my clients and team members to ensure project success, committed to deliver results that exceed expectations. Additionally, I'm friendly and easy to work with!",
  },
  {
    id: "2",
    title: "100% of successful past experiences",
    text: "I have successfully completed multiple projects in the past, either in intership, apprenticeship, full-time and freelance jobs: the feedback of my clients and coworkers have always been great, in both the audiovisual and IT sectors.",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
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
    text: "Offering advanced Java skills in developing robust server logic and databases, ensuring seamless performance and security for web applications.",
    backgroundUrl: "assets/benefits/card-2.svg",
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
    backgroundUrl: "assets/benefits/card-3.svg",
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
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: [
      "https://www.svgrepo.com/show/373788/light-solidity.svg",
      "https://seeklogo.com/images/E/ethers-logo-D5B86204D8-seeklogo.com.png",
    ],
    imageUrl:
      "https://seeklogo.com/images/E/ethers-logo-D5B86204D8-seeklogo.com.png",
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

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
