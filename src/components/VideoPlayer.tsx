"use client";

import { useState } from "react";
import Image from "next/image";
import { Video } from "@/lib/types";
import { formatViews } from "@/lib/videos";

export default function VideoPlayer({ video }: { video: Video }) {
  const [liked, setLiked] = useState(false);
  const [shared, setShared] = useState(false);

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: video.title,
          text: video.description,
          url: window.location.href,
        });
      } catch {
        /* user cancelled */
      }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  }

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-2xl bg-black">
        {video.videoUrl?.trim() ? (
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <video
              className="absolute inset-0 h-full w-full object-cover"
              src={video.videoUrl}
              controls
            />
          </div>
        ) : video.youtubeId ? (
          <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=0&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="flex h-72 items-center justify-center text-center text-white">
            No video source available.
          </div>
        )}
      </div>

      <div className="space-y-4">
        <h1 className="text-xl font-bold text-white sm:text-2xl">
          {video.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src={video.creator.avatarUrl}
              alt={video.creator.name}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-white">{video.creator.name}</p>
              <p className="text-xs text-gray-400">
                {video.creator.subscribers} subscribers
              </p>
            </div>
            <button className="ml-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-gray-200">
              Subscribe
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLiked(!liked)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                liked
                  ? "bg-red-500/20 text-red-400"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <svg
                className="h-5 w-5"
                fill={liked ? "currentColor" : "none"}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
              {formatViews(video.likes + (liked ? 1 : 0))}
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
              {shared ? "Copied!" : "Share"}
            </button>
          </div>
        </div>

        <div className="rounded-xl bg-white/5 p-4">
          <div className="mb-2 flex items-center gap-3 text-sm text-gray-400">
            <span>{formatViews(video.views)} views</span>
            <span>·</span>
            <span>{video.createdAt}</span>
          </div>
          <p className="text-sm leading-relaxed text-gray-300">
            {video.description}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {video.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
