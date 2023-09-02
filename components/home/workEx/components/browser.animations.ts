import { Variants } from "framer-motion";
import { BROWSER_ANIMATION_DURATION } from "../../home.constants";

const BODY_VARIANTS: Variants = {
  open: {
    clipPath: `circle(${800 * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      delay: 0.5,
      stiffness: 20,
      restDelta: 1,
      duration: BROWSER_ANIMATION_DURATION,
    },
  },
  no_delay_open: {
    clipPath: `circle(${800 * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 1,
      duration: BROWSER_ANIMATION_DURATION,
    },
  },
  closed: {
    clipPath: "circle(0px at 40px 40px)",
    transition: {
      // delay: 0.5,
      type: "spring",
      stiffness: 300,
      damping: 40,
      duration: BROWSER_ANIMATION_DURATION,
    },
  },
};

export { BODY_VARIANTS };
