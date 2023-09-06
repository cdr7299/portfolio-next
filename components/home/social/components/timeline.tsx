"use client";

import { motion, Variants } from "framer-motion";
import { Share2 } from "lucide-react";
import styles from "./timeline.module.css";
import {
  EDUCATION_ANIMATION_DURATION,
  EXIT_ANIMATION_DELAY_TIMELINE,
  PARLLAX_OFFSET_UP,
} from "../../home.constants";
import Parallax from "../../../layout/parllax";
import { useTheme } from "next-themes";

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
    height: 150,
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
    height: 850,
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
    <div className="relative -z-10 -mt-8 ml-4 flex w-[20px] flex-col">
      <Parallax offset={PARLLAX_OFFSET_UP}>
        <motion.div
          // animate={shouldTriggerTimeline ? { height: 400 } : ""}
          initial="hidden"
          animate={shouldTriggerTimeline ? "visible" : "hidden"}
          exit="hidden"
          variants={section_timeline_variants}
          className="ml-5 w-[4px] rounded-sm bg-gradient-to-b from-red-200  to-red-400"
        ></motion.div>
        <motion.div
          initial="hidden"
          animate={shouldTriggerTimeline ? "visible" : "hidden"}
          className={styles.iconGlow}
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
          className="ml-5 h-full w-[4px] rounded-sm bg-gradient-to-b from-red-400 via-red-600 to-red-800"
        ></motion.div>
      </Parallax>
    </div>
  );
}

export default TimelineMiddle;
