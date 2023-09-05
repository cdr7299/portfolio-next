"use client";

import { motion, Variants } from "framer-motion";
import { GraduationCap } from "lucide-react";
import styles from "./timeline.module.css";
import {
  EDUCATION_ANIMATION_DURATION,
  EXIT_ANIMATION_DELAY_TIMELINE,
  PARLLAX_OFFSET_UP,
} from "../../home.constants";
import Parallax from "../../../layout/parllax";

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
    height: 400,
    transition: { delay: 0.3, duration: EDUCATION_ANIMATION_DURATION },
  },
  hidden: {
    height: "0",
    transition: {
      delay: EXIT_ANIMATION_DELAY_TIMELINE,
      duration: EDUCATION_ANIMATION_DURATION,
    },
  },
};

function TimelineMiddle({
  shouldTriggerTimeline,
}: {
  shouldTriggerTimeline: boolean;
}) {
  return (
    <div className="flex w-1/6 flex-col md:px-4">
      <Parallax offset={PARLLAX_OFFSET_UP}>
        <motion.div
          // animate={shouldTriggerTimeline ? { height: 400 } : ""}
          initial="hidden"
          animate={shouldTriggerTimeline ? "visible" : "hidden"}
          exit="hidden"
          variants={section_timeline_variants}
          className="ml-5 w-[4px] rounded bg-gradient-to-b from-rose-300 via-red-700 to-red-900"
        ></motion.div>
        <motion.div
          initial="hidden"
          animate={shouldTriggerTimeline ? "visible" : "hidden"}
          className={styles.iconGlow}
          variants={icon_timeline_variants}
        >
          <GraduationCap strokeWidth="0.2rem" color="#fff" size={40} />
        </motion.div>
        <motion.div
          // animate={shouldTriggerTimeline ? { height: 400 } : ""}
          initial="hidden"
          animate={shouldTriggerTimeline ? "visible" : "hidden"}
          exit="hidden"
          variants={section_timeline_variants}
          className="ml-5 w-[4px] rounded bg-gradient-to-b from-red-700 via-rose-200 to-blue-100"
        ></motion.div>
      </Parallax>
    </div>
  );
}

export default TimelineMiddle;
