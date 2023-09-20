"use client";

import { motion, Variants } from "framer-motion";
import { Share2 } from "lucide-react";
import { useTheme } from "next-themes";
import styles from "./timeline.module.css";
import {
  EDUCATION_ANIMATION_DURATION,
  EXIT_ANIMATION_DELAY_TIMELINE,
} from "../../home.constants";

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
    height: 120,
    transition: {
      delay: 0.3,
      duration: EDUCATION_ANIMATION_DURATION,
    },
  },
  hidden: {
    height: "0",
    transition: {
      delay: EXIT_ANIMATION_DELAY_TIMELINE,
      duration: EDUCATION_ANIMATION_DURATION,
    },
  },
};
const section_timeline_variants2: Variants = {
  visible: {
    height: 660,
    transition: {
      delay: 0.3,
      duration: EDUCATION_ANIMATION_DURATION,
      ease: "easeOut",
    },
  },
  hidden: {
    height: "0",
    transition: {
      delay: EXIT_ANIMATION_DELAY_TIMELINE,
      duration: EDUCATION_ANIMATION_DURATION,
      ease: "easeOut",
    },
  },
};

function TimelineMiddle({
  shouldTriggerTimeline,
}: {
  shouldTriggerTimeline: boolean;
}) {
  const { resolvedTheme } = useTheme();
  return (
    <div className="relative -z-10 -mt-4 ml-4 flex w-[10px] flex-col md:w-[20px]">
      <motion.div
        // animate={shouldTriggerTimeline ? { height: 400 } : ""}
        initial="hidden"
        animate={shouldTriggerTimeline ? "visible" : "hidden"}
        exit="hidden"
        variants={section_timeline_variants}
        className="ml-2 w-[3px] rounded-sm bg-gradient-to-b from-red-200 to-red-400 md:ml-5 md:w-[4px]"
      ></motion.div>
      <motion.div
        initial="hidden"
        animate={shouldTriggerTimeline ? "visible" : "hidden"}
        className={`${styles.iconGlow} my-6 h-[25px] w-[25px] sm:h-[1rem] md:mx-1 md:my-8 md:h-[35px] md:w-[35px] `}
        variants={icon_timeline_variants}
      >
        <Share2
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
        variants={section_timeline_variants2}
        className="ml-2 h-full w-[3px] bg-gradient-to-b from-red-400 via-red-600 to-red-800 md:ml-5 md:w-[4px]"
      ></motion.div>
    </div>
  );
}

export default TimelineMiddle;
