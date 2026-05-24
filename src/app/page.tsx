import Hero from "@/components/Hero";
import VideoGrid from "@/components/VideoGrid";
import CategoryPills from "@/components/CategoryPills";
import { videos, getTrendingVideos } from "@/lib/videos";

export default function Home() {
  const trendingVideos = getTrendingVideos();
  const featuredVideo = trendingVideos[0];

  return (
    <>
      <Hero video={featuredVideo} />

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-10">
        <CategoryPills />

        <VideoGrid
          videos={trendingVideos}
          title="Trending Now"
          subtitle="The hottest videos everyone is watching"
        />

        <VideoGrid
          videos={videos}
          title="All Videos"
          subtitle="Explore our full collection"
        />
      </div>
    </>
  );
}
