import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { generateOgImageForPost } from "@utils/generateOgImages";
import { slugifyStr } from "@utils/slugify";

export async function getStaticPaths() {
  const posts = await getCollection("blog").then((p: any) =>
    p.filter(({ data }: any) => !data.draft)
  );

  return posts.map((post: any) => ({
    params: { slug: slugifyStr(post.data.title) },
    props: { post }
  }));
}

export const GET: APIRoute = async ({ props }) => {
  if (!props || !props.post) {
    return new Response('Post não encontrado', {
      status: 404,
      headers: { "Content-Type": "text/plain" },
    });
  }

  const post = props.post as CollectionEntry<"blog">;
  
  return new Response(await generateOgImageForPost(post), {
    headers: { "Content-Type": "image/png" },
  });
}
