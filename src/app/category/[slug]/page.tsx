import type { Metadata } from "next";
import { notFound } from "next/navigation";
import VideoGrid from "@/components/VideoGrid";
import CategoryPills from "@/components/CategoryPills";
import { categories, getVideosByCategory } from "@/lib/videos";

export function generateStaticParams() {
  return categories
    .filter((c) => c.slug !== "all")
    .map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  return {
    title: category
      ? `${category.name} Videos - ViralHub`
      : "Category - ViralHub",
    description: category
      ? `Watch the best ${category.name.toLowerCase()} videos on ViralHub.`
      : "Browse videos by category on ViralHub.",
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const categoryVideos = getVideosByCategory(slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <CategoryPills />

      <div className="mb-8 mt-8">
        <h1 className="text-4xl font-extrabold text-white">
          <span className="mr-3">{category.icon}</span>
          {category.name} Videos
        </h1>
        <p className="mt-2 text-lg text-gray-400">
          {categoryVideos.length} video
          {categoryVideos.length !== 1 ? "s" : ""} in {category.name}
        </p>
      </div>

      {categoryVideos.length > 0 ? (
        <VideoGrid videos={categoryVideos} columns={3} />
      ) : (
        <div className="py-20 text-center">
          <p className="text-xl text-gray-400">
            No videos found in this category yet.
          </p>
        </div>
      )}
    </div>
  );
}
