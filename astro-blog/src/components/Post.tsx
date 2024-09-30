import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Post({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description, author } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-bold transition ease-in hover:translate-x-[5px] max-w-[100%] whitespace-nowrap overflow-hidden text-ellipsis",
  };

  return (
    <li className="my-6">
      <header className="flex flex-col sm:items-center sm:gap-2 sm:flex-row">
        <a
          href={href}
          className="inline-block text-lg text-skin-accent visited:text-skin-accent-visited max-w-[80%]sm:max-w-[60%]"
        >
          {secHeading ? (
            <h2 {...headerProps}>{title}</h2>
          ) : (
            <h3 {...headerProps}>{title}</h3>
          )}
        </a>
      </header>
      <aside>
        <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} author={author} />
        <p>{description}</p>
      </aside>
    </li>
  );
}
