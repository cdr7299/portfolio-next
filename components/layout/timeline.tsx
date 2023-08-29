"use client";

import { useTransform, motion, MotionValue, Variants } from "framer-motion";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import styles from "./timeline.module.css";

const timeline_variants: Variants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
  hidden: {
    opacity: 0,
    y: -100,
    transition: {
      when: "afterChildren",
    },
  },
};

function Timeline({
  parentScrollYProgress,
  isParentInView,
  shouldTriggerTimeline,
}: {
  parentScrollYProgress: MotionValue<number>;
  isParentInView: boolean;
  shouldTriggerTimeline: boolean;
}) {
  const scaleY = useTransform(parentScrollYProgress, [0, 1], [0, 700]);

  return (
    <div className="flex w-1/6 flex-col px-4">
      <motion.div
        initial="hidden"
        animate={isParentInView ? "visible" : "hidden"}
        exit="hidden"
        variants={timeline_variants}
      >
        <Image
          src="assets/lines-hero-first.svg"
          height={100}
          width={500}
          alt="whoops"
          className="ml-2 mt-[-350px]  !max-w-[100vw]"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        animate={shouldTriggerTimeline ? "visible" : "hidden"}
        className="my-4 ml-[-4px] flex h-[55px] w-[55px] items-center justify-center rounded-[60px] border-4 p-2"
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      >
        <GraduationCap className="text-black " color="#000" size={35} />
      </motion.div>
      <motion.div
        animate={shouldTriggerTimeline ? { height: 400 } : ""}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mx-5 w-[4px] rounded bg-gradient-to-b from-purple-200 via-emerald-300 to-green-400"
      ></motion.div>
    </div>
  );
}

export default Timeline;
