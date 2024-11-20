import satori, { type SatoriOptions } from "satori";
import { Resvg } from "@resvg/resvg-js";
import { type CollectionEntry } from "astro:content";
import postOgImage from "./og-templates/post";
import siteOgImage from "./og-templates/site";
import loadGoogleFonts, { type FontOptions } from "./loadGoogleFont";
import { SITE } from "@config";

const getOptions = async (text?: string): Promise<SatoriOptions> => {

  return {
  width: 1200,
  height: 630,
  embedFont: true,
  fonts: (await loadGoogleFonts(`${SITE.title} ${SITE.author} ${SITE.desc} ${text}`)) as FontOptions[],
};
}

function svgBufferToPngBuffer(svg: string) {
  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  return pngData.asPng();
}

export async function generateOgImageForPost(post: CollectionEntry<"blog">) {
  const svg = await satori(postOgImage(post), await getOptions(post.data.title));
  return svgBufferToPngBuffer(svg);
}

export async function generateOgImageForSite() {
  const svg = await satori(siteOgImage(), await getOptions());
  return svgBufferToPngBuffer(svg);
}
