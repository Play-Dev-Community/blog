import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://playdevhub.vercel.app",
  author: "Gabriel Moodlight",
  desc: "Hub de estudos para programação",
  title: "Play Dev",
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
    active: true,
    animated: true
  },
  {
    name: "Github",
    href: "https://gabrielmoodlight.github.io/playdev.github.io/",
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
    href: "https://www.youtube.com/@GabrielMoodlight",
    linkTitle: `${SITE.title} no YouTube`,
    active: true,
  }
];
