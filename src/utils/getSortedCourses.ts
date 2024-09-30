import type { CollectionEntry } from "astro:content";
import courseFilter from "./courseFilter";

const getSortedCourses = (courses: CollectionEntry<"courses">[]) => {
  return courses
    .filter(courseFilter)
    .sort(
      (a, b) =>
        Math.floor(
          new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() / 1000
        ) -
        Math.floor(
          new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime() / 1000
        )
    );
};

export default getSortedCourses;
