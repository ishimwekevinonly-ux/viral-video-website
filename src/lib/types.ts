export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  youtubeId: string;
  views: number;
  likes: number;
  shares: number;
  duration: string;
  category: string;
  tags: string[];
  creator: {
    name: string;
    avatarUrl: string;
    subscribers: string;
  };
  createdAt: string;
  trending: boolean;
}

export interface Category {
  slug: string;
  name: string;
  icon: string;
  color: string;
}
