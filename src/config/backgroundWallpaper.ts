import type { FullscreenWallpaperConfig } from "../types/config";

export const fullscreenWallpaperConfig: FullscreenWallpaperConfig = {
  enable: true,
  src: {
    desktop: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1230140/ss_b1398d1db33b83830d9055d5df79f120bad9110d.1920x1080.jpg?t=1761759369",
      "https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/03/23/0/29263358.jpg&x=0&y=0&sw=0&sh=0&exp=3600",
      "https://storage.moegirl.org.cn/moegirl/commons/5/56/Wp_ATRI.jpg",
      //"/assets/desktop-banner/2.webp",
      //"/assets/desktop-banner/3.webp",
      //"/assets/desktop-banner/4.webp",
    ],
    mobile: [
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1230140/ss_b1398d1db33b83830d9055d5df79f120bad9110d.1920x1080.jpg?t=1761759369",
      "https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2024/03/23/0/29263358.jpg&x=0&y=0&sw=0&sh=0&exp=3600",
      "https://storage.moegirl.org.cn/moegirl/commons/5/56/Wp_ATRI.jpg",
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
