import { Video } from "@/lib/types";
import VideoCard from "./VideoCard";

export default function VideoGrid({
  videos,
  title,
  subtitle,
  columns = 4,
}: {
  videos: Video[];
  title?: string;
  subtitle?: string;
  columns?: 2 | 3 | 4;
}) {
  const gridClass =
    columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : columns === 3
        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

  return (
    <section>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              {title}
            </h2>
          )}
          {subtitle && <p className="mt-1 text-gray-400">{subtitle}</p>}
        </div>
      )}
      <div className={`grid gap-6 ${gridClass}`}>
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            size={columns === 2 ? "large" : "default"}
          />
        ))}
      </div>
    </section>
  );
}
