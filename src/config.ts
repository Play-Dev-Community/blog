import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://playdevs.com.br",
  author: "Gabriel Moodlight",
  desc: "Play Devs é uma plataforma de estudos para desenvolvedores, com o objetivo de compartilhar conhecimento, aprender juntos e crescer como profissionais.",
  title: "Play Devs",
  keywords: [
    // Geral sobre a Play Devs
    'play devs',
    'play devs comunidade',
    'play devs site oficial',
    'o que é play devs',
    'play devs desafios',
    'como funciona a play devs',

    // Programação e desenvolvimento
    'comunidade de programação',
    'desenvolvimento web frontend',
    'desenvolvimento web backend',
    'desenvolvimento de software ágil',
    'programação para iniciantes',
    'melhores práticas de desenvolvimento',
    'linguagens de programação populares',
    'como aprender programação',

    // Desafios e hackathons
    'desafios de programação semanais',
    'hackathon para desenvolvedores',
    'desafios de programação online',
    'programação com premiação',
    'como participar de hackathons',

    // Mentoria e aprendizado
    'mentoria de programação online',
    'mentoria para desenvolvedores iniciantes',
    'aprendizado de tecnologia online',
    'dicas para aprender programação rápido',
    'melhores cursos de programação',

    // Eventos e networking
    'eventos de tecnologia 2025',
    'comunidade tech networking',
    'como se conectar com desenvolvedores',
    'eventos de TI para programadores',

    // DevCoins e gamificação
    'como ganhar devcoins',
    'devcoins play devs',
    'sistema de gamificação para programadores',
    'gamificação em aprendizado de tecnologia',

    // Ferramentas e recursos
    'melhores ferramentas para programadores',
    'recursos para desenvolvedores web',
    'ferramentas de programação gratuitas',

    // SEO longo e específico
    'melhores comunidades para aprender programação em 2025',
    'como evoluir na carreira de desenvolvedor com desafios semanais',
    'hackathons que oferecem prêmios para programadores iniciantes',
    'mentoria online para aprender desenvolvimento web rápido',
    'como se destacar em eventos de tecnologia para programadores',

    // Tópicos técnicos
    'frameworks frontend populares',
    'ferramentas para backend developers',
    'melhores práticas de segurança em APIs',
    'desenvolvimento de aplicações escaláveis',
    'como usar JavaScript em projetos web',

    // Diversos e engajamento
    'play devs no Brasil',
    'melhores comunidades tech brasileiras',
    'desenvolvedores unidos na play devs',
    'dicas de programação diárias',
    'tecnologia e inovação em 2025',
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
