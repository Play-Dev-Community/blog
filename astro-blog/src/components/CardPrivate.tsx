import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";
import { useEffect, useState } from "react";
import { getUserData } from "@utils/user.utils";

export interface CardPrivateProps {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

const CardPrivate: React.FC<CardPrivateProps> = ({ href, frontmatter, secHeading = true }: CardPrivateProps) => {
  const [studentID, setStudentID] = useState<string | null>(null);
  const [isStudentClass, setStudentClass] = useState<boolean>(false);

  const { title, pubDatetime, modDatetime, description, students } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium transition ease-in decoration-dashed hover:underline",
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
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
      </a>
      <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
      <p>{description}</p>
    </li>
  );
}

export default CardPrivate;
