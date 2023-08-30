"use client";

import styles from "./styles.module.css";
import CodeHeader from "./components/CodeHeader";
import CodeBody from "./components/CodeBody";
import Parallax from "@/components/layout/parllax";
import { PARLLAX_OFFSET_DOWN } from "../home.constants";
import { useState } from "react";

const work_data = [
  {
    title: "Tekion",
    value: "Tekion.com",
    description:
      "asdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd",
    projects: [
      {
        project_title: "DMS - F&I",
        description:
          "asdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd ",
        tech_used:
          "asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd ",
      },
      {
        project_title: "Consumer Repo",
        description:
          "asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd ",
        tech_used:
          "asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd ",
      },
    ],
  },
  {
    title: "Gan Studio",
    value: "Gan.ai",
    description:
      " asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd",
    projects: [
      {
        project_title: "Myna",
        description:
          "asdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd ",
        tech_used:
          "asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd ",
      },
      {
        project_title: "Gan's Landing Pages",
        description:
          "asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd ",
        tech_used:
          "asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd ",
      },
      {
        project_title: "Internal tools",
        description:
          "asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd ",
        tech_used:
          "asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd asdasdasdasdasdasd ",
      },
    ],
  },
];

function WorkEx() {
  const [selectedTab, setSelectedTab] = useState<string>(work_data[0].value);
  const selectedTabData = work_data.find((item) => item.value === selectedTab);
  //   const containerRef = useRef<HTMLDivElement>(null);
  //   const containerRef2 = useRef<HTMLDivElement>(null);
  //   const { scrollYProgress } = useScroll({
  //     target: containerRef,
  //     offset: ["start end", "end end"],
  //   });
  //   const inViewObj = useIntersectionObserver(containerRef, {
  //     threshold: 0.3,
  //   });
  //   const inViewObj2 = useIntersectionObserver(containerRef2, {
  //     threshold: 0.9,
  //   });
  //   const shouldTriggerTimeline = inViewObj2?.isIntersecting || false;
  //   const [scope, animate] = useAnimate();

  //   useEffect(() => {
  //     if (shouldTriggerTimeline) {
  //       animate(
  //         scope.current,
  //         { opacity: 1, x: 0 },
  //         { delay: 0.3, duration: 0.3 },
  //       );
  //     } else {
  //       animate(
  //         scope.current,
  //         { opacity: 0, x: -100 },
  //         { delay: 0.1, duration: 0.3 },
  //       );
  //     }
  //   }, [animate, shouldTriggerTimeline, scope]);

  return (
    <Parallax offset={PARLLAX_OFFSET_DOWN}>
      <div className={styles.baseContainer}>
        <div className={styles.codeContainer}>
          <CodeHeader title={selectedTabData?.title || ""} />
          <CodeBody
            work_data={work_data}
            selectedTab={selectedTab}
            onTabChange={(item: any) => {
              setSelectedTab(item);
            }}
          />
        </div>
        <div className="h-500px"></div>
      </div>
    </Parallax>
  );
}

export default WorkEx;
