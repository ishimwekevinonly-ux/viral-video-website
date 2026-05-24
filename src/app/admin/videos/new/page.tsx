import VideoForm from "@/components/VideoForm";

export default function NewVideoPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Upload Video</h2>
        <p className="text-gray-400">Add a new video to your collection</p>
      </div>
      <VideoForm mode="create" />
    </div>
  );
}
