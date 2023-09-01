import {
  EDUCATION_ANIMATION_DURATION,
  EXIT_ANIMATION_DELAY,
} from "../home.constants";

const TITLE_VARIANTS = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: EDUCATION_ANIMATION_DURATION,
    },
  },
  hidden: {
    x: -100,
    opacity: 0,
    transition: {
      delay: EXIT_ANIMATION_DELAY,
      duration: EDUCATION_ANIMATION_DURATION,
    },
  },
};

const INTRO_CARD_VARIANTS = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: EDUCATION_ANIMATION_DURATION,
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
