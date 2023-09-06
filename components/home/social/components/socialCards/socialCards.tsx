"use client";
import { Variants, motion } from "framer-motion";
import { BROWSER_ANIMATION_DURATION } from "../../../home.constants";
import ParallaxCard from "@/components/layout/parallaxCards/parallaxCards";
import Parallax from "@/components/layout/parllax";

const project_section_variants: Variants = {
  visible: {
    transition: { duration: 0.3, staggerChildren: 0.2, delayChildren: 0.2 },
  },
  hidden: {
    transition: { staggerChildren: 0.1 },
  },
};
const tech_section_variants: Variants = {
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  hover: {
    scale: 0.98,
  },
  hidden: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function SocialCards({ isContainerInView }: { isContainerInView: boolean }) {
  return (
    <Parallax>
      <motion.div
        initial="hidden"
        animate={isContainerInView ? "visible" : "hidden"}
        variants={project_section_variants}
        className="ml-4 mt-16 flex w-full justify-between gap-8"
      >
        <motion.div className="h-[700px]">
          <ParallaxCard
            accentColor="rgb(210 50 80)"
            containerClasses="rounded-xl !border-[0] dark:!border-[0.15rem] dark:!border-[#30363d] !bg-gray-700 dark:!bg-[#161b22] shadow-md !grid !grid-cols-1 !grid-rows-2 !gap-24 rounded-3xl bg-slate-800 px-16 !py-16"
          >
            <>
              <motion.button
                initial="hidden"
                animate={isContainerInView ? "visible" : "hidden"}
                whileTap="tap"
                whileHover="hover"
                variants={tech_section_variants}
                className="relative z-10 flex h-[200px] w-[360px] cursor-pointer items-center justify-center rounded-lg bg-gray-100 px-6 py-2 text-center text-4xl font-bold text-slate-800 shadow-lg"
              >
                codechef
              </motion.button>
              <motion.div
                variants={tech_section_variants}
                className="flex h-[200px] w-[360px] items-center justify-center  rounded-lg bg-slate-500 px-6 py-2 text-center text-4xl font-bold text-white shadow-lg"
              >
                Download Resume
              </motion.div>
            </>
          </ParallaxCard>
        </motion.div>
        <motion.div className="h-[700px]">
          <ParallaxCard
            accentColor="rgb(210 50 80)"
            containerClasses="rounded-xl !border-[0] dark:!border-[0.15rem] dark:!border-[#30363d] !bg-gray-700 dark:!bg-[#161b22] shadow-md !grid !grid-cols-1 !grid-rows-2 !gap-24 rounded-3xl bg-slate-800 px-16 !py-16
          "
          >
            <>
              <motion.div
                variants={tech_section_variants}
                className="flex h-[200px] w-[360px] items-center justify-center rounded-lg bg-blue-600 px-6 py-2 text-center text-4xl font-bold text-white shadow-lg"
              >
                LinkedIn
              </motion.div>
              <motion.div
                variants={tech_section_variants}
                className="flex h-[200px] w-[360px] items-center justify-center rounded-lg bg-gray-600 px-6 py-2 text-center text-4xl font-bold text-white shadow-lg"
              >
                Github
              </motion.div>
            </>
          </ParallaxCard>
        </motion.div>
      </motion.div>
    </Parallax>
  );
}

export default SocialCards;
