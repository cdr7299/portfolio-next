import {
  ChevronLeft,
  ChevronRight,
  Lock,
  Plus,
  RefreshCcw,
} from "lucide-react";
import { motion } from "framer-motion";

import styles from "./styles.module.css";
import { useRef } from "react";
import useIntersectionObserver from "@/lib/hooks/use-intersection-observer";
import { EXIT_ANIMATION_DELAY } from "../../home.constants";

const HEADER_VARIANTS = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.3,
    },
  },
  hidden: {
    x: -100,
    opacity: 0,
    transition: {
      delay: EXIT_ANIMATION_DELAY,
      duration: 0.3,
    },
  },
};

function CodeHeader({ title }: { title: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inViewObj = useIntersectionObserver(containerRef, {
    threshold: 0.9,
  });

  return (
    <div className={styles.codeHeader}>
      <div className="ml-6 flex items-center">
        <ChevronLeft className="text-[#787878]" />
        <ChevronRight className="text-[#787878]" />
      </div>
      <motion.div
        className={`${styles.codeTitle}`}
        variants={HEADER_VARIANTS}
        animate={inViewObj?.isIntersecting ? "visible" : "hidden"}
        ref={containerRef}
      >
        <Lock size={16} className="text-[#787878]" />
        <span>
          my-work-experience@
          <motion.span
            key={title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.span>
        </span>
        <RefreshCcw size={16} className="text-[#787878]" />
      </motion.div>
      <Plus className="mr-6 text-[#787878]" />
    </div>
  );
}

export default CodeHeader;
