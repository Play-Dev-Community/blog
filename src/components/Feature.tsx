import { slugifyStr } from "@utils/slugify";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Feature({ href, frontmatter, secHeading = true }: Props) {
  const { title, description, ogImage } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-bold transition ease-in decoration-dashed hover:underline",
  };

  return (
  <li className="max-w-[100%] sm:max-w-[30%] relative my-2 sm:my-6">
      <a
        href={href}
        className="inline-block text-lg text-skin-accent underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0 visited:text-skin-accent-visited"
      >
        <img src={ ogImage as string } alt={title} className="hidden sm:block rounded-sm" />

        <div>
          {secHeading ? (
            <h2 {...headerProps}>{title}</h2>
          ) : (
            <h3 {...headerProps}>{title}</h3>
          )}

        </div>
      </a>

      <p>{description}</p>

    </li>
  );
}
