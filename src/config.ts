import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://playdevs.com.br",
  author: "Gabriel Moodlight",
  desc: "Play Devs é uma plataforma de estudos para desenvolvedores, com o objetivo de compartilhar conhecimento, aprender juntos e crescer como profissionais.",
  title: "Play Devs",
  keywords: [
    'play dev',
    'play devs',
    'devcoins',
    'comunidade de programação',
    'aprendizado de tecnologia',
    'desafios de programação',
    'hackathon de programação',
    'mentoria em programação',
    'desenvolvimento web',
    'desafios semanais de programação',
    'eventos de TI',
    'comunidade tech',
    'desenvolvimento de software',
    'rede de desenvolvedores',
    'comunidade de desenvolvedores',
    'aprendizado em tecnologia',
    'frontend',
    'backend'
  ],
  ogImage: "bg-discord.jpg",
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // Minutes
  layoutConfig: {
    lightAndDarkMode: true,
    noAnimations: true,
    textSize: true
  }
};

export const LOCALE = {
  lang: "pt-br", // html lang code. Set this empty and default will be "en"
  langTag: ["pt-BR"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: true,
  width: 100,
  height: 100
};

export const SOCIALS: SocialObjects = [
  {
    name: "Discord",
    href: "https://discord.gg/ZmxuUhuwfD",
    linkTitle: `${SITE.title} no Discord`,
    active: true
  },
  {
    name: "Github",
    href: "https://github.com/Play-Devs",
    linkTitle: ` ${SITE.title} no Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/groups/1286747911414021",
    linkTitle: `${SITE.title} no Facebook`,
    active: true,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@PlayDevs",
    linkTitle: `${SITE.title} no YouTube`,
    active: true,
  }
];
