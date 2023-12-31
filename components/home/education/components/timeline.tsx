"use client";

import { motion, Variants } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import styles from "./timeline.module.css";
import {
  EDUCATION_ANIMATION_DURATION,
  EXIT_ANIMATION_DELAY_TIMELINE,
} from "../../home.constants";

const start_timeline_variants: Variants = {
  visible: {
    opacity: 1,
    transition: {
      duration: EDUCATION_ANIMATION_DURATION,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      delay: EXIT_ANIMATION_DELAY_TIMELINE,
      when: "afterChildren",
    },
  },
};
const icon_timeline_variants: Variants = {
  visible: {
    opacity: 1,
    transition: {
      duration: EDUCATION_ANIMATION_DURATION,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      delay: EXIT_ANIMATION_DELAY_TIMELINE,
      when: "afterChildren",
    },
  },
};

const section_timeline_variants: Variants = {
  visible: {
    scaleY: 1,
    originY: 0,
    transition: {
      delay: 0.3,
      duration: EDUCATION_ANIMATION_DURATION,
    },
  },
  hidden: {
    scaleY: 0,
    originY: 0,
    transition: {
      delay: EXIT_ANIMATION_DELAY_TIMELINE,
      duration: EDUCATION_ANIMATION_DURATION,
    },
  },
};

function TimelineStart({
  isParentInView,
  shouldTriggerTimeline,
}: {
  isParentInView: boolean;
  shouldTriggerTimeline: boolean;
}) {
  const { resolvedTheme } = useTheme();

  return (
    <div className="relative -z-10 flex w-[50px] flex-col md:px-4 lg:w-[150px]">
      <motion.div
        initial="hidden"
        animate={isParentInView ? "visible" : "hidden"}
        exit="hidden"
        variants={start_timeline_variants}
      >
        <Image
          priority
          src="assets/lines-hero-first.svg"
          height={100}
          width={500}
          alt="whoops"
          className="ml-2 mt-[-30vh] max-w-[90vw] md:mt-[-350px] lg:max-w-[100vw]"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate={shouldTriggerTimeline ? "visible" : "hidden"}
        className={`${styles.iconGlow} mx-1 my-6 h-[30px] w-[30px] md:mx-1 md:my-8 md:h-[40px] md:w-[40px]`}
        variants={icon_timeline_variants}
      >
        <GraduationCap
          strokeWidth="0.1rem"
          color={resolvedTheme === "dark" ? "#bbb" : "#222"}
          size={40}
        />
      </motion.div>
      <motion.div
        // animate={shouldTriggerTimeline ? { height: 400 } : ""}
        initial="hidden"
        animate={shouldTriggerTimeline ? "visible" : "hidden"}
        exit="hidden"
        variants={section_timeline_variants}
        className="ml-[1.1rem] h-full w-[3px] rounded-sm bg-gradient-to-b from-purple-400 via-green-500 to-emerald-500 opacity-90 md:ml-[1.3rem] md:w-[4px]"
      ></motion.div>
    </div>
  );
}

export default TimelineStart;
