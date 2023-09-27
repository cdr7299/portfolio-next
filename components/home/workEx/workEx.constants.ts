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
        link: "https://www.gan.ai",
        linkHelper: "Gan.ai",
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
          "# Myna - Gan Studio's SaaS platform. \n ## ☉ Myna is Gan.ai’s SaaS tool which enables users to record/upload their videos and then create personalized copies of such a video and deliver them to their customers. \n ## ☉ Worked with the MediaRecorder and MediaStream API to allow video recording on the platform. \n ## ☉ Revamped the existing workflows with a new theme and UX. \n ## ☉ Wrote base components over MUI (Styling library).",
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
          { title: "NX", icon: "/assets/tech/nx.webp" },
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
        project_title: "Digital Retail System",
        link: "https://drs.hyundaiofgilroy.com/drs/inventory/search?annualMiles=12000&downPayment=5000&maxPayment=5000&minPayment=100&paymentType=LOAN&terms=72&vehicleType=NEW",
        linkHelper: "Tekion's DRS",
        description:
          " # DRS Team at Tekion \n ## ☉ UI developer with a team responsible for developing Tekion's consumer-facing DRS, which is a platform for shopping cars online with zero-contact sales experience.\n ## ☉ Participated in writing base components to be used applicacon wide by other members of the team. \n ## ☉ DRS is meant to be scalable for various OEMs as they have their own designs and flows, and can be customized by the dealership. \n ## ☉ Worked on integrating customization abilities with the Dealership Management System.",
        tech_used: [
          { title: "", icon: "/assets/tech/next3.png" },
          { title: "", icon: "/assets/tech/redux.png" },
          { title: "", icon: "/assets/tech/mui.webp" },
          { title: "", icon: "/assets/tech/pusher.svg" },
        ],
      },
      {
        project_title: "Dealer Management System - F&I",
        description:
          "# F&I Team at Tekion. \n ## ☉ Exposed to workings of a very large Single Page Application, antd library, pusher notfications. \n  ## ☉ Wrote a scalable system to support an increasing number of wrapped third party APIs for external information providers.",
        tech_used: [
          { title: "", icon: "/assets/tech/react1.png" },
          { title: "", icon: "/assets/tech/redux.png" },
          { title: "antd", icon: "/assets/tech/antd.png" },
          { title: "", icon: "/assets/tech/pusher.svg" },
        ],
      },
    ],
  },
];

export { work_data };
