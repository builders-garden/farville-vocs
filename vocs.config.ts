import { defineConfig } from "vocs";

export default defineConfig({
  socials: [
    {
      icon: "warpcast",
      link: "https://warpcast.com/~/channel/farville",
    },
  ],
  title: "Farville",
  //logoUrl: '/farville-logo.jpeg',
  sidebar: [
    {
      text: "Getting Started",
      link: "/getting-started",
    },
    {
      text: "Gameplay",
      link: "/gameplay",
    },
  ],
  topNav: [
    { text: "Learn More", link: "/getting-started" },
    { text: "Play", link: "https://warpcast.com/~/channel/farville" },
  ],
});
