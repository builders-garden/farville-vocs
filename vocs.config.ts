import { defineConfig } from "vocs";
import { launch_url } from "./docs/constants";

export default defineConfig({
  socials: [
    {
      icon: "warpcast",
      link: "https://warpcast.com/~/channel/farville",
    },
  ],
  title: "Farville Docs",
  logoUrl: "./img/farville-title.png",
  iconUrl: "./img/farville-icon.png",
  sidebar: [
    {
      text: "Getting Started",
      link: "/getting-started",
    },
    {
      text: "Gameplay",
      link: "/gameplay",
    },
    {
      text: "Items & Progress",
      link: "/items-and-progress",
    },
    {
      text: "Collectibles",
      link: "/collectibles",
    },
    {
      text: "Community",
      link: "/community",
    },
  ],
  topNav: [
    {
      text: "Website",
      link: "https://farville.farm",
    },
    {
      text: "Play",
      link: launch_url,
    },
  ],
  theme: {
    variables: {
      color: {
        backgroundAccent: {
          dark: "#16D63F",
          light: "#16D63F",
        },
        backgroundAccentHover: {
          dark: "#12B535",
          light: "#12B535",
        },
        backgroundAccentText: {
          dark: "#000000",
          light: "#000000",
        },
        borderAccent: {
          dark: "#16D63F",
          light: "#16D63F",
        },
        textAccent: {
          dark: "#16D63F",
          light: "#16D63F",
        },
        textAccentHover: {
          dark: "#16D63F",
          light: "#16D63F",
        },
      },
    },
  },
  font: {
    default: {
      google: "Bricolage Grotesque",
    },
  },
});
