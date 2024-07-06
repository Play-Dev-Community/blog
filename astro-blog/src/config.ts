import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://playdev.github.io/", // replace this with your deployed domain
  author: "Gabriel Moodlight",
  desc: "Play Dev",
  title: "Play Dev: Hub",
  ogImage: "astropaper-og.jpg",
  postPerPage: 5,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  layoutConfig: {
    lightAndDarkMode: true
  }
};

export const LOCALE = {
  lang: "pt-br", // html lang code. Set this empty and default will be "en"
  langTag: ["pt-BR"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: true,
  svg: false,
  width: 100,
  height: 100
};

export const SOCIALS: SocialObjects = [
  {
    name: "Discord",
    href: "https://discord.gg/kUDSYE7Y",
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
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on YouTube`,
    active: true,
  }
];
