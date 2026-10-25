import type { ProfileConfig } from "../types/config";

// 个人资料配置
export const profileConfig: ProfileConfig = {
  avatar: "assets/images/avaterr.jpg", // 相对于 /src 目录。如果以 '/' 开头，则相对于 /public 目录
  name: "CHILLGUY",
  bio: "群除我佬",
  typewriter: {
    enable: true, // 启用个人简介打字机效果
    speed: 80, // 打字速度（毫秒）
  },
  links: [
    {
      name: "GitHub",
      icon: "fa7-brands:github",
      url: "https://github.com/chillllllllguy",
    },
    {
      name: "Linkedin",
      icon: "fa7-brands:square-linkedin",
      url: "https://www.linkedin.com/in/%E8%8A%AB%E7%B6%BA-%E5%BC%B5-9303413a3/",
    },
    {
      name: "Steam",
      icon: "fa7-brands:square-steam",
      url: "https://steamcommunity.com/profiles/76561199830926080",
    },
  ],
};
