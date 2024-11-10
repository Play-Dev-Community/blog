import { getUserData } from "@utils/user.utils";
import { useEffect, useState } from "react";

import './SkeletonHeader.scss';

export interface Props {
  title: string;
  desc: string;
  transitionName: string;
}

export default function SkeletonHeader({ title, desc, transitionName }: Props) {
  const [userName, setUsername] = useState<string | null>(null);
  const [pageTitle, setTitle] = useState<string | null>(null);
  const [readyToRender, setReadyToRender] = useState<boolean>(false);

  const headerProps = {
    style: { viewTransitionName: transitionName }
  };

  useEffect(() => {
    const storedUser = getUserData();

    if (!storedUser) return;

    setUsername(storedUser.global_name);
    setTitle(`${userName} | ${title}`);

    setReadyToRender(true);
  });

  if (!readyToRender) {
    return (
      <>
        <div className="skeleton"></div>
        <div className="h-5 w-80 overflow-hidden mt-3">
          <div className="skeleton"></div>
        </div>
      </>
    )
  }

  return (
    <div>
      <h1 {...headerProps} className="text-2xl font-bold sm:text-3xl">{pageTitle}</h1>

      <p className="mb-6 mt-2 italic">{desc}</p>
    </div>
  );
}
