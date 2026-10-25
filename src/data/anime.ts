// 本地番剧数据配置
export interface AnimeItem {
  title: string;
  status: "watching" | "completed" | "planned";
  rating: number;
  cover: string;
  description: string;
  episodes: string;
  year: string;
  genre: string[];
  studio: string;
  link: string;
  progress: number;
  totalEpisodes: number;
  startDate: string;
  endDate: string;
}

const localAnimeList: AnimeItem[] = [
  {
    title: "孤獨搖滾",
    status: "completed",
    rating: 8,
    cover: "./band.jpg",
    description: "一輩子的樂團",
    episodes: "12",
    year: "2022",
    genre: ["band"],
    studio: "CloverWorks",
    link: "https://www.netflix.com/tw/title/81641170?source=35&fromWatch=true",
    progress: 12,
    totalEpisodes: 12,
    startDate: "2024-04",
    endDate: "2024-04",
  },
  {
    title: "Cyberpunk: Edgerunners 1",
    status: "completed",
    rating: 10,
    cover: "./cyber.jpg",
    description: "一起去月球",
    episodes: "10",
    year: "2022",
    genre: ["cyberpunk"],
    studio: "Trigger",
    link: "https://www.netflix.com/tw/title/81054853",
    progress: 10,
    totalEpisodes: 10,
    startDate: "2026-06",
    endDate: "2026-06",
  },
  {
    title: "Cyberpunk: Edgerunners 2",
    status: "completed",
    rating: 10,
    cover: "./cyber2.jpg",
    description: "心情複雜",
    episodes: "10",
    year: "2026",
    genre: ["cyberpunk"],
    studio: "Trigger",
    link: "https://www.netflix.com/tw/title/81054853",
    progress: 10,
    totalEpisodes: 10,
    startDate: "2026-10",
    endDate: "2026-10",
  },
  /*
	{
		title: "Lycoris Recoil",
		status: "completed",
		rating: 9.8,
		cover: "/assets/anime/lkls.webp",
		description: "Girl's gunfight",
		episodes: "12 episodes",
		year: "2022",
		genre: ["Action", "Slice of life"],
		studio: "A-1 Pictures",
		link: "https://www.bilibili.com/bangumi/media/md28338623",
		progress: 12,
		totalEpisodes: 12,
		startDate: "2022-07",
		endDate: "2022-09",
	},
	{
		title: "Yowamushi Pedal",
		status: "watching",
		rating: 9.5,
		cover: "/assets/anime/rynh.webp",
		description: "Girl's daily life, sweet and healing",
		episodes: "12 episodes",
		year: "2015",
		genre: ["Daily life", "Healing"],
		studio: "Nexus",
		link: "https://www.bilibili.com/bangumi/media/md2590",
		progress: 8,
		totalEpisodes: 12,
		startDate: "2015-07",
		endDate: "2015-09",
	},
	{
		title: "Asteroid in Love",
		status: "watching",
		rating: 9.2,
		cover: "/assets/anime/laxxx.webp",
		description: "Meeting girls among the stars, pure love and healing",
		episodes: "12 episodes",
		year: "2020",
		genre: ["Romance", "Healing"],
		studio: "Doga Kobo",
		link: "https://www.bilibili.com/bangumi/media/md28224128",
		progress: 5,
		totalEpisodes: 12,
		startDate: "2020-01",
		endDate: "2020-03",
	},
	{
		title: "Is the Order a Rabbit?",
		status: "planned",
		rating: 9.0,
		cover: "/assets/anime/tz1.webp",
		description: "A group of girls' warm daily life",
		episodes: "12 episodes",
		year: "2014",
		genre: ["Daily life", "Healing"],
		studio: "White Fox",
		link: "https://www.bilibili.com/bangumi/media/md2762",
		progress: 12,
		totalEpisodes: 12,
		startDate: "2014-04",
		endDate: "2014-06",
	},
	{
		title: "The Secret of the Magic Girl",
		status: "watching",
		rating: 9.0,
		cover: "/assets/anime/cmmn.webp",
		description: "Muli, Muli!",
		episodes: "12 episodes",
		year: "2024",
		genre: ["Daily life", "Healing", "Magic"],
		studio: "C2C",
		link: "https://www.bilibili.com/bangumi/media/md26625039",
		progress: 8,
		totalEpisodes: 12,
		startDate: "2025-07",
		endDate: "2025-10",
	},
	*/
];

export default localAnimeList;
