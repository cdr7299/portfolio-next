import {
  ChevronLeft,
  ChevronRight,
  Lock,
  Plus,
  RefreshCcw,
} from "lucide-react";
import { motion } from "framer-motion";

import styles from "./styles.module.css";
import { BROWSER_ANIMATION_DURATION } from "../../home.constants";
import { WorkData } from "../workEx.types";

function BrowserHeader({ title }: { title: WorkData["title"] }) {
  return (
    <div className={styles.browserHeader}>
      <div className="invisible flex items-center md:visible md:ml-6">
        <ChevronLeft className="text-[#787878]" />
        <ChevronRight className="text-[#787878]" />
      </div>
      <motion.div
        className={`${styles.browserTitle} w-[90%] text-sm md:w-[50%] md:text-lg`}
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
