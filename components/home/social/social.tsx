"use client";

import Image from "next/image";
import TimelineMiddle from "./components/timeline";
import { Variants, motion } from "framer-motion";
import { BROWSER_ANIMATION_DURATION } from "../home.constants";
import ParallaxCard from "@/components/layout/parallaxCards/parallaxCards";

const project_section_variants: Variants = {
  visible: {
    transition: { duration: 0.5, staggerChildren: 0.4, delayChildren: 0.7 },
  },
  hidden: {
    transition: { staggerChildren: 0.1, delayChildren: 0 },
  },
};
const tech_section_variants: Variants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: BROWSER_ANIMATION_DURATION,
    },
  },
  hidden: {
    x: -100,
    opacity: 0,
    transition: {
      duration: BROWSER_ANIMATION_DURATION,
      ease: "easeOut",
    },
  },
};

function Social() {
  return (
    <div className="flex">
      <TimelineMiddle shouldTriggerTimeline={true} />
      <div className="flex-start flex">
        <Image src="/assets/branch.svg" width={80} height={150} alt="som" />
      </div>
      <div className="mt-16 flex w-5/6 flex-col gap-16 rounded-2xl">
        <div className="rounded-2xl  px-4 py-8 text-5xl font-semibold tracking-tighter text-black dark:text-white">
          <span className="text-red-500">This site serves as my portfolio</span>{" "}
          but is also a playground for my react/next/framer experiments. Check
          out my social and github!
        </div>
        <div className="flex gap-8">
          <motion.div
            initial="hidden"
            animate={true ? "visible" : "hidden"}
            variants={project_section_variants}
            className="h-[700px]"
          >
            <ParallaxCard
              accentColor="rgb(210 50 80)"
              containerClasses="rounded-xl !border-[0] dark:!border-[0.15rem] dark:!border-[#30363d] !bg-gray-700 dark:!bg-[#161b22] shadow-md !grid !grid-cols-1 !grid-rows-2 !gap-24 rounded-3xl bg-slate-800 px-16 !py-16
            "
            >
              <>
                <motion.div
                  variants={tech_section_variants}
                  className="flex h-[200px] w-[360px] items-center justify-center rounded-lg bg-gray-100 px-6 py-2 text-center text-5xl font-bold text-slate-800"
                >
                  codechef
                </motion.div>
                <motion.div
                  variants={tech_section_variants}
                  className="flex h-[200px] w-[360px] items-center justify-center  rounded-lg bg-slate-500 px-6 py-2 text-center text-5xl font-bold text-white"
                >
                  Download Resume
                </motion.div>
              </>
            </ParallaxCard>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={true ? "visible" : "hidden"}
            variants={project_section_variants}
            className="h-[700px]"
          >
            <ParallaxCard
              accentColor="rgb(210 50 80)"
              containerClasses="rounded-xl !border-[0] dark:!border-[0.15rem] dark:!border-[#30363d] !bg-gray-700 dark:!bg-[#161b22] shadow-md !grid !grid-cols-1 !grid-rows-2 !gap-24 rounded-3xl bg-slate-800 px-16 !py-16
            "
            >
              <>
                <motion.div
                  variants={tech_section_variants}
                  className="flex h-[200px] w-[360px] items-center justify-center rounded-lg bg-blue-600 px-6 py-2 text-center text-5xl font-bold text-white shadow-lg"
                >
                  LinkedIn
                </motion.div>
                <motion.div
                  variants={tech_section_variants}
                  className="flex h-[200px] w-[360px] items-center justify-center rounded-lg bg-gray-900 px-6 py-2 text-center text-5xl font-bold text-white"
                >
                  Github
                </motion.div>
              </>
            </ParallaxCard>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Social;
