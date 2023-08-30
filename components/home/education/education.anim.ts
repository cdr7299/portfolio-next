import { EXIT_ANIMATION_DELAY } from "../home.constants";

const TITLE_VARIANTS = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
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

const INTRO_CARD_VARIANTS = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
  hidden: {
    opacity: 0,
    y: 100,
    transition: {
      delay: EXIT_ANIMATION_DELAY,
      duration: 0.6,
      when: "afterChildren",
    },
  },
};

export { TITLE_VARIANTS, INTRO_CARD_VARIANTS };
