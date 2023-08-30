"use client";

import {
  useScroll,
  useTransform,
  motion,
  useAnimate,
  useMotionValue,
} from "framer-motion";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import useIntersectionObserver from "@/lib/hooks/use-intersection-observer";
import { useEffect, useRef } from "react";
import Timeline from "../../layout/timeline";
import Card from "../../home/card";
import styles from "./styles.module.css";
import CodeHeader from "./components/CodeHeader";
import CodeBody from "./components/CodeBody";
import Parallax from "@/components/layout/parllax";
import { PARLLAX_OFFSET_DOWN } from "../home.constants";

const work_data = [
  {
    title: "Tekion.com",
    description:
      "Did masters here, **Did masters here**Did masters here, **Did masters here**Did masters here, **Did masters here**",
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
  {
    title: "Gan.ai",
    description:
      "Did bachelors here,Did bachelors hereDid bachelors hereDid bachelors hereDid bachelors hereDid bachelors here",
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
  console.log("server");
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
          <CodeHeader />
          <CodeBody />
        </div>
        <div className="h-500px"></div>
      </div>
    </Parallax>
  );
}

export default WorkEx;
