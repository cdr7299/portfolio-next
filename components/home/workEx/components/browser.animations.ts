import { Variants } from "framer-motion";
import { EXIT_ANIMATION_DELAY } from "../../home.constants";

const HEADER_VARIANTS: Variants = {
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

const BODY_VARIANTS: Variants = {
  open: {
    clipPath: `circle(${800 * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export { HEADER_VARIANTS, BODY_VARIANTS };
