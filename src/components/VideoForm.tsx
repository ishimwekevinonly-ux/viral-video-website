"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Video } from "@/lib/types";
import { categories } from "@/lib/videos";

interface VideoFormProps {
  initialData?: Video;
  mode: "create" | "edit";
}

export default function VideoForm({ initialData, mode }: VideoFormProps) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const [title, setTitle] = useState(initialData?.title ?? "");
  const [description, setDescription] = useState(
    initialData?.description ?? "",
  );
  const [youtubeId, setYoutubeId] = useState(initialData?.youtubeId ?? "");
  const [thumbnailUrl, setThumbnailUrl] = useState(
    initialData?.thumbnailUrl ?? "",
  );
  const [duration, setDuration] = useState(initialData?.duration ?? "");
  const [category, setCategory] = useState(initialData?.category ?? "comedy");
  const [tags, setTags] = useState(initialData?.tags?.join(", ") ?? "");
  const [creatorName, setCreatorName] = useState(
    initialData?.creator?.name ?? "",
  );
  const [creatorAvatar, setCreatorAvatar] = useState(
    initialData?.creator?.avatarUrl ?? "",
  );
  const [subscribers, setSubscribers] = useState(
    initialData?.creator?.subscribers ?? "",
  );
  const [trending, setTrending] = useState(initialData?.trending ?? false);
  const [views, setViews] = useState(initialData?.views?.toString() ?? "0");
  const [likes, setLikes] = useState(initialData?.likes?.toString() ?? "0");
  const [shares, setShares] = useState(initialData?.shares?.toString() ?? "0");

  function extractYoutubeId(input: string): string {
    const urlMatch = input.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/,
    );
    if (urlMatch) return urlMatch[1];
    if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;
    return input;
  }

  async function handleThumbnailUpload(
    e: React.ChangeEvent<HTMLInputElement>,
  ) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();
      if (res.ok) {
        setThumbnailUrl(data.url);
      } else {
        setError(data.error ?? "Upload failed");
      }
    } catch {
      setError("Failed to upload thumbnail");
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    setSaving(true);

    const videoData = {
      title: title.trim(),
      description: description.trim(),
      youtubeId: extractYoutubeId(youtubeId.trim()),
      thumbnailUrl:
        thumbnailUrl.trim() ||
        `https://picsum.photos/seed/${Date.now()}/640/360`,
      videoUrl: "",
      duration: duration.trim() || "0:00",
      category,
      tags: tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      creator: {
        name: creatorName.trim() || "Admin",
        avatarUrl:
          creatorAvatar.trim() ||
          "https://picsum.photos/seed/admin/100/100",
        subscribers: subscribers.trim() || "0",
      },
      trending,
      views: parseInt(views, 10) || 0,
      likes: parseInt(likes, 10) || 0,
      shares: parseInt(shares, 10) || 0,
    };

    try {
      const url =
        mode === "create"
          ? "/api/videos"
          : `/api/videos/${initialData?.id}`;
      const method = mode === "create" ? "POST" : "PUT";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(videoData),
      });

      if (res.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error ?? "Failed to save video");
      }
    } catch {
      setError("Failed to save video");
    } finally {
      setSaving(false);
    }
  }

  const nonAllCategories = categories.filter((c) => c.slug !== "all");

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-3xl space-y-8">
      {error && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      <section className="space-y-4 rounded-xl border border-white/10 bg-[#111] p-6">
        <h3 className="text-lg font-semibold text-white">Video Details</h3>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-300">
            Title *
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter video title"
            className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder-gray-500 outline-none transition-colors focus:border-red-500"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-300">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your video"
            rows={4}
            className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder-gray-500 outline-none transition-colors focus:border-red-500"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-300">
              YouTube URL or Video ID
            </label>
            <input
              type="text"
              value={youtubeId}
              onChange={(e) => setYoutubeId(e.target.value)}
              placeholder="e.g. dQw4w9WgXcQ or full YouTube URL"
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder-gray-500 outline-none transition-colors focus:border-red-500"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-300">
              Duration
            </label>
            <input
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder="e.g. 12:34"
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder-gray-500 outline-none transition-colors focus:border-red-500"
            />
          </div>
        </div>
      </section>

      <section className="space-y-4 rounded-xl border border-white/10 bg-[#111] p-6">
        <h3 className="text-lg font-semibold text-white">Thumbnail</h3>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          {thumbnailUrl && (
            <Image
              src={thumbnailUrl}
              alt="Thumbnail preview"
              width={160}
              height={90}
              className="rounded-lg object-cover"
            />
          )}
          <div className="flex-1 space-y-3">
            <div>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 disabled:opacity-50"
              >
                {uploading ? "Uploading..." : "Upload Thumbnail"}
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleThumbnailUpload}
                className="hidden"
              />
            </div>
            <div className="text-xs text-gray-500">or provide a URL:</div>
            <input
              type="text"
              value={thumbnailUrl}
              onChange={(e) => setThumbnailUrl(e.target.value)}
              placeholder="https://example.com/thumbnail.jpg"
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-red-500"
            />
          </div>
        </div>
      </section>

      <section className="space-y-4 rounded-xl border border-white/10 bg-[#111] p-6">
        <h3 className="text-lg font-semibold text-white">
          Category &amp; Tags
        </h3>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-300">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white outline-none transition-colors focus:border-red-500"
            >
              {nonAllCategories.map((c) => (
                <option key={c.slug} value={c.slug} className="bg-[#111]">
                  {c.icon} {c.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-300">
              Tags (comma separated)
            </label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="e.g. funny, viral, trending"
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder-gray-500 outline-none transition-colors focus:border-red-500"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            id="trending"
            checked={trending}
            onChange={(e) => setTrending(e.target.checked)}
            className="h-4 w-4 rounded border-white/20 bg-white/5 accent-red-500"
          />
          <label htmlFor="trending" className="text-sm text-gray-300">
            Mark as trending
          </label>
        </div>
      </section>

      <section className="space-y-4 rounded-xl border border-white/10 bg-[#111] p-6">
        <h3 className="text-lg font-semibold text-white">Creator Info</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-300">
              Creator Name
            </label>
            <input
              type="text"
              value={creatorName}
              onChange={(e) => setCreatorName(e.target.value)}
              placeholder="Channel name"
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder-gray-500 outline-none transition-colors focus:border-red-500"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-300">
              Subscribers
            </label>
            <input
              type="text"
              value={subscribers}
              onChange={(e) => setSubscribers(e.target.value)}
              placeholder="e.g. 1.2M"
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder-gray-500 outline-none transition-colors focus:border-red-500"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-300">
              Avatar URL
            </label>
            <input
              type="text"
              value={creatorAvatar}
              onChange={(e) => setCreatorAvatar(e.target.value)}
              placeholder="https://..."
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white placeholder-gray-500 outline-none transition-colors focus:border-red-500"
            />
          </div>
        </div>
      </section>

      <section className="space-y-4 rounded-xl border border-white/10 bg-[#111] p-6">
        <h3 className="text-lg font-semibold text-white">Stats</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-300">
              Views
            </label>
            <input
              type="number"
              value={views}
              onChange={(e) => setViews(e.target.value)}
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white outline-none transition-colors focus:border-red-500"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-300">
              Likes
            </label>
            <input
              type="number"
              value={likes}
              onChange={(e) => setLikes(e.target.value)}
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white outline-none transition-colors focus:border-red-500"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-300">
              Shares
            </label>
            <input
              type="number"
              value={shares}
              onChange={(e) => setShares(e.target.value)}
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-2.5 text-white outline-none transition-colors focus:border-red-500"
            />
          </div>
        </div>
      </section>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-red-500 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-600 disabled:opacity-50"
        >
          {saving
            ? "Saving..."
            : mode === "create"
              ? "Upload Video"
              : "Save Changes"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin")}
          className="rounded-lg border border-white/20 px-6 py-2.5 text-sm font-medium text-gray-300 transition-colors hover:bg-white/5"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
