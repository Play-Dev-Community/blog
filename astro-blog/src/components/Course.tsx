import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"courses">["data"];
  secHeading?: boolean;
}

export default function Course({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description, author } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-bold transition ease-in decoration-dashed hover:underline max-w-[100%] whitespace-nowrap overflow-hidden text-ellipsis",
  };

  return (
    <li className="my-6">
      <header className="flex flex-col sm:items-center sm:gap-2 sm:flex-row">
        <a
          href={href}
          className="inline-block text-lg text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0 visited:text-skin-accent-visited max-w-[80%]sm:max-w-[60%]"
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
