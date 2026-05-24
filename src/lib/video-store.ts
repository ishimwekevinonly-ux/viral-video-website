import fs from "fs";
import path from "path";
import { Video } from "./types";
import { videos as seedVideos } from "./videos";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "videos.json");

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function ensureDataFile() {
  ensureDataDir();
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(seedVideos, null, 2), "utf-8");
  }
}

export function getAllVideos(): Video[] {
  ensureDataFile();
  const raw = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(raw) as Video[];
}

export function getVideoByIdFromStore(id: string): Video | undefined {
  return getAllVideos().find((v) => v.id === id);
}

export function addVideo(video: Video): Video {
  const all = getAllVideos();
  all.push(video);
  ensureDataDir();
  fs.writeFileSync(DATA_FILE, JSON.stringify(all, null, 2), "utf-8");
  return video;
}

export function updateVideo(
  id: string,
  updates: Partial<Video>,
): Video | null {
  const all = getAllVideos();
  const idx = all.findIndex((v) => v.id === id);
  if (idx === -1) return null;
  all[idx] = { ...all[idx], ...updates };
  ensureDataDir();
  fs.writeFileSync(DATA_FILE, JSON.stringify(all, null, 2), "utf-8");
  return all[idx];
}

export function deleteVideo(id: string): boolean {
  const all = getAllVideos();
  const filtered = all.filter((v) => v.id !== id);
  if (filtered.length === all.length) return false;
  ensureDataDir();
  fs.writeFileSync(DATA_FILE, JSON.stringify(filtered, null, 2), "utf-8");
  return true;
}

export function getNextId(): string {
  const all = getAllVideos();
  const maxId = all.reduce((max, v) => {
    const num = parseInt(v.id, 10);
    return isNaN(num) ? max : Math.max(max, num);
  }, 0);
  return String(maxId + 1);
}
