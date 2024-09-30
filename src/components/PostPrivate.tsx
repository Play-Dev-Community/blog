import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";
import { useEffect, useState } from "react";
import { getUserData } from "@utils/user.utils";

export interface PostPrivateProps {
  href?: string;
  frontmatter: CollectionEntry<"private">["data"];
  secHeading?: boolean;
}

const PostPrivate: React.FC<PostPrivateProps> = ({ href, frontmatter, secHeading = true }: PostPrivateProps) => {
  const [studentID, setStudentID] = useState<string | null>(null);
  const [isStudentClass, setStudentClass] = useState<boolean>(false);

  const { title, pubDatetime, modDatetime, description, author, students } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-bold transition ease-in decoration-dashed hover:underline",
  };

  useEffect(() => {

    if (!getUserData()) return;

    const storedUser = getUserData();
    
    setStudentID(storedUser.id);
    setStudentClass(students!.includes(studentID!));
  });

  if (isStudentClass)
  return (
    <li className="my-6">
      <a
        href={href}
        className="inline-block text-lg text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0 visited:text-skin-accent-visited"
      >
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
      </a>
      <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} author={author} />
      <p>{description}</p>
    </li>
  );
}

export default PostPrivate;
