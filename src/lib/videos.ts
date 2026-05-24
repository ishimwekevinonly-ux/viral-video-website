import { Video, Category } from "./types";

export const categories: Category[] = [
  { slug: "all", name: "All", icon: "🔥", color: "from-red-500 to-orange-500" },
  {
    slug: "music",
    name: "Music",
    icon: "🎵",
    color: "from-purple-500 to-pink-500",
  },
  {
    slug: "gaming",
    name: "Gaming",
    icon: "🎮",
    color: "from-green-500 to-emerald-500",
  },
  {
    slug: "comedy",
    name: "Comedy",
    icon: "😂",
    color: "from-yellow-500 to-amber-500",
  },
  {
    slug: "sports",
    name: "Sports",
    icon: "⚽",
    color: "from-blue-500 to-cyan-500",
  },
  {
    slug: "education",
    name: "Education",
    icon: "📚",
    color: "from-indigo-500 to-violet-500",
  },
  {
    slug: "travel",
    name: "Travel",
    icon: "✈️",
    color: "from-teal-500 to-green-500",
  },
  {
    slug: "food",
    name: "Food",
    icon: "🍕",
    color: "from-orange-500 to-red-500",
  },
];

export const videos: Video[] = [
  {
    id: "1",
    title: "Mind-Blowing Street Magic That Fooled Everyone",
    description:
      "Watch as this street magician performs impossible tricks that leave crowds speechless. From levitation to mind reading, these performances will make you question reality.",
    thumbnailUrl: "https://picsum.photos/seed/magic/640/360",
    videoUrl: "",
    youtubeId: "dQw4w9WgXcQ",
    views: 45_200_000,
    likes: 2_100_000,
    shares: 890_000,
    duration: "12:34",
    category: "comedy",
    tags: ["magic", "street performance", "viral", "amazing"],
    creator: {
      name: "MagicMaster",
      avatarUrl: "https://picsum.photos/seed/avatar1/100/100",
      subscribers: "12.5M",
    },
    createdAt: "2026-05-20",
    trending: true,
  },
  {
    id: "2",
    title: "Epic Mountain Bike Trail You Won't Believe Exists",
    description:
      "Join us on the most breathtaking mountain bike trail through the Swiss Alps. Stunning views, heart-pounding drops, and pure adrenaline.",
    thumbnailUrl: "https://picsum.photos/seed/mtb/640/360",
    videoUrl: "",
    youtubeId: "dQw4w9WgXcQ",
    views: 28_700_000,
    likes: 1_500_000,
    shares: 620_000,
    duration: "8:45",
    category: "sports",
    tags: ["mountain biking", "extreme sports", "alps", "adventure"],
    creator: {
      name: "TrailBlazer",
      avatarUrl: "https://picsum.photos/seed/avatar2/100/100",
      subscribers: "8.3M",
    },
    createdAt: "2026-05-18",
    trending: true,
  },
  {
    id: "3",
    title: "Cat vs. Cucumber: The Ultimate Compilation",
    description:
      "The internet's favorite showdown continues! Watch hundreds of cats react to cucumbers in the most hilarious ways possible.",
    thumbnailUrl: "https://picsum.photos/seed/cats/640/360",
    videoUrl: "",
    youtubeId: "dQw4w9WgXcQ",
    views: 92_000_000,
    likes: 5_200_000,
    shares: 3_100_000,
    duration: "15:22",
    category: "comedy",
    tags: ["cats", "funny", "compilation", "animals"],
    creator: {
      name: "PetComedy",
      avatarUrl: "https://picsum.photos/seed/avatar3/100/100",
      subscribers: "25.1M",
    },
    createdAt: "2026-05-15",
    trending: true,
  },
  {
    id: "4",
    title: "Making the Perfect Neapolitan Pizza at Home",
    description:
      "Learn the secrets of authentic Neapolitan pizza from a master pizzaiolo. From dough fermentation to wood-fired perfection.",
    thumbnailUrl: "https://picsum.photos/seed/pizza/640/360",
    videoUrl: "",
    youtubeId: "dQw4w9WgXcQ",
    views: 18_400_000,
    likes: 980_000,
    shares: 450_000,
    duration: "22:10",
    category: "food",
    tags: ["cooking", "pizza", "italian", "recipe"],
    creator: {
      name: "ChefMario",
      avatarUrl: "https://picsum.photos/seed/avatar4/100/100",
      subscribers: "6.7M",
    },
    createdAt: "2026-05-12",
    trending: true,
  },
  {
    id: "5",
    title: "Lo-Fi Beats to Study and Relax To - 24/7 Live",
    description:
      "Your favorite lo-fi hip hop radio stream. Perfect for studying, working, or just chilling. Featuring the best lo-fi producers.",
    thumbnailUrl: "https://picsum.photos/seed/lofi/640/360",
    videoUrl: "",
    youtubeId: "dQw4w9WgXcQ",
    views: 156_000_000,
    likes: 8_900_000,
    shares: 2_300_000,
    duration: "LIVE",
    category: "music",
    tags: ["lo-fi", "study music", "chill", "beats"],
    creator: {
      name: "ChillBeats",
      avatarUrl: "https://picsum.photos/seed/avatar5/100/100",
      subscribers: "42.0M",
    },
    createdAt: "2026-05-01",
    trending: true,
  },
  {
    id: "6",
    title: "I Survived 100 Days in Minecraft Hardcore",
    description:
      "Can I survive 100 days in Minecraft hardcore mode? Watch the entire journey from punching trees to defeating the Ender Dragon.",
    thumbnailUrl: "https://picsum.photos/seed/minecraft/640/360",
    videoUrl: "",
    youtubeId: "dQw4w9WgXcQ",
    views: 67_000_000,
    likes: 3_800_000,
    shares: 1_200_000,
    duration: "45:30",
    category: "gaming",
    tags: ["minecraft", "hardcore", "100 days", "survival"],
    creator: {
      name: "BlockBuilder",
      avatarUrl: "https://picsum.photos/seed/avatar6/100/100",
      subscribers: "18.9M",
    },
    createdAt: "2026-05-10",
    trending: true,
  },
  {
    id: "7",
    title: "Hidden Gems of Japan Nobody Talks About",
    description:
      "Forget Tokyo and Kyoto — these secret Japanese locations will blow your mind. From hidden temples to underground cities.",
    thumbnailUrl: "https://picsum.photos/seed/japan/640/360",
    videoUrl: "",
    youtubeId: "dQw4w9WgXcQ",
    views: 34_500_000,
    likes: 2_000_000,
    shares: 980_000,
    duration: "18:55",
    category: "travel",
    tags: ["japan", "travel", "hidden gems", "exploration"],
    creator: {
      name: "WanderLens",
      avatarUrl: "https://picsum.photos/seed/avatar7/100/100",
      subscribers: "9.4M",
    },
    createdAt: "2026-05-08",
    trending: false,
  },
  {
    id: "8",
    title: "Quantum Computing Explained in 10 Minutes",
    description:
      "Finally understand quantum computing! This simple explainer breaks down qubits, superposition, and entanglement in plain English.",
    thumbnailUrl: "https://picsum.photos/seed/quantum/640/360",
    videoUrl: "",
    youtubeId: "dQw4w9WgXcQ",
    views: 22_100_000,
    likes: 1_300_000,
    shares: 750_000,
    duration: "10:12",
    category: "education",
    tags: ["quantum computing", "science", "technology", "explainer"],
    creator: {
      name: "ScienceNow",
      avatarUrl: "https://picsum.photos/seed/avatar8/100/100",
      subscribers: "15.2M",
    },
    createdAt: "2026-05-05",
    trending: false,
  },
  {
    id: "9",
    title: "Professional Chef Reviews Fast Food Burgers",
    description:
      "A Michelin-star chef blind-tastes and reviews burgers from every major fast food chain. The results might surprise you!",
    thumbnailUrl: "https://picsum.photos/seed/burgers/640/360",
    videoUrl: "",
    youtubeId: "dQw4w9WgXcQ",
    views: 41_800_000,
    likes: 2_400_000,
    shares: 1_100_000,
    duration: "25:40",
    category: "food",
    tags: ["food review", "fast food", "chef", "taste test"],
    creator: {
      name: "GourmetReviews",
      avatarUrl: "https://picsum.photos/seed/avatar9/100/100",
      subscribers: "11.8M",
    },
    createdAt: "2026-05-03",
    trending: false,
  },
  {
    id: "10",
    title: "The Most Insane Basketball Trick Shots Ever",
    description:
      "From half-court shots to blindfolded three-pointers, these basketball trick shots defy the laws of physics.",
    thumbnailUrl: "https://picsum.photos/seed/basketball/640/360",
    videoUrl: "",
    youtubeId: "dQw4w9WgXcQ",
    views: 55_300_000,
    likes: 3_200_000,
    shares: 1_500_000,
    duration: "11:08",
    category: "sports",
    tags: ["basketball", "trick shots", "amazing", "sports"],
    creator: {
      name: "SlamDunkKings",
      avatarUrl: "https://picsum.photos/seed/avatar10/100/100",
      subscribers: "14.6M",
    },
    createdAt: "2026-04-28",
    trending: false,
  },
  {
    id: "11",
    title: "Baby's First Words Melt Hearts Worldwide",
    description:
      "This adorable baby's first words went viral overnight. Watch the heartwarming moment that has everyone talking.",
    thumbnailUrl: "https://picsum.photos/seed/baby/640/360",
    videoUrl: "",
    youtubeId: "dQw4w9WgXcQ",
    views: 78_600_000,
    likes: 6_100_000,
    shares: 4_200_000,
    duration: "3:45",
    category: "comedy",
    tags: ["baby", "cute", "heartwarming", "viral"],
    creator: {
      name: "FamilyMoments",
      avatarUrl: "https://picsum.photos/seed/avatar11/100/100",
      subscribers: "20.3M",
    },
    createdAt: "2026-04-25",
    trending: true,
  },
  {
    id: "12",
    title: "Building a Treehouse Mansion in 7 Days",
    description:
      "Watch us transform a regular tree into a luxury treehouse mansion complete with running water, electricity, and a hot tub!",
    thumbnailUrl: "https://picsum.photos/seed/treehouse/640/360",
    videoUrl: "",
    youtubeId: "dQw4w9WgXcQ",
    views: 39_200_000,
    likes: 2_800_000,
    shares: 1_600_000,
    duration: "32:15",
    category: "education",
    tags: ["DIY", "building", "treehouse", "construction"],
    creator: {
      name: "BuildKing",
      avatarUrl: "https://picsum.photos/seed/avatar12/100/100",
      subscribers: "16.7M",
    },
    createdAt: "2026-04-20",
    trending: false,
  },
];

export function formatViews(views: number): string {
  if (views >= 1_000_000_000) {
    return `${(views / 1_000_000_000).toFixed(1)}B`;
  }
  if (views >= 1_000_000) {
    return `${(views / 1_000_000).toFixed(1)}M`;
  }
  if (views >= 1_000) {
    return `${(views / 1_000).toFixed(1)}K`;
  }
  return views.toString();
}

export function getVideoById(id: string): Video | undefined {
  return videos.find((v) => v.id === id);
}

export function getTrendingVideos(): Video[] {
  return videos.filter((v) => v.trending);
}

export function getVideosByCategory(category: string): Video[] {
  if (category === "all") return videos;
  return videos.filter((v) => v.category === category);
}

export function searchVideos(query: string): Video[] {
  const q = query.toLowerCase();
  return videos.filter(
    (v) =>
      v.title.toLowerCase().includes(q) ||
      v.description.toLowerCase().includes(q) ||
      v.tags.some((t) => t.toLowerCase().includes(q)) ||
      v.creator.name.toLowerCase().includes(q)
  );
}

export function getRelatedVideos(video: Video): Video[] {
  return videos
    .filter((v) => v.id !== video.id && v.category === video.category)
    .slice(0, 4);
}

export function timeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return "Today";
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;
  if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
  return `${Math.floor(diffDays / 365)} years ago`;
}
