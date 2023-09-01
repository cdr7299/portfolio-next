import {
  ChevronLeft,
  ChevronRight,
  Lock,
  Plus,
  RefreshCcw,
} from "lucide-react";
import { motion } from "framer-motion";

import { useRef } from "react";
import useIntersectionObserver from "@/lib/hooks/use-intersection-observer";
import { HEADER_VARIANTS } from "./browser.animations";
import styles from "./styles.module.css";
import { BROWSER_ANIMATION_DURATION } from "../../home.constants";

function BrowserHeader({ title }: { title: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inViewObj = useIntersectionObserver(containerRef, {
    threshold: 0.7,
  });

  return (
    <div className={styles.browserHeader}>
      <div
        className="invisible ml-6 flex items-center md:visible"
        ref={containerRef}
      >
        <ChevronLeft className="text-[#787878]" />
        <ChevronRight className="text-[#787878]" />
      </div>
      <motion.div
        className={`${styles.browserTitle} w-[90%] text-sm md:w-[50%] md:text-lg`}
        variants={HEADER_VARIANTS}
        animate={inViewObj?.isIntersecting ? "visible" : "hidden"}
      >
        <Lock size={16} className="text-[#787878]" />
        <span>
          my-work-experience@
          <motion.span
            key={title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: BROWSER_ANIMATION_DURATION }}
          >
            {title}
          </motion.span>
        </span>
        <RefreshCcw size={16} className="text-[#787878] " />
      </motion.div>
      <Plus className="invisible mr-6 text-[#787878] md:visible" />
    </div>
  );
}

export default BrowserHeader;
