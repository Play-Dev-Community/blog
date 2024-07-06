import { SITE } from "@config";
import type { CollectionEntry } from "astro:content";

const privatePostFilter = ({ data }: CollectionEntry<"blog">) => {

  const isPublishTimePassed =
    Date.now() >
    new Date(data.pubDatetime).getTime() - SITE.scheduledPostMargin;

  const isPrivate = data.students?.length;

  return !data.draft &&
  (import.meta.env.DEV || isPublishTimePassed) &&
  isPrivate;
};

export default privatePostFilter;
