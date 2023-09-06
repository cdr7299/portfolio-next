import { WorkData } from "./workEx.types";

const work_data: WorkData[] = [
  {
    title: "Gan Studio",
    value: "Gan.ai",
    color: "#6957ff",
    descriptionTitle: "FrontEnd team lead ",
    description: `at Gan Studio, was involved with all things frontend at Gan, from setting up a new mono-repo for our new projects, and revamping the existing SaaS frontend workflow.`,
    projects: [
      {
        project_title: "Gan's Landing Pages",
        description:
          "# Gan Studio's landing pages. \n ## ☉ Utilized Framer Motion for intricate animations on homepage \n ## ☉ Mobile And Tab Friendly Layouts",
        tech_used: [
          { title: "", icon: "/assets/tech/next3.png" },
          { title: "", icon: "/assets/tech/tailwind.png" },
          { title: "", icon: "/assets/tech/mui.webp" },
          { title: "NX", icon: "/assets/tech/nx.webp" },
          { title: "Actions", icon: "/assets/tech/gh.png" },
        ],
      },
      {
        project_title: "Myna",
        description:
          "# Myna - Gan Studio's SaaS platform. \n ## ☉ Myna is Gan.ai’s SaaS tool which enables users to record/upload their videos and then create personalized copies of such a video and deliver them to their customers. \n ## ☉ Worked with the MediaRecorder and MediaStream API to allow video recording on the platform. \n ## ☉ Revamped the existing workflows with a new theme and UX. \n ## ☉ Wrote base components over MUI (Styling library).Stack - React, TypeScript, Redux, MUI, Tailwind",
        tech_used: [
          { title: "", icon: "/assets/tech/react1.png" },
          { title: "", icon: "/assets/tech/redux.png" },
          { title: "", icon: "/assets/tech/mui.webp" },
        ],
      },
      {
        project_title: "Internal tools",
        description:
          "Participated in development of an internal tool to ease the pipeline for video generation.",
        tech_used: [
          { title: "", icon: "/assets/tech/react1.png" },
          { title: "", icon: "/assets/tech/redux.png" },
          { title: "", icon: "/assets/tech/mui.webp" },
        ],
      },
    ],
  },
  {
    title: "Tekion",
    color: "#05deba",
    value: "Tekion.com",
    descriptionTitle: "Software Engineer ",
    description:
      "at Tekion. Time well spent with a large-scale React SPA, a consumer-facing platform and learning the basics of JS ecosystem.",
    projects: [
      {
        project_title: "Dealer Management System - F&I",
        description:
          "# Was part of the F&I Team at Tekion. \n ## ☉ Exposed to workings of a very large Single Page Application, antd library, pusher notfications. \n ☉ Wrote a scalable system to support an increasing number of wrapped third party APIs for external information providers.",
        tech_used: [
          { title: "", icon: "/assets/tech/react1.png" },
          { title: "", icon: "/assets/tech/redux.png" },
          { title: "antd", icon: "/assets/tech/antd.png" },
          { title: "pusherjs", icon: "/assets/tech/pusherjs.png" },
          { title: "i18n", icon: "/assets/tech/i18n.png" },
        ],
      },
      {
        project_title: "Digital Retail System",
        description:
          "## ☉ Worked as a UI developer with a team responsible for developing Tekion's consumer-facing DRS from scratch which is a platform for shopping cars online and having a zero-contact sales experience.\n ## ☉ Participated in wricng base components to be used applicacon wide by other members of the team. \n ## ☉ DRS is meant to be scalable for various OEMs as they have their own designs and flows, and has abilices to be customizable by a dealership. Worked on integrating customization abilities with the Dealership Management System.",
        tech_used: [
          { title: "", icon: "/assets/tech/next3.png" },
          { title: "", icon: "/assets/tech/redux.png" },
          { title: "", icon: "/assets/tech/mui.webp" },
          { title: "pusherjs", icon: "/assets/tech/pusherjs.png" },
          { title: "i18n", icon: "/assets/tech/i18n.png" },
        ],
      },
    ],
  },
];

export { work_data };
