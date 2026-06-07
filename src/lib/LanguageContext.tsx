import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "fr";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, section?: string) => any;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// Simple dictionary for bilingual text
const dictionary: Record<string, Record<Language, any>> = {
  // Navigation
  nav_skills: { fr: "Compétences", en: "Skills" },
  nav_work: { fr: "Projets", en: "Work" },
  nav_about: { fr: "À propos", en: "About me" },
  nav_hiring: { fr: "Recruter", en: "Hiring" },
  
  // Hero
  hero_title: { fr: "Hugo Delattre", en: "Hugo Delattre" },
  hero_subtitle: { fr: "Ingénieur Logiciel Fullstack", en: "Fullstack Software Engineer" },
  hero_trusted: { fr: "Ils me font confiance", en: "My work and I are trusted by" },
  hero_available: { fr: "Je suis actuellement disponible pour des missions en freelance ou offres de CDI", en: "I'm currently available for freelance work or permanent contract offers." },
  hero_available_sub: { fr: "C'est votre jour de chance on dirait !", en: "Seems like you're in luck!" },

  // Skills Header
  skills_title: { fr: "Mes compétences dev...", en: "My dev skills..." },
  skills_subtitle: { fr: "...qui feront de votre projet web une réussite 🚀", en: "...that will make your web project a success 🚀" },
  skills_see_more: { fr: "Voir plus", en: "See more" },
  skills_advanced: { fr: "Compétences avancées", en: "Advanced skills" },
  skills_intermediate: { fr: "Compétences intermédiaires", en: "Intermediate skills" },

  // Skills Cards
  "Front-end development": { fr: "Développement Front-end", en: "Front-end development" },
  "Back-end development": { fr: "Développement Back-end", en: "Back-end development" },
  "Cloud engineering": { fr: "Cloud & Data", en: "Cloud engineering" },
  "Collaboration": { fr: "Collaboration", en: "Collaboration" },
  
  "Bringing expertise in crafting engaging, accessible and user-friendly interfaces, using TypeScript, React and its modern ecosystem.": {
    fr: "Expertise dans la création d'interfaces engageantes, accessibles et intuitives, utilisant TypeScript, React et son écosystème moderne.",
    en: "Bringing expertise in crafting engaging, accessible and user-friendly interfaces, using TypeScript, React and its modern ecosystem."
  },
  "Proficient in building robust APIs and scalable backend architectures. Whether it's Java with Spring Boot, Node.js with NestJS, or Python with Flask, I easily transition between environments to deliver performance and security.": {
    fr: "Conception d'API robustes et d'architectures back-end scalables. Je passe facilement de Python avec Flask à Java avec Spring Boot à Node.js.",
    en: "Proficient in building robust APIs and scalable backend architectures. I easily transition between Python with Flask, Java with Spring Boot, and Node.js."
  },
  "Designing and implementing scalable cloud architectures, optimized for performance, high availability, and cost efficiency.": {
    fr: "Conception et déploiement d'architectures cloud scalables, optimisées pour la performance, la haute disponibilité et les coûts.",
    en: "Designing and implementing scalable cloud architectures, optimized for performance, high availability, and cost efficiency."
  },
  "I'm confident with the tools and workflows needed to work efficiently in a team, as well as bringing attentive listening to deeply understand the needs of my clients and managers.": {
    fr: "Maîtrise des outils et workflows collaboratifs pour travailler efficacement en équipe. Écoute active pour comprendre pleinement les besoins de mes clients et managers.",
    en: "I'm confident with the tools and workflows needed to work efficiently in a team, as well as bringing attentive listening to deeply understand the needs of my clients and managers."
  },

  "Angular (with Signals)": { fr: "Angular (avec Signals)", en: "Angular (with Signals)" },
  "Java / Spring Boot, Node.js / NestJS, Python / Flask, PostgreSQL, REST APIs, Swagger": {
    fr: "Java / Spring Boot, Node.js / NestJS, Python / Flask, PostgreSQL, REST APIs, Swagger",
    en: "Java / Spring Boot, Node.js / NestJS, Python / Flask, PostgreSQL, REST APIs, Swagger"
  },
  "AWS (S3, Lambda, Glue, EC2), cost-optimization": { fr: "AWS (S3, Lambda, Glue, EC2), optimisation des coûts", en: "AWS (S3, Lambda, Glue, EC2), cost-optimization" },
  "AWS (S3, Lambda, Glue, EC2), Docker, Terraform, cost-optimization": { fr: "AWS (S3, Lambda, Glue, EC2), Docker, Terraform, optimisation des coûts", en: "AWS (S3, Lambda, Glue, EC2), Docker, Terraform, cost-optimization" },
  "AWS (S3, Lambda, Glue, EC2), Docker, Terraform, ClickHouse, data compression, cost-optimization": { fr: "AWS (S3, Lambda, Glue, EC2), Docker, Terraform, ClickHouse, compression de données, optimisation des coûts", en: "AWS (S3, Lambda, Glue, EC2), Docker, Terraform, ClickHouse, data compression, cost-optimization" },
  "AI Integration (LLM APIs, RAG, ...)": { fr: "Intégration d'IA (APIs de LLM, RAG, ...)", en: "AI Integration (LLM APIs, RAG, ...)" },
  "Kubernetes, AI Integration (LLM APIs, RAG, ...)": { fr: "Kubernetes, Intégration d'IA (APIs de LLM, RAG, ...)", en: "Kubernetes, AI Integration (LLM APIs, RAG, ...)" },
  "Kubernetes, GCP, AI Integration (LLM APIs, RAG, ...)": { fr: "Kubernetes, GCP, Intégration d'IA (APIs de LLM, RAG, ...)", en: "Kubernetes, GCP, AI Integration (LLM APIs, RAG, ...)" },

  // About Section
  about_title: { fr: "À propos...", en: "About me..." },
  about_subtitle: { fr: "...et pourquoi vous pourriez me choisir dans votre équipe 🙂", en: "...and why you might choose me as your next team member 🙂" },
  "Technical Expertise": { fr: "Expertise technique", en: "Technical Expertise" },
  "Specialized in web development, I'm efficient adding productivity in both front-end and back-end sides of your project. I'm constantly keeping me up to date with technologies and best practices.": {
    fr: "Spécialisé en développement web, j'apporte de l'efficacité et de la productivité sur les parties front-end et back-end de votre projet. Je me tiens constamment à jour des technologies et bonnes pratiques.",
    en: "Specialized in web development, I'm efficient adding productivity in both front-end and back-end sides of your project. I'm constantly keeping me up to date with technologies and best practices."
  },
  "Great collaboration and communication": { fr: "Collaboration & communication", en: "Great collaboration and communication" },
  "Involved and passionate, I work closely with my clients and team members to ensure project success. I'm also friendly and easy to work with.": {
    fr: "Impliqué et passionné, je travaille en étroite collaboration avec mes clients et les membres de l'équipe pour garantir la réussite du projet. Je suis également d'un contact agréable et facile à vivre.",
    en: "Involved and passionate, I work closely with my clients and team members to ensure project success. I'm also friendly and easy to work with."
  },
  "100% of successful past experiences!": { fr: "100% d'expériences passées réussies !", en: "100% of successful past experiences!" },

  // Projects Header
  projects_title: { fr: "Contributions...", en: "Contributions..." },
  projects_subtitle: { fr: "...et projets sur lesquels j'ai travaillé 🛠️", en: "...and projects I've worked on 🛠️" },
  projects_tab_pro: { fr: "Contributions pro & open source", en: "Professional & open source contributions" },
  projects_tab_personal: { fr: "Projets personnels & étudiants", en: "Personal & student projects" },
  projects_tickets: { fr: "tickets résolus", en: "tickets resolved" },

  // Projects Cards
  "Design and optimization of the A350 sensor data platform on AWS. Built serverless data pipelines and highly scalable infrastructure, achieving a massive x73 reduction in monthly hosting costs.": {
    fr: "Conception et optimisation de la plateforme de données capteurs de l'A350 sur AWS. Développement d'architectures serverless et de pipelines de données hautement scalables. Optimisation majeure des coûts d'infrastructure et de la durée de rétention de la donnée (x73).",
    en: "Design and optimization of the A350 sensor data platform on AWS. Built serverless data pipelines and highly scalable infrastructure, achieving a massive optimization of hosting costs and data retention duration (x73)."
  },
  "ARTE's e-commerce VOD platform. Worked on the front-end (Next, Tailwind), back-office (React, Refine, MUI), and backend architecture (Spring Boot).": {
    fr: "Plateforme e-commerce VOD d'ARTE. J'ai travaillé sur le front-end (Next, Tailwind) et le back office (React, Refine, MUI). Je me suis également penché sur l'architecture du back-end (Spring Boot).",
    en: "ARTE's e-commerce VOD platform. Worked on the front-end (Next, Tailwind), back-office (React, Refine, MUI), and backend architecture (Spring Boot)."
  },
  "ARTE's educational platform. Contributed to component integration, front-end development (Next, Storybook, Sass), back-office development, web accessibility (a11y), and internationalization (FR/EN/DE).": {
    fr: "Plateforme éducative d'ARTE. J'y ai principalement travaillé sur de l'intégration de composants, développement du front-end (Next, Storybook, Sass), et développement du back office, ainsi que sur l'accessibilité et l'internationalisation (fr/en/de).",
    en: "ARTE's educational platform. Contributed to component integration, front-end development (Next, Storybook, Sass), back-office development, web accessibility (a11y), and internationalization (FR/EN/DE)."
  },
  "Film festival supported by ARTE and Chanel. Contributed to front-end and back-office maintenance tickets.": {
    fr: "Festival de cinéma soutenu par ARTE et Chanel. J'y ai contribué sur des tickets de maintenance du front-end et back office.",
    en: "Film festival supported by ARTE and Chanel. Contributed to front-end and back-office maintenance tickets."
  },
  "Contributing to open source in my free time to sharpen my skills. Submitted PRs to TailwindCSS, Tanstack, and Storybook repositories.": {
    fr: "Contributions régulières à des dépôts open source (TailwindCSS, Tanstack, Storybook) pour me confronter à de nouvelles bases de code et collaborer avec la communauté.",
    en: "Contributing to open source in my free time to sharpen my skills. Submitted PRs to TailwindCSS, Tanstack, and Storybook repositories."
  },
  "Multiplayer mini-games app. Served as the front-end lead, training the team on React architecture best practices while collaborating with the back-end lead on Spring Boot development.": {
    fr: "Application de mini-jeux multijoueur : En tant que référent front-end de ce projet, j'ai eu la responsabilité de former l'équipe aux bonnes pratiques et architectures React, tout en progressant moi-même en Spring Boot auprès du référent back-end.",
    en: "Multiplayer mini-games app. Served as the front-end lead, training the team on React architecture best practices while collaborating with the back-end lead on Spring Boot development."
  },
  "E-commerce platform built with Next.js. Features user cart management, authentication, JWT, REST API, and Stripe payments.": {
    fr: "Plateforme e-commerce réalisée en Next.js. Mise en place d'un panier utilisateur, authentification, JWT, API Rest, commandes Stripe, ...",
    en: "E-commerce platform built with Next.js. Features user cart management, authentication, JWT, REST API, and Stripe payments."
  },
  "2D game developed in Java, inspired by early Zelda games, with a strong focus on Object-Oriented Programming (OOP) design patterns.": {
    fr: "Jeu 2D développé à deux en Java, inspiré des premiers Zelda et mettant l'accent sur la programmation orientée objet.",
    en: "2D game developed in Java, inspired by early Zelda games, with a strong focus on Object-Oriented Programming (OOP) design patterns."
  },
  "Social travel application. Acted as front-end lead and product owner within a team of 5 developers.": {
    fr: "Application de voyage social. Dans le cadre de ce projet j'étais référent front-end et product owner au sein d'une équipe de 5 développeurs.",
    en: "Social travel application. Acted as front-end lead and product owner within a team of 5 developers."
  },

  // Testimonials
  "Production Director": { fr: "Directrice de production", en: "Production Director" },
  "Manager": { fr: "Manager", en: "Manager" },
  "Service Manager": { fr: "Service Manager", en: "Service Manager" },
  "Director": { fr: "Directeur", en: "Director" },
  "Hugo integrated very quickly and with ease.": { fr: "Hugo s'est très vite intégré avec aisance.", en: "Hugo integrated very quickly and with ease." },
  "He is very rigorous in his work.": { fr: "Il est très rigoureux dans son travail.", en: "He is very rigorous in his work." },
  "Hugo is a great asset and very pleasant to work with. He integrated perfectly into the company and showed a lot of autonomy. Thank you Hugo for your work!": {
    fr: "Hugo est un très bon élément, très agréable. Il a su s'intégrer parfaitement dans l'entreprise et a fait preuve de beaucoup d'autonomie. Merci Hugo pour ton travail !",
    en: "Hugo is a great asset and very pleasant to work with. He integrated perfectly into the company and showed a lot of autonomy. Thank you Hugo for your work!"
  },
  "I worked with Hugo for two years. He is a very meticulous developer, capable of gaining a precise and deep understanding of the problems he needs to solve, and finding clean and efficient solutions.": {
    fr: "J'ai travaillé avec Hugo pendant deux ans. Il est un développeur très méticuleux, capable d'obtenir une compréhension précise et profonde des problématiques qu'il doit résoudre, et de trouver des solutions propres et efficaces.",
    en: "I worked with Hugo for two years. He is a very meticulous developer, capable of gaining a precise and deep understanding of the problems he needs to solve, and finding clean and efficient solutions."
  },
  "He is also a very enthusiastic colleague and working with him is a pleasure.": {
    fr: "Il est aussi un collègue très enthousiaste et travailler avec lui est un plaisir.",
    en: "He is also a very enthusiastic colleague and working with him is a pleasure."
  },
  "We were very pleased with Hugo, who integrated very well into our team. He provided us with quality work.": {
    fr: "Nous avons été très contents d'Hugo, qui s'est très bien intégré dans notre équipe. Il nous a fourni un travail de qualité.",
    en: "We were very pleased with Hugo, who integrated very well into our team. He provided us with quality work."
  },

  // Footer & Notification
  footer_copy: { fr: "© 2026 Hugo Delattre. Tous droits réservés.", en: "© 2026 Hugo Delattre. All rights reserved." },
  footer_contact: { fr: "Intéressé par mon profil ? N'hésitez pas à me contacter sur Malt, LinkedIn ou par email à ", en: "Interested in my profile? Feel free to contact me on Malt, LinkedIn, or at " }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("portfolio-lang") as Language;
    if (savedLang === "en" || savedLang === "fr") {
      setLanguageState(savedLang);
    } else {
      const browserLang = navigator.language.split("-")[0] as Language;
      if (browserLang === "en" || browserLang === "fr") {
        setLanguageState(browserLang);
      }
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio-lang", lang);
  };

  const t = (key: string): any => {
    return dictionary[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
