import { Video } from "./types";
import { getAllVideos, getVideoByIdFromStore } from "./video-store";

export { categories, formatViews, timeAgo } from "./videos";

export function getVideos(): Video[] {
  return getAllVideos();
}

export function getVideoById(id: string): Video | undefined {
  return getVideoByIdFromStore(id);
}

export function getTrendingVideos(): Video[] {
  return getAllVideos().filter((v) => v.trending);
}

export function getVideosByCategory(category: string): Video[] {
  const all = getAllVideos();
  if (category === "all") return all;
  return all.filter((v) => v.category === category);
}

export function searchVideos(query: string): Video[] {
  const q = query.toLowerCase();
  return getAllVideos().filter(
    (v) =>
      v.title.toLowerCase().includes(q) ||
      v.description.toLowerCase().includes(q) ||
      v.tags.some((t) => t.toLowerCase().includes(q)) ||
      v.creator.name.toLowerCase().includes(q),
  );
}

export function getRelatedVideos(video: Video): Video[] {
  return getAllVideos()
    .filter((v) => v.id !== video.id && v.category === video.category)
    .slice(0, 4);
}
