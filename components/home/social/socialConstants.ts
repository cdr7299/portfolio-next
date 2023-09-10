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
          redirect: "",
          fontColor: "#fff",
        },
        {
          accentColor: "#76e4dda2",
          title: "facebook",
          native: true,
          redirect: "",
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
