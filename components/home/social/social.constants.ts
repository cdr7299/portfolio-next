import { SocialData } from "./social.types";

export const social_data: SocialData = {
  titleAccent: "This site serves as my portfolio",
  titleDescription:
    "but is also a playground for my react/next/framer experiments. Check out my social and github!",
  cardData: {
    columns: [
      [
        {
          accentColor: "#1ba0f144",
          title: "Download Resume",
          native: true,
          redirect:
            "https://drive.google.com/file/d/17xMKWXCo_yO5SEndLysOcSBm4SYHhfdY/view?usp=drive_link",
          fontColor: "#fff",
        },
        {
          accentColor: "#1014dda2",
          title: "See this project on Github",
          native: true,
          redirect: "https://github.com/cdr7299/portfolio-next",
          fontColor: "#fff",
        },
      ],
      [
        {
          accentColor: "#ddd",
          title: "LinkedIn",
          icon: "/assets/linkedIn.png",
          redirect: "https://www.linkedin.com/in/vineet-sawhney/",
          native: false,
          fontColor: "#333",
        },
        {
          accentColor: "#36343b",
          title: "Github",
          icon: "/assets/tech/gh.png",
          iconClasses: "mr-2",
          redirect: "https://github.com/cdr7299",
          native: false,
          fontColor: "#fff",
        },
      ],
    ],
  },
};
