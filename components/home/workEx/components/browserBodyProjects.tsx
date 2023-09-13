import { Variants, motion } from "framer-motion";
import {
  BROWSER_ANIMATION_DURATION,
  PARLLAX_OFFSET_DOWN,
} from "../../home.constants";
import Balancer from "react-wrap-balancer";
import Parallax from "@/components/layout/parllax";
import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { Project } from "../workEx.types";

const project_section_variants: Variants = {
  visible: {
    transition: { duration: 0.5, staggerChildren: 0.1, delayChildren: 0.6 },
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
    x: 100,
    opacity: 0,
    transition: {
      duration: BROWSER_ANIMATION_DURATION,
      ease: "easeOut",
    },
  },
};

function BrowserBodyProjects({
  projectTitle,
  techUsed,
  shouldAnimate,
  projectDescription,
  shouldUseReducedMotion,
}: {
  projectTitle: Project["project_title"];
  techUsed: Project["tech_used"];
  shouldAnimate: boolean;
  projectDescription: Project["description"];
  shouldUseReducedMotion: boolean;
}) {
  return (
    <Parallax offset={shouldUseReducedMotion ? 0 : PARLLAX_OFFSET_DOWN / 4}>
      <motion.div
        key={projectTitle}
        className="m-4 flex h-full flex-col gap-8 text-white"
        variants={project_section_variants}
        initial="hidden"
        animate={shouldUseReducedMotion || shouldAnimate ? "visible" : "hidden"}
        exit="hidden"
        layout
        layoutId="test123213"
      >
        <div
          key={projectTitle}
          className="flex min-h-[20%] flex-col rounded-xl border-[0.1rem] border-[#16191c] bg-[#30363D] p-4 shadow-lg shadow-[#16191c] "
        >
          <h2 className="prose mb-6 border-b-[0.1rem] border-[#16191c]  pb-2 text-center font-semibold tracking-wide text-slate-100 lg:prose-xl">
            <Balancer>Tech Stack</Balancer>
          </h2>
          <ul className="flex flex-wrap gap-3">
            {techUsed.map(({ title, icon }) => (
              <motion.li
                variants={tech_section_variants}
                key={icon}
                className="flex items-center gap-2 rounded-lg  bg-[#161b22] px-6 py-1 shadow"
              >
                <Image src={icon} width={80} height={10} alt="icon" />
                {title}
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div
          layoutId="asdtest123213"
          layout
          transition={{ duration: 0.3, ease: "easeIn", type: "tween" }}
          className="flex min-h-[20%] flex-col  rounded-xl border-[0.1rem] border-[#16191c] bg-[#30363D] p-8 shadow-lg shadow-[#16191c]"
        >
          <ReactMarkdown
            components={{
              h1: ({ ...props }) => (
                <h1
                  {...props}
                  className="mb-4 !text-sm font-medium transition-colors md:!text-2xl "
                />
              ),
            }}
          >
            {projectDescription}
          </ReactMarkdown>
        </motion.div>
      </motion.div>
    </Parallax>
  );
}

export default BrowserBodyProjects;
