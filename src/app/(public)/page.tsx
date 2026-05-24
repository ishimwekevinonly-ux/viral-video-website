import Hero from "@/components/Hero";
import VideoGrid from "@/components/VideoGrid";
import CategoryPills from "@/components/CategoryPills";
import { getVideos, getTrendingVideos } from "@/lib/dynamic-videos";

export const dynamic = "force-dynamic";

export default function Home() {
  const allVideos = getVideos();
  const trendingVideos = getTrendingVideos();
  const featuredVideo = trendingVideos[0];

  return (
    <>
      {featuredVideo && <Hero video={featuredVideo} />}

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-10">
        <CategoryPills />

        <VideoGrid
          videos={trendingVideos}
          title="Trending Now"
          subtitle="The hottest videos everyone is watching"
        />

        <VideoGrid
          videos={allVideos}
          title="All Videos"
          subtitle="Explore our full collection"
        />
      </div>
    </>
  );
}
