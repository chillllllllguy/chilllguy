import clCover from "../../../assets/music/cover/cl.webp?url";
import dazbeeCover from "../../../assets/music/cover/dazbee.webp?url";
import hitoriCover from "../../../assets/music/cover/hitori.webp?url";
import xryxCover from "../../../assets/music/cover/xryx.webp?url";
import type { Song } from "./types";

export const STORAGE_KEY_VOLUME = "music-player-volume";

export const DEFAULT_VOLUME = 0.7;

export const DEFAULT_COVER_URL = "/favicon/favicon.ico";

export const LOCAL_PLAYLIST: Song[] = [
  {
    id: 1,
    title: "光放て！",
    artist: "柳麻美",
    cover: "/assets/desktop-banner/main_sp.jpg",
    url: "/assets/desktop-banner/ATRI -My Dear Moments- Opening Movie.mp3",
    duration: 97,
  },
  {
    id: 2,
    title: "Dear Moments",
    artist: "赤尾ひかる",
    cover: "/assets/desktop-banner/main_sp.jpg",
    url: "/assets/desktop-banner/Dear Moments.mp3",
    duration: 386,
  },
  {
    id: 3,
    title: "In Love With Myself",
    artist: "Kalman Chodakiewitz",
    cover:
      "/assets/desktop-banner/ab67616d0000b2733cf1aa2d992aa735cf8cc295.jpg",
    url: "/assets/desktop-banner/In Love With Myself Cyberpunk Edgerunners 2 (Original Series Soundtrack).mp3",
    duration: 174,
  },
  {
    id: 4,
    title: "I Really Want to Stay At Your House",
    artist: "Rosa Walton",
    cover: "/assets/desktop-banner/500x500.jpg",
    url: "/assets/desktop-banner/Cyberpunk Edgerunners “I Really Want to Stay At Your House” by Rosa Walton Music Video.mp3",
    duration: 262,
  },
];

export const DEFAULT_SONG: Song = {
  title: "Sample Song",
  artist: "Sample Artist",
  cover: DEFAULT_COVER_URL,
  url: "",
  duration: 0,
  id: 0,
};

export const DEFAULT_METING_API =
  "https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r";
export const DEFAULT_METING_ID = "14164869977";
export const DEFAULT_METING_SERVER = "netease";
export const DEFAULT_METING_TYPE = "playlist";

export const ERROR_DISPLAY_DURATION = 3000;
export const SKIP_ERROR_DELAY = 1000;
