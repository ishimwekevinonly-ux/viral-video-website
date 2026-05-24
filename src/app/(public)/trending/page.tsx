import type { Metadata } from "next";
import VideoGrid from "@/components/VideoGrid";
import { getTrendingVideos } from "@/lib/dynamic-videos";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Trending Videos - ViralHub",
  description: "Watch the hottest trending videos right now on ViralHub.",
};

export default function TrendingPage() {
  const trending = getTrendingVideos();

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-400 ring-1 ring-red-500/20">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
          </span>
          Live Trending
        </div>
        <h1 className="mt-4 text-4xl font-extrabold text-white">
          Trending Videos
        </h1>
        <p className="mt-2 text-lg text-gray-400">
          The most-watched videos right now — updated in real time
        </p>
      </div>

      <VideoGrid videos={trending} columns={3} />
    </div>
  );
}
