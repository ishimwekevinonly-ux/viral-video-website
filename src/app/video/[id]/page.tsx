import { notFound } from "next/navigation";
import VideoPlayer from "@/components/VideoPlayer";
import VideoCard from "@/components/VideoCard";
import { getVideoById, getRelatedVideos, videos } from "@/lib/videos";

export function generateStaticParams() {
  return videos.map((v) => ({ id: v.id }));
}

export default async function VideoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const video = getVideoById(id);

  if (!video) {
    notFound();
  }

  const related = getRelatedVideos(video);

  return (
    <div className="mx-auto max-w-7xl px-4 py-6">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <VideoPlayer video={video} />
        </div>

        <aside className="space-y-4">
          <h2 className="text-lg font-semibold text-white">Up Next</h2>
          <div className="space-y-4">
            {related.length > 0
              ? related.map((v) => (
                  <VideoCard key={v.id} video={v} size="small" />
                ))
              : videos
                  .filter((v) => v.id !== video.id)
                  .slice(0, 4)
                  .map((v) => (
                    <VideoCard key={v.id} video={v} size="small" />
                  ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
