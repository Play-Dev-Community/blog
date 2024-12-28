import { slugifyStr } from "./slugify";
import type { CollectionEntry } from "astro:content";

interface Tag {
  tag: string;
  tagName: string;
  count: number;
}

const getTopTags = (posts: CollectionEntry<"blog">[]) => {
  // Cria um Map para contar a frequência de cada tag
  const tagFrequency = new Map<string, number>();
  
  // Percorre todos os posts e conta a frequência de cada tag
  posts.forEach(post => {
    post.data.tags.forEach(tag => {
      const slugTag = slugifyStr(tag);
      tagFrequency.set(slugTag, (tagFrequency.get(slugTag) || 0) + 1);
    });
  });
  
  // Cria array de objetos Tag com as contagens
  const tags: Tag[] = Array.from(tagFrequency.entries()).map(([slug, count]) => {
    // Encontra o nome original da tag no primeiro post que a contém
    const originalTag = posts.find(post => 
      post.data.tags.some(tag => slugifyStr(tag) === slug)
    )?.data.tags.find(tag => slugifyStr(tag) === slug);
    
    return {
      tag: slug,
      tagName: originalTag || slug,
      count: count
    };
  });
  
  // Ordena por contagem (decrescente) e retorna apenas as 5 primeiras
  return tags
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);
};

export default getTopTags;
