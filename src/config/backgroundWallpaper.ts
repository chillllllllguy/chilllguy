import type { FullscreenWallpaperConfig } from "../types/config";

export const fullscreenWallpaperConfig: FullscreenWallpaperConfig = {
  enable: true,
  src: {
    desktop: [
      "/assets/desktop-banner/1cdc83e5624979a0e69b7bdb3417ukd5.jpg",
      "/assets/desktop-banner/179294304015291_P29263358.jpg",
      "/assets/desktop-banner/f651700e9672b0a3ad88abceea183qp5.jpg",
    ],
    mobile: [
      "/assets/desktop-banner/1cdc83e5624979a0e69b7bdb3417ukd5.jpg",
      "/assets/desktop-banner/179294304015291_P29263358.jpg",
      "/assets/desktop-banner/f651700e9672b0a3ad88abceea183qp5.jpg",
    ],
  },
  position: "center",
  carousel: {
    enable: true,
    interval: 5,
  },
  zIndex: -1,
  opacity: 0.8,
  blur: 1,
  switchable: true,
  overlay: {
    opacity: 0.8, // 壁纸不透明度，0-1
    blur: 1.5, // 背景模糊半径（px）
    cardOpacity: 0.8, // 卡片不透明度，0-1
    switchable: {
      opacity: true,
      blur: true,
      cardOpacity: true,
    },
  },
  fullscreen: {
    switchable: {
      opacity: true,
      blur: true,
    },
  },
};
