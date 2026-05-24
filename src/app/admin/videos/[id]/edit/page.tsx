"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import VideoForm from "@/components/VideoForm";
import { Video } from "@/lib/types";

export default function EditVideoPage() {
  const params = useParams<{ id: string }>();
  const [video, setVideo] = useState<Video | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadVideo() {
      try {
        const res = await fetch(`/api/videos/${params.id}`);
        if (!res.ok) {
          setError("Video not found");
          return;
        }
        const data = await res.json();
        setVideo(data);
      } catch {
        setError("Failed to load video");
      } finally {
        setLoading(false);
      }
    }
    loadVideo();
  }, [params.id]);

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-red-500 border-t-transparent" />
      </div>
    );
  }

  if (error || !video) {
    return (
      <div className="py-20 text-center">
        <p className="text-xl text-red-400">{error || "Video not found"}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Edit Video</h2>
        <p className="text-gray-400">Update &ldquo;{video.title}&rdquo;</p>
      </div>
      <VideoForm initialData={video} mode="edit" />
    </div>
  );
}
