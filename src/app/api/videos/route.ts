import { NextResponse } from "next/server";
import { getAllVideos, addVideo, getNextId } from "@/lib/video-store";
import { Video } from "@/lib/types";

export async function GET() {
  const videos = getAllVideos();
  return NextResponse.json(videos);
}

export async function POST(request: Request) {
  const body = await request.json();

  const newVideo: Video = {
    id: getNextId(),
    title: body.title ?? "",
    description: body.description ?? "",
    thumbnailUrl: body.thumbnailUrl ?? "",
    videoUrl: body.videoUrl ?? "",
    youtubeId: body.youtubeId ?? "",
    views: body.views ?? 0,
    likes: body.likes ?? 0,
    shares: body.shares ?? 0,
    duration: body.duration ?? "0:00",
    category: body.category ?? "comedy",
    tags: body.tags ?? [],
    creator: {
      name: body.creator?.name ?? "Admin",
      avatarUrl:
        body.creator?.avatarUrl ??
        "https://picsum.photos/seed/admin/100/100",
      subscribers: body.creator?.subscribers ?? "0",
    },
    createdAt: body.createdAt ?? new Date().toISOString().split("T")[0],
    trending: body.trending ?? false,
  };

  const created = addVideo(newVideo);
  return NextResponse.json(created, { status: 201 });
}
