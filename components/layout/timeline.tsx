"use client";

import { useTransform, motion, MotionValue, Variants } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import styles from "./timeline.module.css";
import {
  EXIT_ANIMATION_DELAY_TIMELINE,
  PARLLAX_OFFSET_UP,
} from "../home/home.constants";
import Parallax from "./parllax";

const start_timeline_variants: Variants = {
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
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
      duration: 0.6,
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
    height: 400,
    transition: { delay: 0.3, duration: 0.6 },
  },
  hidden: {
    height: "0",
    transition: { delay: EXIT_ANIMATION_DELAY_TIMELINE, duration: 0.6 },
  },
};

function TimelineStart({
  isParentInView,
  shouldTriggerTimeline,
}: {
  isParentInView: boolean;
  shouldTriggerTimeline: boolean;
}) {
  return (
    <div className="flex w-1/6 flex-col px-4">
      <Parallax offset={PARLLAX_OFFSET_UP}>
        <motion.div
          initial="hidden"
          animate={isParentInView ? "visible" : "hidden"}
          exit="hidden"
          variants={start_timeline_variants}
        >
          <Image
            src="assets/lines-hero-first.svg"
            height={100}
            width={500}
            alt="whoops"
            className="ml-2 mt-[-350px] !max-w-[100vw]"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          animate={shouldTriggerTimeline ? "visible" : "hidden"}
          className={styles.iconGlow}
          variants={icon_timeline_variants}
        >
          <GraduationCap strokeWidth="0.1rem" color="#222" size={35} />
        </motion.div>
        <motion.div
          // animate={shouldTriggerTimeline ? { height: 400 } : ""}
          initial="hidden"
          animate={shouldTriggerTimeline ? "visible" : "hidden"}
          exit="hidden"
          variants={section_timeline_variants}
          className="ml-5 w-[4px] rounded bg-gradient-to-b from-purple-200 via-emerald-300 to-green-400"
        ></motion.div>
      </Parallax>
    </div>
  );
}

export default TimelineStart;
