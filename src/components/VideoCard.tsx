import Image from "next/image";
import Link from "next/link";
import { Video } from "@/lib/types";
import { formatViews, timeAgo } from "@/lib/videos";

export default function VideoCard({
  video,
  size = "default",
}: {
  video: Video;
  size?: "default" | "small" | "large";
}) {
  const isSmall = size === "small";

  return (
    <Link
      href={`/video/${video.id}`}
      className="group flex flex-col gap-3 rounded-xl transition-transform hover:-translate-y-1"
    >
      <div className="relative overflow-hidden rounded-xl bg-white/5">
        <Image
          src={video.thumbnailUrl}
          alt={video.title}
          width={640}
          height={360}
          className="w-full object-cover transition-transform duration-300 group-hover:scale-105 aspect-video"
        />
        <div className="absolute bottom-2 right-2 rounded-md bg-black/80 px-2 py-0.5 text-xs font-medium text-white">
          {video.duration}
        </div>
        {video.trending && (
          <div className="absolute left-2 top-2 rounded-md bg-gradient-to-r from-red-500 to-pink-600 px-2 py-0.5 text-xs font-bold text-white">
            TRENDING
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/90 shadow-lg">
            <svg
              className="ml-0.5 h-6 w-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <Image
          src={video.creator.avatarUrl}
          alt={video.creator.name}
          width={40}
          height={40}
          className={`rounded-full object-cover ${
            isSmall ? "h-8 w-8" : "h-10 w-10"
          }`}
        />
        <div className="min-w-0 flex-1">
          <h3
            className={`font-semibold text-white line-clamp-2 group-hover:text-red-400 ${
              isSmall ? "text-sm" : "text-base"
            }`}
          >
            {video.title}
          </h3>
          <p className="mt-1 text-sm text-gray-400">{video.creator.name}</p>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>{formatViews(video.views)} views</span>
            <span>·</span>
            <span>{timeAgo(video.createdAt)}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
