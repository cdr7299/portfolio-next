import { SocialData } from "./social.types";

export const social_data: SocialData = {
  titleAccent: "This site serves as my portfolio",
  titleDescription:
    "but is also a playground for my react/next/framer experiments. Check out my social and github!",
  cardData: {
    columns: [
      [
        {
          accentColor: "#36343b",
          title: "Download Resume",
          native: true,
          redirect: "",
          fontColor: "#fff",
        },
        {
          accentColor: "#90c1aa",
          title: "send me a message",
          native: true,
          redirect: "",
          fontColor: "#fff",
        },
      ],
      [
        {
          accentColor: "#0a66c2",
          title: "LinkedIn",
          redirect: "https://www.linkedin.com/in/vineet-sawhney/",
          native: false,
          fontColor: "#fff",
        },
        {
          accentColor: "#36343b",
          title: "Github",
          redirect: "https://github.com/cdr7299",
          native: false,
          fontColor: "#fff",
        },
      ],
    ],
  },
};
