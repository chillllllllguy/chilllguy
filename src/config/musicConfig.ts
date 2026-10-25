import type { MusicPlayerConfig } from "../types/config";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
  enable: true, // 启用音乐播放器功能
  showFloatingPlayer: true, // 显示悬浮播放器 UI
  floatingEntryMode: "fab", // 悬浮入口模式："default" 为独立悬浮播放器，"fab" 为集成到通用 FAB 组
  // 示例 (请以你的主题实际配置为准)
  mode: "local",
  local: {
    songs: [
      {
        title: "光放て！",
        artist: "柳麻美",
        url: "/misic/ATRI -My Dear Moments- Opening Movie.mp3", // 相对于 public 文件夹的路径
        cover: "/misic/main_sp.jpg", // (可选) 歌曲封面
      },
      {
        title: "Dear Moments",
        artist: "赤尾ひかる",
        url: "/misic/src/Dear Moments.mp3", // 相对于 public 文件夹的路径
        cover: "/misic/main_sp.jpg", // (可选) 歌曲封面
      },
      {
        title: "In Love With Myself",
        artist: "Kalman Chodakiewitz",
        url: "/misic/In Love With Myself Cyberpunk Edgerunners 2 (Original Series Soundtrack).mp3", // 相对于 public 文件夹的路径
        cover: "/misic/ab67616d0000b2733cf1aa2d992aa735cf8cc295.jpg", // (可选) 歌曲封面
      },
      {
        title: "I Really Want to Stay At Your House",
        artist: "Rosa Walton",
        url: "/misic/Cyberpunk Edgerunners “I Really Want to Stay At Your House” by Rosa Walton Music Video.mp3", // 相对于 public 文件夹的路径
        cover: "/misic/500x500.jpg", // (可选) 歌曲封面
      },
    ],
  },
};
