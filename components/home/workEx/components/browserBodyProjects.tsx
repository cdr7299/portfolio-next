import { Variants, motion } from "framer-motion";
import {
  BROWSER_ANIMATION_DURATION,
  PARLLAX_OFFSET_DOWN,
} from "../../home.constants";
import { useEffect } from "react";
import Balancer from "react-wrap-balancer";
import Parallax from "@/components/layout/parllax";

const project_section_variants: Variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 0.6 },
  },
  hidden: {
    y: 0,
    opacity: 0,
    transition: { staggerChildren: 0.1, delayChildren: 0 },
  },
};
const tech_section_variants: Variants = {
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: BROWSER_ANIMATION_DURATION,
    },
  },
  hidden: {
    y: 100,
    opacity: 0,
    transition: {
      duration: BROWSER_ANIMATION_DURATION,
      ease: "easeOut",
    },
  },
};

function BrowserBodyProjects({
  projectTitle,
  accentColor,
  techUsed,
  shouldAnimate,
}: {
  projectTitle: string;
  accentColor: string;
  techUsed: string[];
  shouldAnimate: boolean;
}) {
  useEffect(() => {
    console.log("mounts");

    return () => {
      console.log("unmounts");
    };
  }, []);
  return (
    <motion.div
      key={projectTitle}
      className="m-4 flex h-full flex-col gap-8 text-white"
      variants={project_section_variants}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      exit="hidden"
    >
      <div
        key={projectTitle}
        className="flex min-h-[45%] flex-col rounded-xl border-[0.1rem] border-[#16191c] bg-[#30363D] p-4 shadow-lg shadow-[#16191c] "
      >
        <Parallax offset={PARLLAX_OFFSET_DOWN}>
          <h2 className="prose mb-6 border-b-2 pb-2 text-center font-semibold tracking-wide text-slate-300 lg:prose-xl">
            <Balancer>Tech Stack</Balancer>
          </h2>
          <ul className="flex flex-wrap gap-3">
            {techUsed.map((item) => (
              <motion.li
                variants={tech_section_variants}
                key={item}
                className="rounded-md border-[0.05rem] border-stone-500 bg-stone-900 px-6 py-1 shadow-lg"
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </Parallax>
      </div>
      <motion.div className="flex min-h-[45%] flex-col rounded-xl border-[0.1rem] border-[#16191c] bg-[#30363D] p-8 shadow-lg shadow-[#16191c]">
        some description about work
      </motion.div>
    </motion.div>
  );
}

export default BrowserBodyProjects;
