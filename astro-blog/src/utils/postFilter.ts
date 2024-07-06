import { SITE } from "@config";
import type { CollectionEntry } from "astro:content";

const postFilter = ({ data }: CollectionEntry<"blog">) => {

  const isPublishTimePassed =
    Date.now() >
    new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;

  const isPublic = data.students === null || data.students === undefined || !data.students.length

  return !data.draft && (import.meta.env.DEV || isPublishTimePassed) && isPublic;
};

export default postFilter;
