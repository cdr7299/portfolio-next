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

function BrowserHeader({ title }: { title: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const inViewObj = useIntersectionObserver(containerRef, {
    threshold: 0.9,
  });

  return (
    <div className={styles.browserHeader}>
      <div className="ml-6 flex items-center">
        <ChevronLeft className="text-[#787878]" />
        <ChevronRight className="text-[#787878]" />
      </div>
      <motion.div
        className={`${styles.browserTitle}`}
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

export default BrowserHeader;
