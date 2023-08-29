"use client";

import {
  useScroll,
  useTransform,
  motion,
  useAnimate,
  useMotionValue,
} from "framer-motion";
import { GraduationCap, Lock, RefreshCcw } from "lucide-react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";
import useIntersectionObserver from "@/lib/hooks/use-intersection-observer";
import { useEffect, useRef } from "react";
import Timeline from "../../layout/timeline";
import Card from "../../home/card";
import styles from "./styles.module.css";

const education_data = [
  {
    title: "Master of Engineering",
    school: "BITS Pilani, Goa Campus",
    description:
      "Did masters here, **Did masters here**Did masters here, **Did masters here**Did masters here, **Did masters here**",
  },
  {
    title: "Bachelor of Engineering",
    school: "UPES, Dehradun",
    description:
      "Did bachelors here,Did bachelors hereDid bachelors hereDid bachelors hereDid bachelors hereDid bachelors here",
  },
];

function WorkEx() {
  const test = useMotionValue(0);
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
    <div className={styles.baseContainer}>
      <div className={styles.codeContainer}>
        <div className={styles.codeHeader}>
          <div className={`${styles.codeTitle}`}>
            <Lock size={16} className="text-[#787878]" />
            <span>my-work-experience.com</span>
            <RefreshCcw size={16} className="text-[#787878]" />
          </div>
        </div>
        <div className={styles.codeBody}></div>
        <div></div>
      </div>
      <div className="h-500px"></div>
    </div>
  );
}

export default WorkEx;
