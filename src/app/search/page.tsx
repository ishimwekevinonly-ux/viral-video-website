import type { Metadata } from "next";
import VideoGrid from "@/components/VideoGrid";
import { searchVideos } from "@/lib/videos";

export const metadata: Metadata = {
  title: "Search - ViralHub",
  description: "Search for viral videos on ViralHub.",
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = q ?? "";
  const results = query ? searchVideos(query) : [];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-white">
          {query ? (
            <>
              Results for &ldquo;
              <span className="text-red-400">{query}</span>&rdquo;
            </>
          ) : (
            "Search"
          )}
        </h1>
        {query && (
          <p className="mt-2 text-gray-400">
            {results.length} video{results.length !== 1 ? "s" : ""} found
          </p>
        )}
      </div>

      {!query ? (
        <div className="py-20 text-center">
          <svg
            className="mx-auto mb-4 h-16 w-16 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <p className="text-xl text-gray-400">
            Type something to search for videos
          </p>
        </div>
      ) : results.length > 0 ? (
        <VideoGrid videos={results} columns={3} />
      ) : (
        <div className="py-20 text-center">
          <p className="text-xl text-gray-400">
            No videos found for &ldquo;{query}&rdquo;
          </p>
          <p className="mt-2 text-gray-500">
            Try searching for something else
          </p>
        </div>
      )}
    </div>
  );
}
