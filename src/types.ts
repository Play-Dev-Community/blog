import type socialIcons from "@assets/socialIcons";

export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage?: string;
  postPerPage: number;
  scheduledPostMargin: number;
  layoutConfig: Partial<LayoutConfig>;
  keywords?: string[];
};

export type SocialObjects = {
  name: keyof typeof socialIcons;
  href: string;
  active: boolean;
  linkTitle: string;
  animated?: boolean;
}[];

export type LayoutConfig = {
  lightAndDarkMode: boolean;
  textSize: boolean;
  noAnimations: boolean;
  onlyTextMode: boolean;
};